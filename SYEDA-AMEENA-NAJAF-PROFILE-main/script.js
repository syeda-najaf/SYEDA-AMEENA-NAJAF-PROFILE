/* =========================================================
   PAGE LOADER
========================================================= */

const loader = document.getElementById("pageLoader");
const loaderProgress = document.getElementById("loaderProgress");

let progress = 0;

const loaderTimer = setInterval(() => {

    progress += Math.floor(
        Math.random() * 12
    ) + 5;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loaderTimer);

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 300);

    }

    loaderProgress.style.width =
        progress + "%";

}, 100);


/* =========================================================
   YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   HEADER SCROLL
========================================================= */

const header =
    document.getElementById("header");

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    },
    { passive: true }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileLinks =
    mobileMenu.querySelectorAll("a");

menuButton.addEventListener(
    "click",
    () => {

        mobileMenu.classList.toggle("open");

        const isOpen =
            mobileMenu.classList.contains("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    }
);


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            mobileMenu.classList.remove(
                "open"
            );

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }
    );

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

const updateActiveNav = () => {

    let current = "home";

    sections.forEach(section => {

        const top =
            section.getBoundingClientRect().top;

        if (
            top <= 160 &&
            top > -section.offsetHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);


/* =========================================================
   COUNTERS
========================================================= */

const counters =
    document.querySelectorAll(
        ".counter"
    );

let counterStarted = false;

const runCounters = () => {

    if (counterStarted) return;

    const statsSection =
        document.querySelector(
            ".stats-section"
        );

    if (!statsSection) return;

    const rect =
        statsSection.getBoundingClientRect();

    if (
        rect.top <
        window.innerHeight * 0.8
    ) {

        counterStarted = true;

        counters.forEach(counter => {

            const target =
                Number(
                    counter.dataset.target
                );

            let current = 0;

            const step =
                Math.max(
                    1,
                    Math.ceil(
                        target / 20
                    )
                );

            const timer =
                setInterval(() => {

                    current += step;

                    if (
                        current >= target
                    ) {

                        current = target;

                        clearInterval(
                            timer
                        );

                    }

                    counter.textContent =
                        current;

                }, 55);

        });

    }

};

window.addEventListener(
    "scroll",
    runCounters,
    { passive: true }
);

runCounters();


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );

            const filter =
                button.dataset.filter;

            projectCards.forEach(card => {

                const category =
                    card.dataset.category;

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove(
                        "hidden"
                    );

                } else {

                    card.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

});


/* =========================================================
   PROJECT MODAL
========================================================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalBackground =
    document.getElementById(
        "modalBackground"
    );

const modalCategory =
    document.getElementById(
        "modalCategory"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalDescription =
    document.getElementById(
        "modalDescription"
    );

const modalTech =
    document.getElementById(
        "modalTech"
    );


const projectData = {

    anpr: {

        category:
            "COMPUTER VISION",

        title:
            "Automatic Number Plate Recognition",

        description:
            "A computer vision project designed to detect vehicle number plates and extract plate information using image processing, OpenCV and OCR techniques.",

        technologies: [
            "Python",
            "OpenCV",
            "OCR",
            "Computer Vision"
        ]

    },


    anad: {

        category:
            "CYBERSECURITY / AI",

        title:
            "ANAD PRO",

        description:
            "An autonomous network attack detection and monitoring project combining machine learning with cybersecurity monitoring and real-time alert notifications.",

        technologies: [
            "Python",
            "Machine Learning",
            "Cybersecurity",
            "Telegram"
        ]

    },


    scanner: {

        category:
            "WEB SECURITY",

        title:
            "Web Vulnerability Scanner",

        description:
            "A Python-based security testing project designed to automate website analysis and identify common web security vulnerabilities.",

        technologies: [
            "Python",
            "Requests",
            "BeautifulSoup",
            "Web Security"
        ]

    },


    inventory: {

        category:
            "FULL STACK",

        title:
            "Inventory Management System",

        description:
            "A full-stack inventory management application using React and Flask, including API-based data handling and stock monitoring.",

        technologies: [
            "React",
            "Flask",
            "REST API",
            "JavaScript"
        ]

    },


    integrity: {

        category:
            "SECURITY",

        title:
            "File Integrity Monitoring System",

        description:
            "A security monitoring application that uses cryptographic file hashes to detect changes and maintain file integrity records.",

        technologies: [
            "Python",
            "Flask",
            "Hashlib",
            "Security"
        ]

    },


    encryption: {

        category:
            "CYBERSECURITY",

        title:
            "Advanced Encryption Tool",

        description:
            "A Flask-based security application providing a web interface for encryption and decryption workflows.",

        technologies: [
            "Python",
            "Flask",
            "Cryptography",
            "Web Development"
        ]

    }

};


projectCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const key =
                card.dataset.project;

            const project =
                projectData[key];

            if (!project) return;

            modalCategory.textContent =
                project.category;

            modalTitle.textContent =
                project.title;

            modalDescription.textContent =
                project.description;

            modalTech.innerHTML = "";

            project.technologies.forEach(
                tech => {

                    const tag =
                        document.createElement(
                            "span"
                        );

                    tag.textContent =
                        tech;

                    modalTech.appendChild(
                        tag
                    );

                }
            );

            projectModal.classList.add(
                "open"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

});


function closeModal() {

    projectModal.classList.remove(
        "open"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);

modalBackground.addEventListener(
    "click",
    closeModal
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains(
                "open"
            )
        ) {

            closeModal();

        }

    }
);


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .experience-item, .skill-group, .education-card, .research-card"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                        "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(
        element
    );

});


/* =========================================================
   SMOOTH ANCHOR BEHAVIOUR
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(link => {

    link.addEventListener(
        "click",
        event => {

            const targetId =
                link.getAttribute(
                    "href"
                );

            const target =
                document.querySelector(
                    targetId
                );

            if (!target) return;

            event.preventDefault();

            const headerHeight =
                header.offsetHeight;

            const position =
                target.offsetTop -
                headerHeight;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });

        }
    );

});