const projects=[
 {type:'security',num:'01',tag:'SECURITY / AI',title:'Autonomous Network Attack Detection System with Telegram Bot',tools:['Python','Machine Learning','Telegram API'],desc:'Real-time AI-based intrusion detection using cybersecurity datasets from Kaggle. Integrated a custom Telegram bot to alert on malicious traffic patterns.',impact:'30% faster response time compared to manual monitoring.'},
 {type:'ai',num:'02',tag:'AI / COMPUTER VISION',title:'OpenCV-Based License Plate Detection: Algorithms & Implementation',tools:['Python','OpenCV','OCR','Selenium'],desc:'Intelligent license plate recognition using OCR and template matching, with Selenium used to auto-fetch vehicle details.',impact:'Published in JSRT with a 5.2 impact factor.'},
 {type:'web',num:'03',tag:'WEB APPLICATION',title:'Student Enrolment System',tools:['HTML','CSS','JavaScript','Bootstrap','PHP','Laravel','MySQL','Stripe API'],desc:'Secure, full-featured enrolment portal with user login, course management, payment integration and an admin dashboard.',impact:'Improved enrollment speed by 30%.'},
 {type:'security',num:'04',tag:'APPLICATION SECURITY',title:'Web Application Vulnerability Scanner',tools:['Python','Requests','BeautifulSoup'],desc:'Modular scanner designed to identify SQL Injection, XSS and other OWASP vulnerabilities, with an architecture built for extensibility and automation.',impact:'Security automation project.'},
 {type:'security',num:'05',tag:'CRYPTOGRAPHY',title:'Advanced Encryption Tool (AES-256)',tools:['Python','PyCryptodome','JavaScript'],desc:'Visually interactive AES-256 secured file encryption and decryption tool with an animated frontend and GitHub-ready design.',impact:'Secure file encryption workflow.'},
 {type:'web',num:'06',tag:'REACT / VERCEL',title:'Learning Website using React.js',tools:['React.js','Vercel'],desc:'Interactive, animated e-learning platform with clean UI and modular architecture.',impact:'Live at syeda-educ-center.vercel.app'}
];
const projectList=document.querySelector('#projectList');
function renderProjects(filter='all'){
 const items=projects.filter(p=>filter==='all'||p.type===filter);
 projectList.innerHTML=items.map((p,i)=>`<article class="project-row" data-project="${projects.indexOf(p)}"><div class="project-number">${p.num}</div><div class="project-main"><small>${p.tag}</small><h3>${p.title}</h3><p>${p.desc}</p><div class="chips">${p.tools.map(t=>`<span>${t}</span>`).join('')}</div></div><div class="project-impact"><span>RESULT</span><b>${p.impact}</b><button>Open case ↗</button></div></article>`).join('');
}
renderProjects();
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active')?.classList.remove('active');btn.classList.add('active');renderProjects(btn.dataset.filter)}));
const detailModal=document.querySelector('#detailModal'), modalContent=document.querySelector('#modalContent');
function openModal(html){modalContent.innerHTML=html;detailModal.showModal()}
document.querySelector('#modalClose').onclick=()=>detailModal.close();detailModal.addEventListener('click',e=>{if(e.target===detailModal)detailModal.close()});
const modalData={
 about:{title:'Profile',html:`<small>ABOUT SYEDA AMEENA NAJAF</small><h2>Technology with a purpose.</h2><p>Detail-oriented frontend developer experienced in developing dynamic and accessible web applications, looking to leverage strong technical and problem-solving skills to create impactful digital products.</p><div class="modal-tools"><span>Frontend</span><span>Cybersecurity</span><span>AI / ML</span></div>`},
 development:{title:'Frontend & Web Toolkit',html:`<small>DEVELOPMENT</small><h2>Building the interface layer.</h2><p>JavaScript, HTML, CSS, React, Flask, Bootstrap, PHP, Laravel, MySQL, Stripe API and Vercel.</p>`},
 security:{title:'Cybersecurity Toolkit',html:`<small>SECURITY</small><h2>Finding and responding to weaknesses.</h2><p>Web vulnerability scanning, SQL Injection, XSS, OWASP-focused testing, ethical hacking, penetration testing, log analysis, anomaly detection, threat modeling and risk assessment.</p>`},
 ai:{title:'AI & Computer Vision',html:`<small>AI / VISION</small><h2>Turning signals into useful systems.</h2><p>Python, Machine Learning, OpenCV, OCR, Selenium and Telegram API integration, including real-time intrusion detection and license plate recognition.</p>`},
 research:{title:'Published Research',html:`<small>JOURNAL OF SCIENTIFIC RESEARCH AND TECHNOLOGY · 2025</small><h2>License Plate Recognition using OpenCV</h2><p>Published research detailing a smart surveillance system for real-time number plate recognition using Python and OpenCV.</p><div class="case-result"><small>IMPACT FACTOR</small><strong>5.2</strong></div>`},
 certs:{title:'Certifications',html:`<small>CREDENTIALS · 2025</small><h2>Professional learning record.</h2><ul class="modal-list"><li>Software Engineering (CS302) — Saylor Academy — Certificate ID 250671527SN</li><li>AWS Cloud Computing – Solutions Architecture — AWS via Forage</li><li>Cybersecurity Virtual Internship — Deloitte (Forage)</li><li>Cybersecurity Analyst Program — Tata Group (Forage)</li><li>Internship Project — Autonomous Network Attack Detection System — ADVI Group of Companies</li></ul>`}
};
document.querySelectorAll('[data-modal]').forEach(el=>el.addEventListener('click',()=>{const d=modalData[el.dataset.modal];openModal(`<div class="case-modal"><small>${d.title.toUpperCase()}</small>${d.html}</div>`)}));
const cvModal=document.querySelector('#cvModal');document.querySelectorAll('#openCv,#openCv2').forEach(b=>b.addEventListener('click',()=>cvModal.showModal()));document.querySelector('#cvClose').onclick=()=>cvModal.close();cvModal.addEventListener('click',e=>{if(e.target===cvModal)cvModal.close()});
const menu=document.querySelector('#mobileMenu');document.querySelector('#menuBtn').onclick=()=>menu.classList.add('open');document.querySelector('#menuClose').onclick=()=>menu.classList.remove('open');menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;document.querySelector('#progress').style.width=`${max?window.scrollY/max*100:0}%`},{passive:true});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){detailModal.close();cvModal.close();menu.classList.remove('open')}});

