/* =========================================================
   SYEDA AMEENA NAJAF
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   1. PRELOADER
========================================================= */

window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("hide");
        }, 500);
    }

});


/* =========================================================
   2. MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });


    navMenu.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================================
   3. PROJECT / CREDENTIAL MODAL
========================================================= */

const modal = document.getElementById("detailsModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");


function openModal(title, description) {

    if (!modal) return;

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const title = button.dataset.title;

        const description = button.dataset.description;

        if (title && description) {

            openModal(title, description);

        }

    });

});


document.querySelectorAll(".credential-btn").forEach(button => {

    button.addEventListener("click", () => {

        const title = button.dataset.title;

        const description = button.dataset.description;

        openModal(title, description);

    });

});


if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener("click", closeModal);
}


document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =========================================================
   4. CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");

const sendButton =
    document.getElementById("sendMessageBtn");

const sendText =
    document.getElementById("sendText");

const sendLoading =
    document.getElementById("sendLoading");

const formStatus =
    document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener("submit", async event => {

        event.preventDefault();


        /* Prevent duplicate submissions */

        if (sendButton.disabled) {
            return;
        }


        /* Basic validation */

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            showFormStatus(
                "Please fill in all fields.",
                "error"
            );

            return;
        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            showFormStatus(
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        /* Loading state */

        sendButton.disabled = true;

        sendText.style.display = "none";

        sendLoading.style.display = "inline";


        hideFormStatus();


        try {

            const formData =
                new FormData(contactForm);


            const response =
                await fetch(contactForm.action, {

                    method: "POST",

                    body: formData,

                    headers: {
                        "Accept": "application/json"
                    }

                });


            if (!response.ok) {
                throw new Error("Submission failed.");
            }


            /* Success */

            showFormStatus(
                "Message sent successfully ✓ Thank you for reaching out!",
                "success"
            );


            contactForm.reset();


        } catch (error) {

            console.error(
                "Contact form error:",
                error
            );


            showFormStatus(
                "Something went wrong. Please try again or email me directly at syedanajaf832@gmail.com.",
                "error"
            );


        } finally {

            sendButton.disabled = false;

            sendText.style.display = "inline";

            sendLoading.style.display = "none";

        }

    });

}


/* =========================================================
   5. FORM STATUS
========================================================= */

function showFormStatus(message, type) {

    if (!formStatus) return;

    formStatus.textContent = message;

    formStatus.className = type;

}


function hideFormStatus() {

    if (!formStatus) return;

    formStatus.textContent = "";

    formStatus.className = "";

}


/* =========================================================
   6. SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".project-card, .service-card, .credential-card, .timeline-item, .skill-category, .contact-detail"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

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

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   7. ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar nav a");


const activeObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove("active");

                        if (
                            link.getAttribute("href") ===
                            "#" + entry.target.id
                        ) {

                            link.classList.add("active");

                        }

                    });

                }

            });

        },
        {
            threshold: 0.25
        }
    );


sections.forEach(section => {

    activeObserver.observe(section);

});


/* =========================================================
   8. DYNAMIC YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(
        "[data-current-year]"
    );


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   9. PREVENT FORM DOUBLE SUBMISSION
========================================================= */

window.addEventListener("beforeunload", () => {

    if (contactForm) {

        contactForm.dataset.ready = "true";

    }

});


/* =========================================================
   10. ADD REVEAL CSS DYNAMICALLY
========================================================= */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .reveal {
        opacity: 0;
        transform: translateY(30px);
        transition:
            opacity .7s ease,
            transform .7s ease;
    }

    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }

    .navbar nav a.active {
        color: #111111;
    }

`;


document.head.appendChild(revealStyle);


/* =========================================================
   END
========================================================= */