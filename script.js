/* =====================================================
   SYEDA AMEENA NAJAF — PORTFOLIO
   All editable content lives at the top of this file.
===================================================== */

/* 1) CONTACT DETAILS */
const PORTFOLIO = {
  email: "syedanajaf832@gmail.com",
  phone: "09538090817",
  location: "Santosh Nagar, Mehdipatnam, Hyderabad, Telangana 500006",
  linkedin: "http://linkedin.com/in/syedanajaf"
};

/* 2) PROJECTS */
const projects = [
  {
    title: "Autonomous Network Attack Detection System",
    category: "ai",
    icon: "🤖",
    description: "A real-time, AI-based intrusion detection system trained on cybersecurity datasets from Kaggle, integrated with a custom Telegram bot that alerts on malicious traffic patterns — cutting response time by 30% versus manual monitoring.",
    technologies: ["Python", "Machine Learning", "Telegram API"],
    focus: "AI-driven network attack detection"
  },
  {
    title: "OpenCV-Based License Plate Detection",
    category: "ai",
    icon: "📷",
    description: "An intelligent license-plate recognition system combining OCR and template matching, with Selenium automating vehicle-detail lookups. Published in the Journal of Scientific Research and Technology (impact factor 5.2).",
    technologies: ["Python", "OpenCV", "OCR", "Selenium"],
    focus: "Computer vision & published research"
  },
  {
    title: "Student Enrolment System",
    category: "web",
    icon: "🎓",
    description: "A secure, full-featured enrolment portal with user login, course management, Stripe payment integration and an admin dashboard — improving enrollment speed by 30%.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "Laravel", "MySQL", "Stripe API"],
    focus: "Full-stack web application"
  },
  {
    title: "Web Application Vulnerability Scanner",
    category: "security",
    icon: "🧪",
    description: "A scanner for identifying SQL injection, XSS and other OWASP vulnerabilities in web applications, built with a modular architecture for extensibility and automation.",
    technologies: ["Python", "Requests", "BeautifulSoup"],
    focus: "Web vulnerability assessment"
  },
  {
    title: "Advanced Encryption Tool (AES-256)",
    category: "security",
    icon: "🔐",
    description: "A visually interactive tool for AES-256 file encryption and decryption, with an animated frontend and a GitHub-ready build.",
    technologies: ["Python", "PyCryptodome", "JavaScript"],
    focus: "Applied cryptography"
  },
  {
    title: "E-Learning Website",
    category: "web",
    icon: "💻",
    description: "An interactive, animated e-learning platform with a clean UI and modular architecture, deployed live on Vercel.",
    technologies: ["React.js", "Vercel"],
    focus: "Frontend engineering",
    url: "https://syeda-educ-center.vercel.app"
  }
];

/* 3) EXPERIENCE */
const experience = [
  {
    date: "07/2025 — 06/2026",
    role: "Web Developer",
    company: "Excellence College of Health & Safety Engineering · Hyderabad, Telangana",
    bullets: [
      "Developing secure web applications using React and Flask"
    ]
  },
  {
    date: "01/2025 — 03/2025",
    role: "Cyber Security Intern",
    company: "ADVI Group of Companies · Hyderabad, Telangana",
    bullets: [
      "Developed an Autonomous Network Attack Detection System using Python",
      "Integrated Telegram Bot alerts, reducing incident response time by 30%",
      "Performed log analysis and anomaly detection in real-time systems"
    ]
  },
  {
    date: "03/2025 — 04/2025",
    role: "Cybersecurity Trainee",
    company: "CodTech IT Solutions · Virtual, Remote",
    bullets: [
      "Participated in 3+ national-level hackathons and security challenges",
      "Worked on real-time project modules including web vulnerability scanners",
      "Gained hands-on experience in ethical hacking and penetration testing"
    ]
  },
  {
    date: "05/2024 — 06/2024",
    role: "Cybersecurity Analyst Intern",
    company: "Tata Group (Forage Virtual Internship) · Virtual, Remote",
    bullets: [
      "Completed a structured simulation involving cybersecurity investigations",
      "Assessed vulnerabilities and recommended secure architecture practices",
      "Worked with simulated internal tools and stakeholder communication"
    ]
  },
  {
    date: "06/2025",
    role: "Cybersecurity Consultant Intern",
    company: "Deloitte (Forage Virtual Internship) · Virtual, Remote",
    bullets: [
      "Conducted risk assessments and developed client-facing cyber reports",
      "Simulated threat modeling and third-party risk management",
      "Gained industry-level insights on enterprise cybersecurity protocols"
    ]
  },
  {
    date: "07/2025",
    role: "Software Engineering Certificate Trainee",
    company: "Saylor Academy · Virtual, Remote",
    bullets: [
      "Completed a 36-hour self-paced Software Engineering (CS302) course",
      "Gained knowledge in SDLC, system architecture, debugging and testing",
      "Scored 75.81% and earned Certificate of Achievement (ID: 250671527SN)"
    ]
  }
];

