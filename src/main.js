
const data=[
{c:"security",i:"⌁",t:"Autonomous Network Attack Detection System",tools:["Python","Machine Learning","Telegram API"],d:"Real-time AI-based intrusion detection using cybersecurity datasets with Telegram alerts for malicious traffic patterns.",m:"30% faster incident response"},
{c:"ai",i:"◎",t:"OpenCV-Based License Plate Detection",tools:["Python","OpenCV","OCR","Selenium"],d:"Intelligent license plate recognition using OCR and template matching, with Selenium vehicle-detail fetching.",m:"Published research · 5.2 impact factor"},
{c:"web",i:"▣",t:"Student Enrolment System",tools:["HTML","CSS","JavaScript","Laravel","MySQL"],d:"Secure enrolment portal with login, course management, Stripe payments and an admin dashboard.",m:"30% faster enrollment"},
{c:"security",i:"⌕",t:"Web Application Vulnerability Scanner",tools:["Python","Requests","BeautifulSoup"],d:"Modular scanner for SQL Injection, XSS and OWASP-focused vulnerability testing.",m:"Security automation"},
{c:"security",i:"◆",t:"Advanced Encryption Tool (AES-256)",tools:["Python","PyCryptodome","JavaScript"],d:"Interactive AES-256 file encryption and decryption tool with a clean browser interface.",m:"Secure file workflows"},
{c:"web",i:"◫",t:"Learning Website using React.js",tools:["React.js","Vercel"],d:"Interactive animated e-learning platform built around reusable React components.",m:"Responsive web platform"}
];

const grid=document.querySelector("#grid"), modal=document.querySelector("#modal"), body=document.querySelector("#modalBody");
function render(filter="all"){
  grid.innerHTML=data.filter(x=>filter==="all"||x.c===filter).map(x=>`
    <article class="project reveal" data-id="${data.indexOf(x)}">
      <div class="icon">${x.i}</div><h3>${x.t}</h3><p>${x.d}</p><small>${x.m} ↗</small>
    </article>`).join("");
  requestAnimationFrame(()=>document.querySelectorAll(".reveal").forEach((el,i)=>setTimeout(()=>el.classList.add("show"),i*45)));
}
render();

grid.addEventListener("click",e=>{
  const card=e.target.closest(".project"); if(!card)return;
  const x=data[card.dataset.id];
  body.innerHTML=`<div class="modalbody"><div class="icon">${x.i}</div><h2>${x.t}</h2><p>${x.d}</p><div class="tools">${x.tools.map(t=>`<span>${t}</span>`).join("")}</div><p><b>${x.m}</b></p></div>`;
  modal.showModal();
});
document.querySelector("#x").onclick=()=>modal.close();
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});

document.querySelectorAll("#filters button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelector("#filters .on")?.classList.remove("on");
    btn.classList.add("on");
    render(btn.dataset.f);
  });
});

const pdf=document.querySelector("#pdf");
document.querySelector("#preview").onclick=()=>pdf.showModal();
const previewCard=document.querySelector("#preview-card"); if(previewCard) previewCard.onclick=()=>pdf.showModal();
document.querySelector("#px").onclick=()=>pdf.close();
pdf.addEventListener("click",e=>{if(e.target===pdf)pdf.close()});

const drawer=document.querySelector("#drawer");
document.querySelector("#menu").onclick=()=>drawer.classList.add("open");
document.querySelector("#close").onclick=()=>drawer.classList.remove("open");
document.querySelectorAll("#drawer a").forEach(a=>a.onclick=()=>drawer.classList.remove("open"));

const revealObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("show");revealObserver.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll("section:not(.hero),.cards article,.timeline article,.research,.education,.contact").forEach(el=>{
 el.classList.add("reveal");revealObserver.observe(el);
});

const navLinks=[...document.querySelectorAll("header nav a")];
const sections=[...document.querySelectorAll("main section[id]")];
const navObserver=new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
  if(entry.isIntersecting){
   navLinks.forEach(a=>a.classList.toggle("active",a.getAttribute("href")==="#"+entry.target.id));
  }
 });
},{rootMargin:"-40% 0px -50% 0px"});
sections.forEach(s=>navObserver.observe(s));

document.addEventListener("keydown",e=>{
  if(e.key==="Escape"){modal.close();pdf.close();drawer.classList.remove("open")}
});
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  document.documentElement.style.scrollBehavior="auto";
}
document.querySelectorAll(".primary,.cv").forEach(el=>{
  el.addEventListener("pointermove",e=>{
    const r=el.getBoundingClientRect(), x=(e.clientX-r.left-r.width/2)*.06, y=(e.clientY-r.top-r.height/2)*.06;
    el.style.transform=`translate(${x}px,${y}px)`;
  });
  el.addEventListener("pointerleave",()=>el.style.transform="");
});

// Keep the original CV URL centralized so preview and download always use the same file.
window.CV_PDF = "public/Syeda-Ameena-Najaf-CV.pdf";
document.querySelectorAll('a[href*="Syeda-Ameena-Najaf"]').forEach(a => a.href = window.CV_PDF);

\nif (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.style.scrollBehavior = "auto";
}
