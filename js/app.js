// ── DEVMASTER MAIN JS ──

// ── AUTH STATE ──
const Auth = {
  getUser() {
    try { return JSON.parse(localStorage.getItem('dm_user')) || null; } catch { return null; }
  },
  setUser(u) { localStorage.setItem('dm_user', JSON.stringify(u)); },
  logout() { localStorage.removeItem('dm_user'); window.location.href = 'index.html'; },
  isLoggedIn() { return !!this.getUser(); }
};

// ── NAVBAR ──
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  renderNavAuth();
}

function renderNavAuth() {
  const area = document.getElementById('nav-auth-area');
  if (!area) return;
  const user = Auth.getUser();
  if (user) {
    const initials = (user.firstName?.[0] || '') + (user.lastName?.[0] || '');
    area.innerHTML = `
      <a href="courses.html" class="btn btn-ghost btn-sm">📚 Kurslar</a>
      <div class="profile-btn" onclick="window.location.href='profile.html'" style="cursor:pointer">
        <div class="profile-avatar">${initials || '👤'}</div>
        <span>${user.firstName || user.email}</span>
      </div>`;
  } else {
    area.innerHTML = `
      <button class="btn btn-ghost btn-sm" onclick="openModal('login-modal')">Kirish</button>
      <button class="btn btn-primary btn-sm" onclick="openModal('register-modal')">Ro'yxatdan o'tish</button>`;
  }
}

// ── MODALS ──
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}

// Close on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});

// ── LOGIN ──
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email')?.value.trim();
  const pass  = document.getElementById('login-pass')?.value;
  if (!email || !pass) return showToast('Barcha maydonlarni to\'ldiring', 'error');

  const users = JSON.parse(localStorage.getItem('dm_users') || '[]');
  const user  = users.find(u => u.email === email && u.password === pass);
  if (!user) return showToast('Email yoki parol noto\'g\'ri', 'error');

  Auth.setUser(user);
  closeModal('login-modal');
  showToast(`Xush kelibsiz, ${user.firstName}! 👋`, 'success');
  setTimeout(() => renderNavAuth(), 300);
}

// ── REGISTER ──
function handleRegister(e) {
  e.preventDefault();
  const firstName = document.getElementById('reg-fname')?.value.trim();
  const lastName  = document.getElementById('reg-lname')?.value.trim();
  const username  = document.getElementById('reg-username')?.value.trim();
  const email     = document.getElementById('reg-email')?.value.trim();
  const pass      = document.getElementById('reg-pass')?.value;

  if (!firstName || !lastName || !email || !pass) return showToast('Barcha maydonlarni to\'ldiring', 'error');
  if (pass.length < 6) return showToast('Parol kamida 6 ta belgi bo\'lishi kerak', 'error');

  const users = JSON.parse(localStorage.getItem('dm_users') || '[]');
  if (users.find(u => u.email === email)) return showToast('Bu email allaqachon ro\'yxatdan o\'tgan', 'error');

  const newUser = {
    id: Date.now(),
    firstName, lastName,
    username: username || email.split('@')[0],
    email, password: pass,
    joinedAt: new Date().toLocaleDateString('uz-UZ'),
    completedCourses: [],
    progress: {},
    certificates: [],
    level: 'starter',
    xp: 0
  };

  users.push(newUser);
  localStorage.setItem('dm_users', JSON.stringify(users));
  Auth.setUser(newUser);

  closeModal('register-modal');
  showToast(`Xush kelibsiz, ${firstName}! 🎉`, 'success');
  setTimeout(() => renderNavAuth(), 300);
}

// ── TOAST ──
function showToast(msg, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ── SCROLL ANIMATIONS ──
function initScrollAnimations() {
  const els = document.querySelectorAll('.animate-in');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}

// ── FAQ ──
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ── COUNTER ANIMATION ──
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current).toLocaleString() + (el.dataset.suffix || '');
    }, 16);
  });
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initFAQ();

  // Counter animation on scroll
  const statsSection = document.querySelector('.hero-stats');
  if (statsSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounters(); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(statsSection);
  }

  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});