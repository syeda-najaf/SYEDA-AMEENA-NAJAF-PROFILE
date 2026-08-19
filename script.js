/* =========================================
   YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const closeMenu =
    document.getElementById("closeMenu");


menuButton.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});


closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

    });

});


/* =========================================
   CV
========================================= */

const cvPath =
    "assets/Syeda-Ameena-Najaf-CV.pdf";


function openCV() {

    window.open(
        cvPath,
        "_blank",
        "noopener,noreferrer"
    );

}


document
    .getElementById("openCvTop")
    .addEventListener("click", openCV);


document
    .getElementById("heroCv")
    .addEventListener("click", openCV);


document
    .getElementById("openCv")
    .addEventListener("click", openCV);


document
    .getElementById("mobileCv")
    .addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        openCV();

    });


/* =========================================
   PROJECT DATA
========================================= */

const projects = [

    {
        category: "CYBERSECURITY / AI",

        title:
            "Autonomous Network Attack Detection",

        description:
            "AI-based network monitoring project focused on detecting suspicious activity and producing practical security alerts.",

        tags: [
            "Python",
            "Machine Learning",
            "Telegram"
        ]
    },


    {
        category: "COMPUTER VISION",

        title:
            "License Plate Detection",

        description:
            "Computer vision project using OpenCV and OCR techniques for automatic vehicle number plate recognition.",

        tags: [
            "Python",
            "OpenCV",
            "OCR"
        ]
    },


    {
        category: "WEB DEVELOPMENT",

        title:
            "Student Enrolment System",

        description:
            "Web application concept focused on authentication, course management, administration and digital workflows.",

        tags: [
            "JavaScript",
            "PHP",
            "Laravel",
            "MySQL"
        ]
    },


    {
        category: "CYBERSECURITY",

        title:
            "Web Vulnerability Scanner",

        description:
            "Python-based security scanner focused on common web vulnerabilities including XSS and SQL injection.",

        tags: [
            "Python",
            "Requests",
            "BeautifulSoup"
        ]
    },


    {
        category: "CRYPTOGRAPHY",

        title:
            "Advanced Encryption Tool",

        description:
            "Application designed around AES-256 encryption and decryption with a simple web interface.",

        tags: [
            "Python",
            "Flask",
            "AES-256"
        ]
    },


    {
        category: "REACT / UI",

        title:
            "Interactive Learning Website",

        description:
            "Responsive React-based learning experience designed around modern interface and interaction principles.",

        tags: [
            "React",
            "JavaScript",
            "Vercel"
        ]
    }

];


/* =========================================
   PROJECT MODAL
========================================= */

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalCategory =
    document.getElementById("modalCategory");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTags =
    document.getElementById("modalTags");

const projectCounter =
    document.getElementById("projectCounter");

const previousProject =
    document.getElementById("previousProject");

const nextProject =
    document.getElementById("nextProject");


let currentProject = 0;


function renderProject(index) {

    const project =
        projects[index];

    modalCategory.textContent =
        project.category;

    modalTitle.textContent =
        project.title;

    modalDescription.textContent =
        project.description;

    modalTags.innerHTML = "";

    project.tags.forEach(tag => {

        const element =
            document.createElement("span");

        element.textContent =
            tag;

        modalTags.appendChild(element);

    });


    projectCounter.textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;

}


function openProject(index) {

    currentProject = index;

    renderProject(currentProject);

    projectModal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeProject() {

    projectModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


document
    .querySelectorAll(".project-card")
    .forEach((card, index) => {

        card.addEventListener("click", () => {

            openProject(index);

        });

    });


modalClose.addEventListener(
    "click",
    closeProject
);


modalOverlay.addEventListener(
    "click",
    closeProject
);


previousProject.addEventListener(
    "click",
    () => {

        currentProject--;

        if (currentProject < 0) {

            currentProject =
                projects.length - 1;

        }

        renderProject(currentProject);

    }
);


nextProject.addEventListener(
    "click",
    () => {

        currentProject++;

        if (
            currentProject >=
            projects.length
        ) {

            currentProject = 0;

        }

        renderProject(currentProject);

    }
);


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            !projectModal.classList.contains(
                "active"
            )
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeProject();

        }


        if (event.key === "ArrowLeft") {

            previousProject.click();

        }


        if (event.key === "ArrowRight") {

            nextProject.click();

        }

    }
);


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".section, .intro-section, .skills-section, .experience-section, .cv-section, .contact-section"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.08
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});