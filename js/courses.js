// ══════════════════════════════════════════
//  DEVMASTER — COURSES.JS
// ══════════════════════════════════════════

const COURSES = [
  {
    id: "frontend", title: "Frontend Development", type: "Frontend",
    emoji: "🎨", category: "frontend", badge: "Mashhur",
    desc: "HTML, CSS, JavaScript, React va zamonaviy frontend texnologiyalarini o'rganing.",
    lessons: 48, hours: 32, level: "Boshlang'ich",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
    videos: [
      { id: 1, title: "Kurs haqida",              duration: "18:30", url: "https://www.youtube.com/embed/9dUhZq9dkHM" },
      { id: 2, title: "Web haqida",               duration: "24:15", url: "https://www.youtube.com/embed/E9OKpacyUSc" },
      { id: 3, title: "Kirish",                   duration: "32:00", url: "https://www.youtube.com/embed/_j7yneg6if0" },
      { id: 4, title: "Dasturlash muhiti",         duration: "28:45", url: "https://www.youtube.com/embed/M6AS_IdZK7s" },
      { id: 5, title: "Hujjat strukturasi",        duration: "35:20", url: "https://www.youtube.com/embed/1Bmqo8tsOq8" },
      { id: 6, title: "Elementlar va attributelar",duration: "40:00", url: "https://www.youtube.com/embed/jMermL9QA48" },
      { id: 7, title: "Headings",                  duration: "38:10", url: "https://www.youtube.com/embed/dgcyvjQiJnQ" },
      { id: 8, title: "Styles",                   duration: "22:30", url: "https://www.youtube.com/embed/ifw_VNZWW1I" },
    ]
  },
  {
    id: "backend", title: "Backend Development", type: "Backend",
    emoji: "⚙️", category: "backend", badge: "Trending",
    desc: "Node.js, Python, ma'lumotlar bazasi va REST API larni yaratishni o'rganing.",
    lessons: 52, hours: 40, level: "O'rta",
    skills: ["Node.js", "Python", "PostgreSQL", "REST API", "Docker"],
    videos: [
      { id: 1, title: "Node.js kirish",      duration: "20:00", url: "" },
      { id: 2, title: "Express.js",          duration: "35:15", url: "" },
      { id: 3, title: "PostgreSQL asoslari", duration: "45:00", url: "" },
      { id: 4, title: "REST API yaratish",   duration: "50:30", url: "" },
      { id: 5, title: "Authentication JWT",  duration: "38:00", url: "" },
      { id: 6, title: "Python Django",       duration: "55:00", url: "" },
      { id: 7, title: "Docker asoslari",     duration: "30:00", url: "" },
      { id: 8, title: "Deployment",          duration: "25:45", url: "" },
    ]
  },
  {
    id: "fullstack", title: "Full-Stack Development", type: "Full-Stack",
    emoji: "🚀", category: "fullstack", badge: "Premium",
    desc: "Frontend va Backend bilimlarini birlashtirgan to'liq yo'l.",
    lessons: 90, hours: 68, level: "Yuqori",
    skills: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"],
    videos: [
      { id: 1, title: "Full-Stack arxitektura", duration: "22:00", url: "" },
      { id: 2, title: "MERN Stack",             duration: "60:00", url: "" },
      { id: 3, title: "GraphQL API",            duration: "45:00", url: "" },
      { id: 4, title: "State management",       duration: "40:00", url: "" },
      { id: 5, title: "Authentication full",    duration: "50:00", url: "" },
      { id: 6, title: "Cloud deployment",       duration: "35:00", url: "" },
      { id: 7, title: "CI/CD pipeline",         duration: "30:00", url: "" },
      { id: 8, title: "Final loyiha",           duration: "90:00", url: "" },
    ]
  },
  {
    id: "devops", title: "DevOps & Cloud", type: "DevOps",
    emoji: "☁️", category: "devops", badge: "Yangi",
    desc: "Linux, Docker, Kubernetes va Cloud texnologiyalarini o'rganing.",
    lessons: 38, hours: 28, level: "O'rta",
    skills: ["Linux", "Docker", "Kubernetes", "AWS", "CI/CD"],
    videos: [
      { id: 1, title: "Linux asoslari",      duration: "30:00", url: "" },
      { id: 2, title: "Docker konteynerlar", duration: "40:00", url: "" },
      { id: 3, title: "Kubernetes",          duration: "55:00", url: "" },
      { id: 4, title: "AWS xizmatlari",      duration: "45:00", url: "" },
      { id: 5, title: "GitHub Actions",      duration: "25:00", url: "" },
      { id: 6, title: "Monitoring",          duration: "20:00", url: "" },
    ]
  },
  {
    id: "mobile", title: "Mobile Development", type: "Mobile",
    emoji: "📱", category: "mobile", badge: "Mashhur",
    desc: "React Native va Flutter bilan iOS va Android ilovalar yarating.",
    lessons: 44, hours: 35, level: "O'rta",
    skills: ["React Native", "Flutter", "Dart", "Firebase", "App Store"],
    videos: [
      { id: 1, title: "React Native kirish", duration: "28:00", url: "" },
      { id: 2, title: "Navigation",          duration: "32:00", url: "" },
      { id: 3, title: "State management",    duration: "38:00", url: "" },
      { id: 4, title: "Firebase integration",duration: "42:00", url: "" },
      { id: 5, title: "Flutter asoslari",    duration: "50:00", url: "" },
      { id: 6, title: "Publish to stores",   duration: "20:00", url: "" },
    ]
  },
  {
    id: "design", title: "UI/UX Design", type: "Design",
    emoji: "✏️", category: "design", badge: "Yangi",
    desc: "Figma, prototiplash va foydalanuvchi tajribasini o'rganing.",
    lessons: 36, hours: 24, level: "Boshlang'ich",
    skills: ["Figma", "Prototyping", "Design Systems", "UX Research", "Motion"],
    videos: [
      { id: 1, title: "Figma asoslari",   duration: "22:00", url: "" },
      { id: 2, title: "UI komponentlar",  duration: "30:00", url: "" },
      { id: 3, title: "Dizayn tizimlar",  duration: "35:00", url: "" },
      { id: 4, title: "Prototyping",      duration: "25:00", url: "" },
      { id: 5, title: "UX tadqiqot",      duration: "28:00", url: "" },
      { id: 6, title: "Motion design",    duration: "32:00", url: "" },
    ]
  }
];