/* 4) EDUCATION */
const education = [
  {
    date: "2021 — 2025",
    degree: "Bachelor of Engineering (B.E) — Computer Science Engineering",
    institution: "Khaja Bandanawaz College of Engineering, Khaja Bandanawaz University",
    description: "Kalaburagi, Karnataka"
  }
];

/* 5) SKILLS
   Grouped by domain, value is a percentage (0–100).
*/
const skillGroups = [
  {
    group: "Languages",
    skills: [
      { name: "Python", value: 88 },
      { name: "JavaScript", value: 80 },
      { name: "SQL", value: 75 },
      { name: "HTML / CSS", value: 82 }
    ]
  },
  {
    group: "Frameworks & Libraries",
    skills: [
      { name: "React", value: 80 },
      { name: "Flask", value: 78 },
      { name: "Bootstrap / Laravel", value: 70 }
    ]
  },
  {
    group: "Security",
    skills: [
      { name: "Vulnerability Assessment", value: 80 },
      { name: "Penetration Testing", value: 76 },
      { name: "Cryptography (AES-256)", value: 78 }
    ]
  },
  {
    group: "AI / ML & Cloud",
    skills: [
      { name: "Machine Learning", value: 78 },
      { name: "Computer Vision (OpenCV)", value: 76 },
      { name: "AWS Solutions Architecture", value: 65 }
    ]
  }
];

/* 6) CERTIFICATES
   Add exact certificate names. For an image, use e.g.
   image: "assets/certificates/my-certificate.jpg"
*/
const certificates = [
  {
    title: "Published Research — License Plate Recognition using OpenCV",
    description: "Published in the Journal of Scientific Research and Technology (JSRT), 2025 · Impact Factor 5.2",
    image: ""
  },
  {
    title: "Software Engineering (CS302)",
    description: "Issued by Saylor Academy, 2025 · Certificate ID: 250671527SN",
    image: ""
  },
  {
    title: "AWS Cloud Computing — Solutions Architecture",
    description: "Issued by AWS via Forage, 2025",
    image: ""
  },
  {
    title: "Cybersecurity Virtual Internship",
    description: "Issued by Deloitte (Forage), 2025",
    image: ""
  },
  {
    title: "Cybersecurity Analyst Program",
    description: "Issued by Tata Group (Forage), 2025",
    image: ""
  },
  {
    title: "Autonomous Network Attack Detection System",
    description: "Internship project issued by ADVI Group of Companies, 2025",
    image: ""
  }
];

/* -----------------------------------------------------
   DOM HELPERS
----------------------------------------------------- */
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

/* -----------------------------------------------------
   LOADER
----------------------------------------------------- */
window.addEventListener("load", () => {
  setTimeout(() => {
    $("#loader")?.classList.add("hidden");
  }, 700);
});

/* -----------------------------------------------------
   MOBILE MENU
----------------------------------------------------- */
const menuToggle = $("#menuToggle");
const mobileMenu = $("#mobileMenu");

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

$$('#mobileMenu a, .desktop-nav a, .bottom-nav a').forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

