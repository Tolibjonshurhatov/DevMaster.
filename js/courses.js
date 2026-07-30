// ── DEVMASTER COURSES JS ──

const COURSES = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    type: 'Frontend',
    emoji: '🎨',
    category: 'frontend',
    badge: 'Mashhur',
    desc: 'HTML, CSS, JavaScript, React va zamonaviy frontend texnologiyalarini o\'rganing.',
    lessons: 48,
    hours: 32,
    level: 'Boshlang\'ich',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Git'],
    videos: [
      { id: 1, title: 'Kurs haqida', duration: '18:30', url: 'https://www.youtube.com/embed/9dUhZq9dkHM?si=akGkmdzyQNFrl9gS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 2, title: 'Web haqida', duration: '24:15', url: 'https://www.youtube.com/embed/E9OKpacyUSc?si=BQVVmprZY1Dk64K7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 3, title: 'Kirish', duration: '32:00', url: 'https://www.youtube.com/embed/_j7yneg6if0?si=9_5DCoylj5bDK1ZL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 4, title: 'Dasturlash muhiti', duration: '28:45', url: 'https://www.youtube.com/embed/M6AS_IdZK7s?si=QKRiC5fZJwdqJeGO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 5, title: 'Hujjat strukturasi va !DOCTYPE', duration: '35:20', url: 'https://www.youtube.com/embed/1Bmqo8tsOq8?si=EUcua5XpIrqtlQcp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 6, title: 'Elementlar va attributelar', duration: '40:00', url: 'https://www.youtube.com/embed/jMermL9QA48?si=wt61XyXPiTXxBAXc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 7, title: 'Headings', duration: '38:10', url: 'https://www.youtube.com/embed/dgcyvjQiJnQ?si=KLe6J-eFEeqtsl73" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
      { id: 8, title: ' Styles', duration: '22:30', url: 'https://www.youtube.com/embed/ifw_VNZWW1I?si=NTFd8n6jvz7PzYPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    type: 'Backend',
    emoji: '⚙️',
    category: 'backend',
    badge: 'Trending',
    desc: 'Node.js, Python, ma\'lumotlar bazasi va REST API larni yaratishni o\'rganing.',
    lessons: 52,
    hours: 40,
    level: 'O\'rta',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'REST API', 'Docker'],
    videos: [
      { id: 1, title: 'Node.js kirish', duration: '20:00', url: '' },
      { id: 2, title: 'Express.js framework', duration: '35:15', url: '' },
      { id: 3, title: 'PostgreSQL asoslari', duration: '45:00', url: '' },
      { id: 4, title: 'REST API yaratish', duration: '50:30', url: '' },
      { id: 5, title: 'Authentication JWT', duration: '38:00', url: '' },
      { id: 6, title: 'Python Django', duration: '55:00', url: '' },
      { id: 7, title: 'Docker asoslari', duration: '30:00', url: '' },
      { id: 8, title: 'Deployment', duration: '25:45', url: '' },
    ]
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    type: 'Full-Stack',
    emoji: '🚀',
    category: 'fullstack',
    badge: 'Premium',
    desc: 'Hali to\'liq yo\'lga qoyilmagan.',
    lessons: 90,
    hours: 68,
    level: 'Yuqori',
    skills: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'AWS'],
    videos: [
      { id: 1, title: 'Full-Stack arxitektura', duration: '22:00', url: '' },
      { id: 2, title: 'MERN Stack', duration: '60:00', url: '' },
      { id: 3, title: 'GraphQL API', duration: '45:00', url: '' },
      { id: 4, title: 'State management', duration: '40:00', url: '' },
      { id: 5, title: 'Authentication full', duration: '50:00', url: '' },
      { id: 6, title: 'Cloud deployment', duration: '35:00', url: '' },
      { id: 7, title: 'CI/CD pipeline', duration: '30:00', url: '' },
      { id: 8, title: 'Final loyiha', duration: '90:00', url: '' },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    type: 'DevOps',
    emoji: '☁️',
    category: 'devops',
    badge: 'Yangi',
    desc: 'Hali to\'liq yo\'lga qoyilmagan.',
    lessons: 38,
    hours: 28,
    level: 'O\'rta',
    skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    videos: [
      { id: 1, title: 'Linux asoslari', duration: '30:00', url: '' },
      { id: 2, title: 'Docker konteynerlar', duration: '40:00', url: '' },
      { id: 3, title: 'Kubernetes', duration: '55:00', url: '' },
      { id: 4, title: 'AWS xizmatlari', duration: '45:00', url: '' },
      { id: 5, title: 'GitHub Actions', duration: '25:00', url: '' },
      { id: 6, title: 'Monitoring', duration: '20:00', url: '' },
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    type: 'Mobile',
    emoji: '📱',
    category: 'mobile',
    badge: 'Mashhur',
    desc: 'Hali to\'liq yo\'lga qoyilmagan.',
    lessons: 44,
    hours: 35,
    level: 'O\'rta',
    skills: ['React Native', 'Flutter', 'Dart', 'Firebase', 'App Store'],
    videos: [
      { id: 1, title: 'React Native kirish', duration: '28:00', url: '' },
      { id: 2, title: 'Navigation', duration: '32:00', url: '' },
      { id: 3, title: 'State management', duration: '38:00', url: '' },
      { id: 4, title: 'Firebase integration', duration: '42:00', url: '' },
      { id: 5, title: 'Flutter asoslari', duration: '50:00', url: '' },
      { id: 6, title: 'Publish to stores', duration: '20:00', url: '' },
    ]
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    type: 'Design',
    emoji: '✏️',
    category: 'design',
    badge: 'Yangi',
    desc: 'Hali to\'liq yo\'lga qoyilmagan.',
    lessons: 36,
    hours: 24,
    level: 'Boshlang\'ich',
    skills: ['Figma', 'Prototyping', 'Design Systems', 'UX Research', 'Motion'],
    videos: [
      { id: 1, title: 'Figma asoslari', duration: '22:00', url: '' },
      { id: 2, title: 'UI komponentlar', duration: '30:00', url: '' },
      { id: 3, title: 'Dizayn tizimlar', duration: '35:00', url: '' },
      { id: 4, title: 'Prototyping', duration: '25:00', url: '' },
      { id: 5, title: 'UX tadqiqot', duration: '28:00', url: '' },
      { id: 6, title: 'Motion design', duration: '32:00', url: '' },
    ]
  }
];

// ── GET PROGRESS ──
function getCourseProgress(courseId) {
  const user = Auth.getUser();
  if (!user) return { videos: [], percent: 0 };
  const users = JSON.parse(localStorage.getItem('dm_users') || '[]');
  const u = users.find(x => x.id === user.id) || user;
  const prog = u.progress || {};
  return prog[courseId] || { videos: [], percent: 0 };
}

// ── SAVE PROGRESS ──
function saveCourseProgress(courseId, videoId, done) {
  const user = Auth.getUser();
  if (!user) return;
  const users = JSON.parse(localStorage.getItem('dm_users') || '[]');
  const idx = users.findIndex(x => x.id === user.id);
  const u = idx >= 0 ? users[idx] : user;

  if (!u.progress) u.progress = {};
  if (!u.progress[courseId]) u.progress[courseId] = { videos: [], percent: 0 };

  const vids = u.progress[courseId].videos;
  if (done && !vids.includes(videoId)) vids.push(videoId);
  if (!done) { const i = vids.indexOf(videoId); if (i > -1) vids.splice(i, 1); }

  const course = COURSES.find(c => c.id === courseId);
  u.progress[courseId].percent = course ? Math.round((vids.length / course.videos.length) * 100) : 0;

  // Check completion
  if (u.progress[courseId].percent === 100) {
    if (!u.completedCourses) u.completedCourses = [];
    if (!u.completedCourses.includes(courseId)) {
      u.completedCourses.push(courseId);
      // Grant certificate
      if (!u.certificates) u.certificates = [];
      if (!u.certificates.find(c => c.courseId === courseId)) {
        u.certificates.push({
          courseId,
          courseName: course.title,
          courseType: course.type,
          earnedAt: new Date().toLocaleDateString('uz-UZ'),
          id: 'DM-' + Date.now()
        });
      }
      // Update XP & level
      u.xp = (u.xp || 0) + 500;
      updateLevel(u);
    }
  }

  if (idx >= 0) users[idx] = u; else users.push(u);
  localStorage.setItem('dm_users', JSON.stringify(users));
  Auth.setUser(u);
  return u.progress[courseId];
}

function updateLevel(u) {
  const completed = (u.completedCourses || []).length;
  if (completed >= 3) u.level = 'expert';
  else if (completed >= 1) u.level = 'pro';
  else u.level = 'starter';
}

// ── RENDER COURSES ──
function renderCoursesGrid(containerId, filter = 'all') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filter === 'all' ? COURSES : COURSES.filter(c => c.category === filter);
  container.innerHTML = '';

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
          ` : ''}
          <div class="course-card-footer">
            <div style="display:flex;gap:6px;flex-wrap:wrap">${course.skills.slice(0,3).map(s => `<span class="tag">${s}</span>`).join('')}</div>
            <button class="btn btn-primary btn-sm" onclick="openCourse('${course.id}')" style="cursor:pointer">
              ${prog.percent === 100 ? '✅ Tugatildi' : prog.percent > 0 ? '▶ Davom et' : '▶ Boshlash'}
            </button>
          </div>
        </div>
      </div>`;
  });

  initScrollAnimations();
}

