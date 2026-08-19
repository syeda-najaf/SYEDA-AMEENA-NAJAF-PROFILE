
const projects=[
["CYBERSECURITY · AI","Autonomous Network Attack Detection","AI-based intrusion detection using cybersecurity datasets, with Telegram alerts for malicious traffic patterns and a reported 30% faster response.","Python","Machine Learning","Telegram API"],
["COMPUTER VISION · RESEARCH","License Plate Detection","OpenCV, OCR and Selenium recognition system for automated license plate identification and vehicle-detail lookup. Published research.","Python","OpenCV","OCR","Selenium"],
["WEB DEVELOPMENT","Student Enrolment System","Secure enrolment portal with login, course management, payment integration and an admin dashboard. Reported 30% improvement in enrolment speed.","HTML","CSS","JavaScript","Bootstrap","PHP","Laravel","MySQL","Stripe"],
["SECURITY","Web Application Vulnerability Scanner","Modular Python scanner for SQL Injection, XSS and other OWASP vulnerabilities.","Python","Requests","BeautifulSoup"],
["CRYPTOGRAPHY","Advanced Encryption Tool","Interactive AES-256 file encryption and decryption tool with a practical web interface.","Python","PyCryptodome","JavaScript"],
["REACT","Interactive Learning Website","Animated e-learning platform built with React.js and deployed with Vercel.","React.js","Vercel"]
];
const details={
research:["RESEARCH","License Plate Recognition using OpenCV","Published in the Journal of Scientific Research and Technology in 2025. The research focuses on smart surveillance and real-time number plate recognition using Python and OpenCV.","JSRT","2025","Impact factor 5.2"],
education:["EDUCATION","B.E. Computer Science Engineering","Khaja Bandanawaz College of Engineering, Khaja Bandanawaz University.","Computer Science Engineering"],
learning:["LEARNING","Software Engineering / CS302","A 36-hour self-paced software engineering course covering software development life cycle, architecture, debugging and testing. Recorded score: 75.81%.","Saylor Academy","CS302"],
virtual:["VIRTUAL PROGRAMS","AWS · Deloitte · Tata Group / Forage","Completed virtual experience programs covering cloud / solutions architecture, cybersecurity and risk-oriented professional tasks.","2025","Forage"]
};
const overlay=document.querySelector("#overlay"), body=document.querySelector("#caseContent"), count=document.querySelector("#caseCount");let index=0;
function showProject(i){index=i;let p=projects[i];body.innerHTML=`<span class="case-tag">${p[0]}</span><h2>${p[1]}</h2><p>${p[2]}</p><div class="tags">${p.slice(3).map(x=>`<span>${x}</span>`).join("")}</div>`;count.textContent=`${i+1} / ${projects.length}`;overlay.classList.add("open");document.body.style.overflow="hidden"}
function showDetail(d){body.innerHTML=`<span class="case-tag">${d[0]}</span><h2>${d[1]}</h2><p>${d[2]}</p><div class="tags">${d.slice(3).map(x=>`<span>${x}</span>`).join("")}</div>`;count.textContent="";overlay.classList.add("open");document.body.style.overflow="hidden"}
document.querySelectorAll("[data-project]").forEach(e=>e.onclick=()=>showProject(+e.dataset.project));
document.querySelectorAll("[data-panel]").forEach(e=>e.onclick=()=>showDetail(details[e.dataset.panel]));
document.querySelector("#caseClose").onclick=()=>{overlay.classList.remove("open");document.body.style.overflow=""};
overlay.onclick=e=>{if(e.target===overlay)document.querySelector("#caseClose").click()};
document.querySelector("#prev").onclick=()=>showProject((index-1+projects.length)%projects.length);
document.querySelector("#next").onclick=()=>showProject((index+1)%projects.length);
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&overlay.classList.contains("open"))document.querySelector("#caseClose").click()});
document.querySelectorAll("[data-cv]").forEach(e=>e.onclick=()=>window.open("Syeda-Ameena-Najaf cv Updated CV-1 (1)(2).pdf","_blank"));
const drawer=document.querySelector("#drawer");document.querySelector("#hamburger").onclick=()=>drawer.classList.add("open");document.querySelector("#drawerClose").onclick=()=>drawer.classList.remove("open");drawer.querySelectorAll("a").forEach(a=>a.onclick=()=>drawer.classList.remove("open"));