/* -----------------------------------------------------
   DECRYPT-STYLE HERO NAME ANIMATION
----------------------------------------------------- */
function decryptReveal(el) {
  const target = el.dataset.value || el.textContent;
  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
  let frame = 0;
  const totalFrames = target.length * 3;

  function tick() {
    let output = "";
    for (let i = 0; i < target.length; i++) {
      const charProgress = frame - i * 2;
      if (target[i] === " ") {
        output += " ";
      } else if (charProgress < 0) {
        output += " ";
      } else if (charProgress < 6) {
        output += glyphs[Math.floor(Math.random() * glyphs.length)];
      } else {
        output += target[i];
      }
    }
    el.textContent = output;
    frame++;
    if (frame < totalFrames) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(tick);
}

const decryptEl = $("#decryptName");
if (decryptEl) {
  setTimeout(() => decryptReveal(decryptEl), 500);
}

/* -----------------------------------------------------
   HERO COUNTERS
----------------------------------------------------- */
function animateCounters() {
  $$(".hero-meta-num").forEach(el => {
    const target = Number(el.dataset.count || 0);
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const run = () => {
      current += step;
      if (current >= target) {
        el.textContent = target;
      } else {
        el.textContent = current;
        requestAnimationFrame(run);
      }
    };
    run();
  });
}
setTimeout(animateCounters, 900);

/* -----------------------------------------------------
   RENDER SKILLS
----------------------------------------------------- */
const skillsGrid = $("#skillsGrid");

skillsGrid.innerHTML = skillGroups.map(group => `
  <div class="skill-group">
    <h3>${group.group}</h3>
    ${group.skills.map(skill => `
      <div class="skill-row">
        <div class="skill-row-head">
          <span>${skill.name}</span>
          <span>${skill.value}%</span>
        </div>
        <div class="track"><i data-width="${skill.value}%"></i></div>
      </div>
    `).join("")}
  </div>
`).join("");

/* -----------------------------------------------------
   RENDER PROJECTS
----------------------------------------------------- */
const projectsGrid = $("#projectsGrid");

function renderProjects(filter = "all") {
  const visible = filter === "all"
    ? projects
    : projects.filter(project => project.category === filter);

  projectsGrid.innerHTML = visible.map((project, index) => `
    <article class="project-card reveal visible">
      <div class="project-top">
        <div class="project-icon">${project.icon}</div>
        <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-list">
        ${project.technologies.slice(0, 4).map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <div class="project-actions">
        <button class="project-open" data-project="${escapeAttr(project.title)}">View full details →</button>
        ${project.url ? `<a class="project-live" href="${project.url}" target="_blank" rel="noopener">Live ↗</a>` : ""}
      </div>
    </article>
  `).join("");

  $$(".project-open", projectsGrid).forEach(button => {
    button.addEventListener("click", () => openProject(button.dataset.project));
  });
}

function escapeAttr(value) {
  return value.replaceAll('"', "&quot;");
}

renderProjects();

/* -----------------------------------------------------
   PROJECT FILTERS
----------------------------------------------------- */
$$(".filter").forEach(button => {
  button.addEventListener("click", () => {
    $$(".filter").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

/* -----------------------------------------------------
   PROJECT MODAL
----------------------------------------------------- */
const projectModal = $("#projectModal");

function openProject(title) {
  const project = projects.find(item => item.title === title);
  if (!project) return;

  $("#modalTitle").textContent = project.title;
  $("#modalDescription").textContent = project.description;
  $("#modalFocus").textContent = project.focus;
  $("#modalTags").innerHTML = project.technologies.map(t => `<span class="tag">${t}</span>`).join("");

  const modalLive = $("#modalLive");
  if (project.url) {
    modalLive.innerHTML = `<a href="${project.url}" target="_blank" rel="noopener">View live project ↗</a>`;
    modalLive.style.display = "block";
  } else {
    modalLive.innerHTML = "";
    modalLive.style.display = "none";
  }

  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeProject() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

$("#modalClose")?.addEventListener("click", closeProject);
$$("[data-close-modal]").forEach(el => el.addEventListener("click", closeProject));

/* -----------------------------------------------------
   EXPERIENCE
----------------------------------------------------- */
const experienceList = $("#experienceList");

experienceList.innerHTML = experience.map(item => `
  <article class="timeline-item reveal visible">
    <span class="timeline-dot"></span>
    <div class="timeline-card">
      <span class="date-pill">${item.date}</span>
      <h3>${item.role}</h3>
      <h4>${item.company}</h4>
      <ul class="timeline-bullets">
        ${item.bullets.map(b => `<li>${b}</li>`).join("")}
      </ul>
    </div>
  </article>
`).join("");

/* -----------------------------------------------------
   EDUCATION
----------------------------------------------------- */
const educationGrid = $("#educationGrid");

educationGrid.innerHTML = education.map(item => `
  <article class="edu-card reveal visible">
    <span class="date-pill">${item.date}</span>
    <h3>${item.degree}</h3>
    <h4>${item.institution}</h4>
    <p>${item.description}</p>
  </article>
`).join("");

/* -----------------------------------------------------
   CERTIFICATIONS
----------------------------------------------------- */
const certificateGrid = $("#certificateGrid");
const certificateModal = $("#certificateModal");

certificateGrid.innerHTML = certificates.map((item, index) => `
  <article class="certificate-card reveal visible">
    <div class="certificate-icon">✦</div>
    <h3>${item.title}</h3>
    <p>${item.description}</p>
    <button class="certificate-open" data-cert="${index}">View certificate →</button>
  </article>
`).join("");

function openCertificate(index) {
  const cert = certificates[index];
  if (!cert) return;

  $("#certificateTitle").textContent = cert.title;
  $("#certificateDescription").textContent = cert.description;

  const preview = $("#certificatePreview");

  if (cert.image) {
    preview.innerHTML = `<img src="${cert.image}" alt="${cert.title}">`;
  } else {
    preview.innerHTML = `<div class="preview-placeholder">Add your certificate image path in the <b>certificates</b> array inside <b>script.js</b> and it will appear here.</div>`;
  }

  certificateModal.classList.add("open");
  certificateModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeCertificate() {
  certificateModal.classList.remove("open");
  certificateModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

$$(".certificate-open").forEach(button => {
  button.addEventListener("click", () => openCertificate(Number(button.dataset.cert)));
});

$("#certificateClose")?.addEventListener("click", closeCertificate);
$$("[data-close-certificate]").forEach(el => el.addEventListener("click", closeCertificate));

/* -----------------------------------------------------
   ESCAPE CLOSES MODALS
----------------------------------------------------- */
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeProject();
    closeCertificate();
  }
});

/* -----------------------------------------------------
   SKILL BAR ANIMATION ON SCROLL
----------------------------------------------------- */
const skillBars = $$(".track i");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width;
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.35 });

skillBars.forEach(bar => skillObserver.observe(bar));

/* -----------------------------------------------------
   SCROLL REVEAL
----------------------------------------------------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

$$(".reveal").forEach(el => revealObserver.observe(el));

/* -----------------------------------------------------
   ACTIVE NAVIGATION
----------------------------------------------------- */
const sectionIds = ["home", "about", "skills", "projects", "experience", "education", "contact"];

function updateActiveNav() {
  const scrollPoint = window.scrollY + 170;
  let current = "home";

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section && scrollPoint >= section.offsetTop) current = id;
  });

  $$(".nav-link, .bottom-link").forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

/* -----------------------------------------------------
   CONTACT
----------------------------------------------------- */
const displayEmail = $("#displayEmail");
if (PORTFOLIO.email && !PORTFOLIO.email.includes("YOUR_EMAIL")) {
  displayEmail.textContent = PORTFOLIO.email;
  displayEmail.setAttribute("href", `mailto:${PORTFOLIO.email}`);
}

const displayPhone = $("#displayPhone");
if (displayPhone && PORTFOLIO.phone) {
  displayPhone.textContent = PORTFOLIO.phone;
  displayPhone.setAttribute("href", `tel:${PORTFOLIO.phone}`);
}

const displayLocation = $("#displayLocation");
if (displayLocation && PORTFOLIO.location) {
  displayLocation.textContent = PORTFOLIO.location;
}

$("#contactForm")?.addEventListener("submit", event => {
  event.preventDefault();

  const name = $("#contactName").value.trim();
  const email = $("#contactEmail").value.trim();
  const subject = $("#contactSubject").value.trim();
  const message = $("#contactMessage").value.trim();
  const note = $("#formNote");

  if (!PORTFOLIO.email || PORTFOLIO.email.includes("YOUR_EMAIL")) {
    note.textContent = "Add your real email in script.js first. The form is ready, but it needs your destination address.";
    showToast("Add your email in script.js");
    return;
  }

  const body = [
    `Hello Syeda Ameena Najaf,`,
    "",
    message,
    "",
    `Name: ${name}`,
    `Email: ${email}`
  ].join("\n");

  window.location.href =
    `mailto:${PORTFOLIO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  note.textContent = "Your email client should open with the message prepared.";
  showToast("Email prepared");
});

/* -----------------------------------------------------
   YEAR
----------------------------------------------------- */
$("#year").textContent = new Date().getFullYear();

/* -----------------------------------------------------
   TOAST
----------------------------------------------------- */
let toastTimer;

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

/* -----------------------------------------------------
   SAFETY NET FOR INTERNAL LINKS
----------------------------------------------------- */
$$('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