// ── OPEN COURSE → lesson.html ──
function openCourse(courseId) {
  if (!Auth.isLoggedIn()) {
    showToast('Kursni ko\'rish uchun tizimga kiring', 'info');
    openModal('login-modal');
    return;
  }

  const course = COURSES.find(c => c.id === courseId);
  if (!course) return;

  // Find first undone video to resume from
  const prog = getCourseProgress(courseId);
  const doneIds = prog.videos || [];
  let startIdx = 0;
  if (doneIds.length > 0 && doneIds.length < course.videos.length) {
    // Resume from first undone
    const firstUndone = course.videos.findIndex(v => !doneIds.includes(v.id));
    startIdx = firstUndone >= 0 ? firstUndone : 0;
  }

  window.location.href = `lesson.html?course=${courseId}&video=${startIdx}`;
}

// ── MARK VIDEO DONE ──
function markVideoDone(courseId, videoId, done) {
  const prog = saveCourseProgress(courseId, videoId, done);

  // Update UI
  const item = document.getElementById(`vi-${courseId}-${videoId}`);
  if (item) {
    const course = COURSES.find(c => c.id === courseId);
    const vIdx = course.videos.findIndex(v => v.id === videoId);
    item.style.background = done ? 'rgba(67,233,123,0.06)' : 'rgba(255,255,255,0.03)';
    item.style.borderColor = done ? 'rgba(67,233,123,0.2)' : 'var(--border)';
    const numDiv = item.querySelector('div > div');
    if (numDiv) {
      numDiv.style.background = done ? 'rgba(67,233,123,0.15)' : 'rgba(108,99,255,0.1)';
      numDiv.style.borderColor = done ? 'rgba(67,233,123,0.4)' : 'rgba(108,99,255,0.3)';
      numDiv.style.color = done ? 'var(--accent3)' : 'var(--accent)';
      numDiv.textContent = done ? '✓' : (vIdx + 1);
    }
    const btn = item.querySelector('button');
    if (btn) {
      btn.style.background = done ? 'rgba(255,101,132,0.1)' : 'rgba(67,233,123,0.1)';
      btn.style.borderColor = done ? 'rgba(255,101,132,0.3)' : 'rgba(67,233,123,0.3)';
      btn.style.color = done ? 'var(--accent2)' : 'var(--accent3)';
      btn.textContent = done ? '↩ Bekor' : '✓ Tugatdim';
      btn.setAttribute('onclick', `markVideoDone('${courseId}', ${videoId}, ${!done})`);
    }
  }

  // Update progress bar
  const bar = document.getElementById('modal-prog-bar');
  if (bar) bar.style.width = prog.percent + '%';
  const pct = document.getElementById('modal-prog-pct');
  if (pct) pct.textContent = prog.percent + '%';

  if (done) showToast('Dars tugatildi! ✅', 'success');

  if (prog.percent === 100) {
    showToast('🏆 Kurs tugatildi! Sertifikat olishingiz mumkin!', 'success');
    setTimeout(() => openCourse(courseId), 500);
  }
}

// ── FILTER TABS ──
function initFilterTabs() {
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter || 'all';
      renderCoursesGrid('courses-grid', filter);
    });
  });
}