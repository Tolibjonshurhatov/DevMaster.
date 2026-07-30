// ══════════════════════════════════════════
//  DEVMASTER — APP.JS (Firebase Auth)
// ══════════════════════════════════════════

import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  doc, setDoc, getDoc, updateDoc,
  collection, query, where, getDocs
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

// ── AUTH STATE ──
window.Auth = {
  _user: null,
  _profile: null,

  getUser()    { return this._profile; },
  isLoggedIn() { return !!auth.currentUser; },

  async logout() {
    await signOut(auth);
    this._user = null;
    this._profile = null;
    window.location.href = "index.html";
  }
};

// ── FIRESTORE: Profilni olish ──
async function fetchProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() : null;
}

// ── AUTH STATE LISTENER ──
onAuthStateChanged(auth, async (user) => {
  if (user) {
    Auth._user = user;
    Auth._profile = await fetchProfile(user.uid);
  } else {
    Auth._user = null;
    Auth._profile = null;
  }
  renderNavAuth();
});

// ── NAVBAR ──
function initNavbar() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  });
}

window.renderNavAuth = function () {
  const area = document.getElementById("nav-auth-area");
  if (!area) return;
  const profile = Auth._profile;
  if (profile) {
    const initials = (profile.firstName?.[0] || "") + (profile.lastName?.[0] || "");
    area.innerHTML = `
      <a href="courses.html" class="btn btn-ghost btn-sm">📚 Kurslar</a>
      <div class="profile-btn" onclick="window.location.href='profile.html'" style="cursor:pointer">
        <div class="profile-avatar">${initials || "👤"}</div>
        <span>${profile.firstName || profile.email}</span>
      </div>`;
  } else {
    area.innerHTML = `
      <button class="btn btn-ghost btn-sm" onclick="openModal('login-modal')">Kirish</button>
      <button class="btn btn-primary btn-sm" onclick="openModal('register-modal')">Ro'yxatdan o'tish</button>`;
  }
};

// ── MODALS ──
window.openModal = function (id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add("open"); document.body.style.overflow = "hidden"; }
};
window.closeModal = function (id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove("open"); document.body.style.overflow = ""; }
};
document.addEventListener("click", e => {
  if (e.target.classList.contains("modal-overlay")) {
    e.target.classList.remove("open");
    document.body.style.overflow = "";
  }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach(m => {
      m.classList.remove("open"); document.body.style.overflow = "";
    });
  }
});

// ── REGISTER ──
window.handleRegister = async function (e) {
  e.preventDefault();
  const firstName = document.getElementById("reg-fname")?.value.trim();
  const lastName  = document.getElementById("reg-lname")?.value.trim();
  const username  = document.getElementById("reg-username")?.value.trim().toLowerCase();
  const email     = document.getElementById("reg-email")?.value.trim();
  const pass      = document.getElementById("reg-pass")?.value;

  if (!firstName || !lastName || !email || !pass) return showToast("Barcha maydonlarni to'ldiring", "error");
  if (pass.length < 6) return showToast("Parol kamida 6 ta belgi bo'lishi kerak", "error");
  if (!username) return showToast("Username kiriting", "error");
  if (!/^[a-z0-9_]+$/.test(username)) return showToast("Username faqat lotin harflari, raqam va _ bo'lishi mumkin", "error");

  const btn = e.target.querySelector("button[type=submit]");
  if (btn) { btn.disabled = true; btn.textContent = "Tekshirilmoqda..."; }

  try {
    // Username unikligini tekshirish
    const uQ = query(collection(db, "users"), where("username", "==", username));
    const uSnap = await getDocs(uQ);
    if (!uSnap.empty) {
      if (btn) { btn.disabled = false; btn.textContent = "Ro'yxatdan o'tish 🚀"; }
      return showToast("Bu username band! Boshqa tanlang.", "error");
    }

    // Firebase Auth'da yaratish
    const cred = await createUserWithEmailAndPassword(auth, email, pass);
    const uid = cred.user.uid;

    // Firestore'ga saqlash
    const newProfile = {
      uid, firstName, lastName, username, email,
      joinedAt: new Date().toLocaleDateString("uz-UZ"),
      completedCourses: [],
      progress: {},
      certificates: [],
      level: "starter",
      xp: 0
    };
    await setDoc(doc(db, "users", uid), newProfile);

    Auth._profile = newProfile;
    closeModal("register-modal");
    showToast(`Xush kelibsiz, ${firstName}! 🎉`, "success");
    renderNavAuth();
  } catch (err) {
    let msg = "Xato yuz berdi";
    if (err.code === "auth/email-already-in-use") msg = "Bu email allaqachon ro'yxatdan o'tgan";
    if (err.code === "auth/invalid-email")        msg = "Email noto'g'ri formatda";
    showToast(msg, "error");
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "Ro'yxatdan o'tish 🚀"; }
  }
};