/* =========================================================
   PROGRESSIVE STEP NAVIGATION
   The site behaves like a search result: choose a topic,
   see one focused result, then move forward or backward.
   ========================================================= */
const stepViewer=document.querySelector('#stepViewer');
const stepContent=document.querySelector('#stepContent');
const stepQuery=document.querySelector('#stepQuery');
const stepCount=document.querySelector('#stepCount');
const stepProgress=document.querySelector('#stepProgress');
const stepPrev=document.querySelector('#stepPrev');
const stepNext=document.querySelector('#stepNext');
const stepBack=document.querySelector('#stepBack');
const stepClose=document.querySelector('#stepClose');

const steps=[
 {key:'overview',label:'Overview',kicker:'01 / OVERVIEW',title:'Syeda Ameena Najaf',accent:'Web Developer · Published Researcher',summary:'A focused profile combining frontend engineering, cybersecurity, AI-powered systems and published technical research.',cards:[['Location','Hyderabad, Telangana'],['Education','B.E. Computer Science Engineering'],['Focus','Frontend · Security · AI / ML'],['Research','JSRT · Impact Factor 5.2']],pills:['React','JavaScript','Python','Flask','Cybersecurity','OpenCV']},
 {key:'journey',label:'Journey',kicker:'02 / JOURNEY',title:'Experience, one chapter at a time.',accent:'Professional journey',summary:'The experience section is intentionally progressive. Start with the latest role, then move backwards through internships and virtual experiences.',cards:[['07/2025 — 06/2026','Web Developer · Excellence College of Health & Safety Engineering'],['01/2025 — 03/2025','Cyber Security Intern · ADVI Group of Companies'],['03/2025 — 04/2025','Cybersecurity Trainee · CodTech IT Solutions'],['06/2025','Cybersecurity Analyst Intern · Tata Group · Forage'],['07/2025','Cybersecurity Consultant Intern · Deloitte · Forage']],pills:['React','Flask','Threat Detection','Risk Assessment']},
 {key:'work',label:'Work',kicker:'03 / SELECTED WORK',title:'Projects, opened one result at a time.',accent:'Case-study view',summary:'Choose a project below. Each result shows its purpose, technology and outcome without forcing the recruiter to scan a giant wall of cards.',cards:projects.map(p=>[p.title,p.desc+' '+p.impact]),pills:['Open a project from the cards below']},
 {key:'stack',label:'Stack',kicker:'04 / TECHNICAL STACK',title:'A practical toolkit.',accent:'Technology',summary:'The technical stack is grouped by the kind of work it supports, keeping the page readable while preserving the breadth of the CV.',cards:[['Frontend & Web','JavaScript · HTML · CSS · React · Flask · Bootstrap · PHP · Laravel · MySQL · Stripe API · Vercel'],['Cybersecurity','Vulnerability scanning · SQL Injection · XSS · OWASP testing · ethical hacking · penetration testing · risk assessment'],['AI / Vision','Python · Machine Learning · OpenCV · OCR · Selenium · anomaly detection · Telegram API']],pills:['Python','JavaScript','HTML','CSS','React','Flask','SQL','OpenCV','PHP','Laravel','MySQL']},
 {key:'credentials',label:'Credentials',kicker:'05 / PROOF OF WORK',title:'Research, education and certificates.',accent:'Evidence',summary:'Your strongest proof points are separated into readable results, so a recruiter can inspect each credential without leaving the page.',cards:[['Published Research','License Plate Recognition using OpenCV · JSRT · 2025 · Impact Factor 5.2'],['Education','B.E. Computer Science Engineering · Khaja Bandanawaz College Of Engineering · 2021–2025'],['Software Engineering','CS302 · Saylor Academy · 36-hour course · 75.81% · Certificate ID 250671527SN'],['Cybersecurity','Deloitte · Tata Group · ADVI Group of Companies virtual/internship credentials']],pills:['Research','CS302','AWS Cloud Computing','Deloitte','Tata Group','ADVI']},
 {key:'contact',label:'Contact',kicker:'06 / CONTACT',title:'Start the next conversation.',accent:'Professional contact',summary:'Email, LinkedIn and phone are kept visible and direct. No maze, no mystery button.',cards:[['Email','syedanajaf832@gmail.com'],['Phone','09538090817'],['Location','Hyderabad, Telangana 500006'],['LinkedIn','linkedin.com/in/syedanajaf']],pills:['Email me','Open LinkedIn','Download CV PDF']}
];
let stepIndex=0;
function stepCardHTML(title,text){return `<article class="step-card"><small>${title}</small><h3>${text}</h3></article>`}
function renderStep(i){
 stepIndex=Math.max(0,Math.min(i,steps.length-1));
 const s=steps[stepIndex];
 stepQuery.textContent=s.label; stepCount.textContent=`${stepIndex+1} / ${steps.length}`; stepProgress.textContent=`STEP ${stepIndex+1} OF ${steps.length}`;
 stepContent.innerHTML=`<div class="step-kicker">${s.kicker}</div><h1 class="step-title">${s.title}<br><em>${s.accent}</em></h1><p class="step-summary">${s.summary}</p><div class="step-grid">${s.cards.map(c=>stepCardHTML(c[0],c[1])).join('')}</div><div class="step-pills">${s.pills.map(x=>`<span>${x}</span>`).join('')}</div>${s.key==='work'?'<button class="step-link" id="openFirstProject">Open first project result →</button>':''}</div>`;
 stepPrev.disabled=stepIndex===0; stepNext.textContent=stepIndex===steps.length-1?'Finish ✓':'Next →';
 const first=document.querySelector('#openFirstProject'); if(first) first.onclick=()=>openProjectStep(0);
}
function openSteps(i=0){renderStep(i);stepViewer.classList.add('open');stepViewer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeSteps(){stepViewer.classList.remove('open');stepViewer.setAttribute('aria-hidden','true');document.body.style.overflow=''}
stepPrev.onclick=()=>renderStep(stepIndex-1);
stepNext.onclick=()=>{if(stepIndex===steps.length-1)closeSteps();else renderStep(stepIndex+1)};
stepClose.onclick=closeSteps;stepBack.onclick=closeSteps;

/* Main navigation becomes progressive, rather than jumping to a long page. */
document.querySelectorAll('.desktop-nav a, .mobile-menu a[href^="#"]').forEach(a=>{
 const href=a.getAttribute('href'); const map={"#top":0,"#journey":1,"#work":2,"#stack":3,"#credentials":4,"#contact":5};
 if(map[href]!==undefined){a.addEventListener('click',e=>{e.preventDefault();openSteps(map[href]);menu?.classList.remove('open')})}
});

/* Hero CTAs also enter the focused step flow. */
document.querySelectorAll('.hero-actions .solid-btn').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openSteps(2)}));