window.COURSES = COURSES;

// ── Progress olish (Auth._profile dan) ──
window.getCourseProgress = function (courseId) {
  const profile = window.Auth?._profile;
  if (!profile) return { videos: [], percent: 0 };
  return (profile.progress || {})[courseId] || { videos: [], percent: 0 };
};

// ── Progress saqlash (Firebase) ──
window.saveCourseProgress = async function (courseId, videoId, done) {
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;
  return await window.saveProgress(courseId, videoId, done, course.videos.length);
};

// ── KURSLAR GRIDINI RENDER ──
window.renderCoursesGrid = function (containerId, filter = "all") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filter === "all" ? COURSES : COURSES.filter(c => c.category === filter);
  container.innerHTML = "";

  filtered.forEach((course, i) => {
    const prog = getCourseProgress(course.id);
    container.innerHTML += `
      <div class="course-card animate-in" style="animation-delay:${i * 0.08}s">
        <div class="course-card-img ${course.category}">
          <span style="font-size:3.5rem">${course.emoji}</span>
          <div class="course-badge">${course.badge}</div>
        </div>
        <div class="course-card-body">
          <div class="course-type">${course.type}</div>
          <h3>${course.title}</h3>
          <p>${course.desc}</p>
          <div class="course-meta">
            <span>📹 ${course.lessons} dars</span>
            <span>⏱ ${course.hours} soat</span>
            <span>📊 ${course.level}</span>
          </div>
          ${prog.percent > 0 ? `
          <div class="progress-bar-wrap">
            <div class="progress-bar" style="width:${prog.percent}%"></div>
          </div>
          <div style="font-size:0.78rem;color:var(--accent);margin-bottom:0.75rem">${prog.percent}% bajarildi</div>
          ` : ""}
          <div class="course-card-footer">
            <div style="display:flex;gap:6px;flex-wrap:wrap">
              ${course.skills.slice(0, 3).map(s => `<span class="tag">${s}</span>`).join("")}
            </div>
            <button class="btn btn-primary btn-sm" onclick="openCourse('${course.id}')" style="cursor:pointer">
              ${prog.percent === 100 ? "✅ Tugatildi" : prog.percent > 0 ? "▶ Davom et" : "▶ Boshlash"}
            </button>
          </div>
        </div>
      </div>`;
  });

  initScrollAnimations();
};

// ── KURSNI OCHISH ──
window.openCourse = function (courseId) {
  if (!window.Auth?.isLoggedIn()) {
    showToast("Kursni ko'rish uchun tizimga kiring", "info");
    openModal("login-modal");
    return;
  }
  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  const prog = getCourseProgress(courseId);
  const doneIds = prog.videos || [];
  let startIdx = 0;
  if (doneIds.length > 0 && doneIds.length < course.videos.length) {
    const firstUndone = course.videos.findIndex(v => !doneIds.includes(v.id));
    startIdx = firstUndone >= 0 ? firstUndone : 0;
  }
  window.location.href = `lesson.html?course=${courseId}&video=${startIdx}`;
};

// ── FILTER TABS ──
window.initFilterTabs = function () {
  document.querySelectorAll(".filter-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCoursesGrid("courses-grid", tab.dataset.filter || "all");
    });
  });
};
