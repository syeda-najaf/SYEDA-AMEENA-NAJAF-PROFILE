/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById("loader");
const loaderProgress = document.getElementById("loaderProgress");

let progress = 0;

const loaderTimer = setInterval(() => {

    progress += Math.random() * 15;

    if (progress >= 100) {

        progress = 100;

        clearInterval(loaderTimer);

        setTimeout(() => {
            loader.classList.add("hide");
        }, 400);
    }

    loaderProgress.style.width = progress + "%";

}, 100);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");

});


document.querySelectorAll(".mobile-inner a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".desktop-nav a");

const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            navigationLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(
                `.desktop-nav a[href="#${entry.target.id}"]`
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        });

    },
    {
        threshold: 0.35
    }
);

sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================================
   PROJECT FILTER
========================================================= */

const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 30);

            } else {

                card.style.opacity = "0";
                card.style.transform = "translateY(10px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 250);

            }

        });

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealItems = document.querySelectorAll(
    ".about-content, .about-image, .service-card, .project-card, .experience-item, .contact-box"
);

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition =
        "opacity .7s ease, transform .7s ease";

});


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            revealObserver.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);


revealItems.forEach(item => {
    revealObserver.observe(item);
});


/* =========================================================
   FOOTER YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.background =
            "rgba(10,13,19,.95)";

        header.style.backdropFilter =
            "blur(15px)";

    } else {

        header.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,.65), transparent)";

        header.style.backdropFilter =
            "none";

    }

});