/* Project result opens a deeper Google-like result page with Previous/Next. */
let projectStepIndex=0;
function openProjectStep(i){
 projectStepIndex=Math.max(0,Math.min(i,projects.length-1));
 const p=projects[projectStepIndex];
 stepQuery.textContent=`Work / ${p.num}`;stepCount.textContent=`${projectStepIndex+1} / ${projects.length}`;stepProgress.textContent=`PROJECT ${projectStepIndex+1} OF ${projects.length}`;
 stepContent.innerHTML=`<div class="step-kicker">${p.tag}</div><h1 class="step-title">${p.title}</h1><p class="step-summary">${p.desc}</p><div class="step-pills">${p.tools.map(x=>`<span>${x}</span>`).join('')}</div><div class="step-result"><span class="step-result-label">OUTCOME</span><strong>${p.impact}</strong></div><button class="step-link" id="backToWork">← Back to Work</button>`;
 stepPrev.disabled=projectStepIndex===0;stepNext.disabled=false;stepNext.textContent=projectStepIndex===projects.length-1?'Back to Work':'Next project →';
 stepPrev.onclick=()=>openProjectStep(projectStepIndex-1);
 stepNext.onclick=()=>projectStepIndex===projects.length-1?openSteps(2):openProjectStep(projectStepIndex+1);
 document.querySelector('#backToWork').onclick=()=>openSteps(2);
 stepViewer.classList.add('open');stepViewer.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
projectList.addEventListener('click',e=>{const row=e.target.closest('.project-row');if(row){e.preventDefault();openProjectStep(+row.dataset.project)}});
