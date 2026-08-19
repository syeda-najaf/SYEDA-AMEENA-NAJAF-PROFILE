const projects = [
  {type:'security', num:'01', tag:'SECURITY / AI', title:'Autonomous Network Attack Detection System with Telegram Bot', tools:['Python','Machine Learning','Telegram API'], desc:'Real-time AI-based intrusion detection using cybersecurity datasets from Kaggle. Integrated a custom Telegram bot to alert on malicious traffic patterns.', impact:'30% faster response time compared to manual monitoring.'},
  {type:'ai', num:'02', tag:'AI / COMPUTER VISION', title:'OpenCV-Based License Plate Detection: Algorithms & Implementation', tools:['Python','OpenCV','OCR','Selenium'], desc:'Intelligent license plate recognition using OCR and template matching, with Selenium used to auto-fetch vehicle details.', impact:'Published in JSRT with a 5.2 impact factor.'},
  {type:'web', num:'03', tag:'WEB APPLICATION', title:'Student Enrolment System', tools:['HTML','CSS','JavaScript','Bootstrap','PHP','Laravel','MySQL','Stripe API'], desc:'Secure, full-featured enrolment portal with user login, course management, payment integration and an admin dashboard.', impact:'Improved enrollment speed by 30%.'},
  {type:'security', num:'04', tag:'APPLICATION SECURITY', title:'Web Application Vulnerability Scanner', tools:['Python','Requests','BeautifulSoup'], desc:'Modular scanner designed to identify SQL Injection, XSS and other OWASP vulnerabilities, with an architecture built for extensibility and automation.', impact:'Security automation project.'},
  {type:'security', num:'05', tag:'CRYPTOGRAPHY', title:'Advanced Encryption Tool (AES-256)', tools:['Python','PyCryptodome','JavaScript'], desc:'Visually interactive AES-256 secured file encryption and decryption tool with an animated frontend and GitHub-ready design.', impact:'Secure file encryption workflow.'},
  {type:'web', num:'06', tag:'REACT / VERCEL', title:'Learning Website using React.js', tools:['React.js','Vercel'], desc:'Interactive, animated e-learning platform with clean UI and modular architecture.', impact:'Live at syeda-educ-center.vercel.app'}
];

// Project List Rendering & Filtering
const projectList = document.querySelector('#projectList');

function renderProjects(filter = 'all') {
  if (!projectList) return;
  const items = projects.filter(p => filter === 'all' || p.type === filter);
  projectList.innerHTML = items.map((p) => `
    <article class="project-row" data-project="${projects.indexOf(p)}">
      <div class="project-number">${p.num}</div>
      <div class="project-main">
        <small>${p.tag}</small>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="chips">${p.tools.map(t => `<span>${t}</span>`).join('')}</div>
      </div>
      <div class="project-impact">
        <span>RESULT</span>
        <b>${p.impact}</b>
        <button type="button">Open case ↗</button>
      </div>
    </article>
  `).join('');
}

renderProjects();

document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    btn.classList.add('active');
    renderProjects(btn.dataset.filter);
  });
});

// Generic Detail Modal logic
const detailModal = document.querySelector('#detailModal');
const modalContent = document.querySelector('#modalContent');

function openModal(html) {
  if (!detailModal || !modalContent) return;
  modalContent.innerHTML = html;
  detailModal.showModal();
}

const modalCloseBtn = document.querySelector('#modalClose');
if (modalCloseBtn) modalCloseBtn.onclick = () => detailModal.close();

if (detailModal) {
  detailModal.addEventListener('click', e => {
    if (e.target === detailModal) detailModal.close();
  });
}