// ── LOGIN ──
window.handleLogin = async function (e) {
  e.preventDefault();
  const email = document.getElementById("login-email")?.value.trim();
  const pass  = document.getElementById("login-pass")?.value;
  if (!email || !pass) return showToast("Email va parolni kiriting", "error");

  const btn = e.target.querySelector("button[type=submit]");
  if (btn) { btn.disabled = true; btn.textContent = "Kirish..."; }

  try {
    await signInWithEmailAndPassword(auth, email, pass);
    closeModal("login-modal");
    showToast("Xush kelibsiz! 👋", "success");
  } catch (err) {
    let msg = "Email yoki parol noto'g'ri";
    if (err.code === "auth/too-many-requests") msg = "Juda ko'p urinish. Biroz kuting.";
    showToast(msg, "error");
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "Kirish →"; }
  }
};

// ── TOAST ──
window.showToast = function (msg, type = "info") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const icons = { success: "✅", error: "❌", info: "ℹ️", warning: "⚠️" };
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.classList.add("show"), 10);
  setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 400); }, 3500);
};

// ── SCROLL ANIMATIONS ──
window.initScrollAnimations = function () {
  const els = document.querySelectorAll(".animate-in");
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => observer.observe(el));
};

// ── FAQ ──
window.initFAQ = function () {
  document.querySelectorAll(".faq-question").forEach(q => {
    q.addEventListener("click", () => {
      const item = q.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
};

// ── COUNTER ANIMATION ──
window.animateCounters = function () {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = parseInt(el.dataset.count);
    const step = target / (2000 / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || "");
    }, 16);
  });
};

// ── TOGGLE PASS ──
window.togglePass = function (id) {
  const inp = document.getElementById(id);
  if (inp) inp.type = inp.type === "password" ? "text" : "password";
};

// ── INIT ──
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initScrollAnimations();
  initFAQ();

  const statsSection = document.querySelector(".hero-stats");
  if (statsSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(statsSection);
  }

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
});

// ── PROFILE UPDATE HELPER (boshqa sahifalar uchun) ──
window.updateUserProfile = async function (data) {
  const user = auth.currentUser;
  if (!user) return;
  await updateDoc(doc(db, "users", user.uid), data);
  Auth._profile = { ...Auth._profile, ...data };
};

window.saveProgress = async function (courseId, videoId, done, totalVideos) {
  const user = auth.currentUser;
  if (!user) return null;

  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists()) return null;
  const u = snap.data();

  const progress = u.progress || {};
  if (!progress[courseId]) progress[courseId] = { videos: [], percent: 0 };

  const vids = progress[courseId].videos || [];
  if (done && !vids.includes(videoId)) vids.push(videoId);
  if (!done) {
    const i = vids.indexOf(videoId);
    if (i > -1) vids.splice(i, 1);
  }
  progress[courseId].videos = vids;
  progress[courseId].percent = Math.round((vids.length / totalVideos) * 100);

  const updates = { progress };

  // Kurs tugaganini tekshirish
  if (progress[courseId].percent === 100) {
    const completedCourses = u.completedCourses || [];
    if (!completedCourses.includes(courseId)) {
      completedCourses.push(courseId);
      updates.completedCourses = completedCourses;

      const certificates = u.certificates || [];
      if (!certificates.find(c => c.courseId === courseId)) {
        certificates.push({
          courseId,
          courseName: u.progress?.[courseId]?.courseName || courseId,
          earnedAt: new Date().toLocaleDateString("uz-UZ"),
          id: "DM-" + Date.now()
        });
        updates.certificates = certificates;
      }
      updates.xp = (u.xp || 0) + 500;
    }
  }

  await updateDoc(doc(db, "users", user.uid), updates);
  Auth._profile = { ...Auth._profile, ...updates, progress };
  return progress[courseId];
};