const modalData = {
  about: { title: 'Profile', html: `<small>ABOUT SYEDA AMEENA NAJAF</small><h2>Technology with a purpose.</h2><p>Detail-oriented frontend developer experienced in developing dynamic and accessible web applications, looking to leverage strong technical and problem-solving skills to create impactful digital products.</p><div class="modal-tools"><span>Frontend</span><span>Cybersecurity</span><span>AI / ML</span></div>` },
  development: { title: 'Frontend & Web Toolkit', html: `<small>DEVELOPMENT</small><h2>Building the interface layer.</h2><p>JavaScript, HTML, CSS, React, Flask, Bootstrap, PHP, Laravel, MySQL, Stripe API and Vercel.</p>` },
  security: { title: 'Cybersecurity Toolkit', html: `<small>SECURITY</small><h2>Finding and responding to weaknesses.</h2><p>Web vulnerability scanning, SQL Injection, XSS, OWASP-focused testing, ethical hacking, penetration testing, log analysis, anomaly detection, threat modeling and risk assessment.</p>` },
  ai: { title: 'AI & Computer Vision', html: `<small>AI / VISION</small><h2>Turning signals into useful systems.</h2><p>Python, Machine Learning, OpenCV, OCR, Selenium and Telegram API integration, including real-time intrusion detection and license plate recognition.</p>` },
  research: { title: 'Published Research', html: `<small>JOURNAL OF SCIENTIFIC RESEARCH AND TECHNOLOGY · 2025</small><h2>License Plate Recognition using OpenCV</h2><p>Published research detailing a smart surveillance system for real-time number plate recognition using Python and OpenCV.</p><div class="case-result"><small>IMPACT FACTOR</small><strong>5.2</strong></div>` },
  certs: { title: 'Certifications', html: `<small>CREDENTIALS · 2025</small><h2>Professional learning record.</h2><ul class="modal-list"><li>Software Engineering (CS302) — Saylor Academy — Certificate ID 250671527SN</li><li>AWS Cloud Computing – Solutions Architecture — AWS via Forage</li><li>Cybersecurity Virtual Internship — Deloitte (Forage)</li><li>Cybersecurity Analyst Program — Tata Group (Forage)</li><li>Internship Project — Autonomous Network Attack Detection System — ADVI Group of Companies</li></ul>` }
};

document.querySelectorAll('[data-modal]').forEach(el => {
  el.addEventListener('click', () => {
    const d = modalData[el.dataset.modal];
    if (d) openModal(`<div class="case-modal"><small>${d.title.toUpperCase()}</small>${d.html}</div>`);
  });
});

// Project row click handler -> opens project modal
if (projectList) {
  projectList.addEventListener('click', e => {
    const row = e.target.closest('.project-row');
    if (row) {
      const p = projects[+row.dataset.project];
      if (p) {
        openModal(`
          <div class="case-modal">
            <small>${p.tag}</small>
            <h2>${p.title}</h2>
            <p>${p.desc}</p>
            <div class="modal-tools">${p.tools.map(t => `<span>${t}</span>`).join('')}</div>
            <div class="case-result" style="margin-top:1.5rem;">
              <small>OUTCOME</small>
              <strong>${p.impact}</strong>
            </div>
          </div>
        `);
      }
    }
  });
}

// CV Modal logic
const cvModal = document.querySelector('#cvModal');
document.querySelectorAll('#openCv, #openCv2').forEach(b => {
  b.addEventListener('click', () => cvModal?.showModal());
});

const cvCloseBtn = document.querySelector('#cvClose');
if (cvCloseBtn) cvCloseBtn.onclick = () => cvModal.close();

if (cvModal) {
  cvModal.addEventListener('click', e => {
    if (e.target === cvModal) cvModal.close();
  });
}

// Mobile Menu Navigation
const menu = document.querySelector('#mobileMenu');
const menuBtn = document.querySelector('#menuBtn');
const menuCloseBtn = document.querySelector('#menuClose');

if (menuBtn) menuBtn.onclick = () => menu?.classList.add('open');
if (menuCloseBtn) menuCloseBtn.onclick = () => menu?.classList.remove('open');

menu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('open'));
});

// Top Progress Bar
window.addEventListener('scroll', () => {
  const progressBar = document.querySelector('#progress');
  if (progressBar) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
  }
}, { passive: true });

// Keyboard Shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    detailModal?.close();
    cvModal?.close();
    menu?.classList.remove('open');
  }
});