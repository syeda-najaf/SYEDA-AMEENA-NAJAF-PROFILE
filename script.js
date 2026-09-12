"use strict";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  initPreloader();
  initNavigation();
  initScrollProgress();
  initRevealAnimations();
  initSkillBars();
  initCursor();
  initMagneticButtons();
  initButtonRipple();
  initProjectModal();
  initCertificateViewer();
  initBackToTop();

});


/* =========================================================
   PRELOADER
========================================================= */

function initPreloader() {

  const preloader = document.getElementById("preloader");

  if (!preloader) {
    return;
  }

  window.addEventListener("load", () => {

    setTimeout(() => {
      preloader.classList.add("is-hidden");
    }, 500);

  });

}


/* =========================================================
   NAVIGATION
========================================================= */

function initNavigation() {

  const header = document.getElementById("siteHeader");

  const menuToggle = document.getElementById("menuToggle");
  const menuClose = document.getElementById("menuClose");
  const mobileMenu = document.getElementById("mobileMenu");

  const navLinks = Array.from(
    document.querySelectorAll(".nav-link")
  );

  const mobileLinks = Array.from(
    document.querySelectorAll(".mobile-links a")
  );


  function closeMenu() {

    mobileMenu?.classList.remove("open");

    document.body.style.overflow = "";

  }


  menuToggle?.addEventListener("click", () => {

    mobileMenu?.classList.add("open");

    document.body.style.overflow = "hidden";

  });


  menuClose?.addEventListener("click", closeMenu);


  mobileLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

  });


  window.addEventListener("scroll", () => {

    if (!header) {
      return;
    }

    header.classList.toggle(
      "scrolled",
      window.scrollY > 40
    );

  });


  const sections = Array.from(
    document.querySelectorAll("main section[id]")
  );


  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.id;

        navLinks.forEach(link => {

          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}`
          );

        });

      });

    },
    {
      threshold: 0.2,
      rootMargin: "-15% 0px -60% 0px"
    }
  );


  sections.forEach(section => {
    observer.observe(section);
  });

}


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function initScrollProgress() {

  const progress =
    document.getElementById("scrollProgress");

  if (!progress) {
    return;
  }


  function update() {

    const scrollTop = window.scrollY;

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const percentage =
      documentHeight > 0
        ? (scrollTop / documentHeight) * 100
        : 0;

    progress.style.width =
      `${Math.min(100, Math.max(0, percentage))}%`;

  }


  window.addEventListener(
    "scroll",
    update,
    { passive: true }
  );

  update();

}


/* =========================================================
   REVEAL ANIMATIONS
========================================================= */

function initRevealAnimations() {

  const elements =
    document.querySelectorAll(".reveal");

  if (!elements.length) {
    return;
  }


  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("is-visible");

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.08
    }
  );


  elements.forEach(element => {

    observer.observe(element);

  });

}


/* =========================================================
   SKILL BARS
========================================================= */

function initSkillBars() {

  const tracks =
    document.querySelectorAll(".skill-track i");

  if (!tracks.length) {
    return;
  }


  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        const bar = entry.target;

        const width =
          bar.dataset.width || "0%";

        setTimeout(() => {

          bar.style.width = width;

        }, 150);

        observer.unobserve(bar);

      });

    },
    {
      threshold: 0.5
    }
  );


  tracks.forEach(track => {

    observer.observe(track);

  });

}


/* =========================================================
   CUSTOM CURSOR
========================================================= */

function initCursor() {

  const dot =
    document.getElementById("cursorDot");

  const ring =
    document.getElementById("cursorRing");

  if (!dot || !ring) {
    return;
  }


  if (
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return;
  }


  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  let ringX = mouseX;
  let ringY = mouseY;


  document.body.classList.add("has-cursor");


  document.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;

  });


  function animateRing() {

    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(animateRing);

  }


  animateRing();


  const interactiveSelector =
    "a, button, input, textarea, .certificate-card";


  document
    .querySelectorAll(interactiveSelector)
    .forEach(element => {

      element.addEventListener(
        "mouseenter",
        () => {
          ring.classList.add("is-active");
        }
      );


      element.addEventListener(
        "mouseleave",
        () => {
          ring.classList.remove("is-active");
        }
      );

    });


  document.addEventListener("mousedown", () => {
    ring.classList.add("is-down");
  });


  document.addEventListener("mouseup", () => {
    ring.classList.remove("is-down");
  });

}


/* =========================================================
   MAGNETIC BUTTONS
========================================================= */

function initMagneticButtons() {

  if (
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return;
  }


  const magnets =
    document.querySelectorAll(".magnetic");


  magnets.forEach(magnet => {

    magnet.addEventListener("mousemove", event => {

      const rect =
        magnet.getBoundingClientRect();

      const x =
        event.clientX -
        rect.left -
        rect.width / 2;

      const y =
        event.clientY -
        rect.top -
        rect.height / 2;


      magnet.style.transform =
        `translate(${x * 0.2}px, ${y * 0.25}px)`;

    });


    magnet.addEventListener("mouseleave", () => {

      magnet.style.transform = "";

    });

  });

}


/* =========================================================
   BUTTON RIPPLE
========================================================= */

function initButtonRipple() {

  const buttons =
    document.querySelectorAll(".button");


  buttons.forEach(button => {

    button.addEventListener("click", () => {

      button.classList.remove("is-rippling");

      void button.offsetWidth;

      button.classList.add("is-rippling");

    });

  });

}


/* =========================================================
   PROJECT MODAL
========================================================= */

function initProjectModal() {

  const modal =
    document.getElementById("projectModal");

  const overlay =
    document.getElementById("modalOverlay");

  const closeButton =
    document.getElementById("modalClose");

  const title =
    document.getElementById("modalTitle");

  const description =
    document.getElementById("modalDescription");

  const label =
    document.getElementById("modalLabel");

  const tags =
    document.getElementById("modalTags");

  const year =
    document.getElementById("modalYear");

  const link =
    document.getElementById("modalLink");


  if (!modal) {
    return;
  }


  const projects = {

    attack: {
      label: "CYBERSECURITY",
      title: "Autonomous Network Attack Detection System",
      description:
        "A Python-based security monitoring project designed to identify suspicious network activity and provide automated Telegram notifications.",
      tags: [
        "Python",
        "Networking",
        "Telegram Bot",
        "Security"
      ],
      year: "2025",
      link: "#"
    },


    plate: {
      label: "COMPUTER VISION",
      title: "OpenCV-Based License Plate Detection",
      description:
        "A computer vision workflow using OpenCV and OCR techniques to detect and recognize vehicle license plates.",
      tags: [
        "Python",
        "OpenCV",
        "OCR",
        "Automation"
      ],
      year: "2025",
      link: "#"
    },


    student: {
      label: "WEB APPLICATION",
      title: "Student Enrolment System",
      description:
        "A structured student management solution focused on enrollment workflows and organized academic information.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "SQL"
      ],
      year: "2025",
      link: "#"
    },


    scanner: {
      label: "APPLICATION SECURITY",
      title: "Web Application Vulnerability Scanner",
      description:
        "A security-focused application designed to identify common web vulnerabilities and provide useful findings.",
      tags: [
        "Python",
        "OWASP",
        "Security",
        "HTTP"
      ],
      year: "2025",
      link: "#"
    },


    aes: {
      label: "CRYPTOGRAPHY",
      title: "Advanced Encryption Tool · AES-256",
      description:
        "An encryption utility focused on protecting sensitive files and information using modern cryptographic practices.",
      tags: [
        "Python",
        "AES-256",
        "OpenSSL",
        "Security"
      ],
      year: "2025",
      link: "#"
    },


    learning: {
      label: "EDTECH / FULL STACK",
      title: "SYED Educational Learning Platform",
      description:
        "A modern educational platform with course discovery, categories, enrollment, progress tracking, authentication, certificates and responsive learning experiences.",
      tags: [
        "React",
        "JavaScript",
        "CSS",
        "Vercel"
      ],
      year: "2026",
      link: "https://syed-educational-platform.vercel.app/"
    }

  };


  function openProject(projectKey) {

    const project =
      projects[projectKey];

    if (!project) {
      return;
    }


    label.textContent =
      project.label;

    title.textContent =
      project.title;

    description.textContent =
      project.description;

    year.textContent =
      project.year;


    tags.innerHTML = "";


    project.tags.forEach(tag => {

      const span =
        document.createElement("span");

      span.textContent = tag;

      tags.appendChild(span);

    });


    if (project.link === "#") {

      link.style.display = "none";

    } else {

      link.style.display = "inline";
      link.href = project.link;

    }


    modal.classList.add("open");

    document.body.classList.add("modal-open");

  }


  function closeProject() {

    modal.classList.remove("open");

    document.body.classList.remove("modal-open");

  }


  document
    .querySelectorAll(".project-row")
    .forEach(row => {

      const button =
        row.querySelector(".view-project");

      const key =
        row.dataset.project;


      button?.addEventListener("click", event => {

        if (
          button.tagName.toLowerCase() === "a"
        ) {
          return;
        }

        event.preventDefault();

        openProject(key);

      });

    });


  closeButton?.addEventListener(
    "click",
    closeProject
  );


  overlay?.addEventListener(
    "click",
    closeProject
  );


  document.addEventListener("keydown", event => {

    if (
      event.key === "Escape" &&
      modal.classList.contains("open")
    ) {
      closeProject();
    }

  });

}


/* =========================================================
   CERTIFICATE VIEWER
========================================================= */

function initCertificateViewer() {

  const cards = Array.from(
    document.querySelectorAll(".certificate-card")
  );


  const modal =
    document.getElementById("certificateModal");

  const backdrop =
    document.getElementById("certificateBackdrop");

  const closeButton =
    document.getElementById("viewerClose");

  const previousButton =
    document.getElementById("viewerPrev");

  const nextButton =
    document.getElementById("viewerNext");

  const image =
    document.getElementById("viewerImage");

  const title =
    document.getElementById("viewerTitle");

  const category =
    document.getElementById("viewerCategory");

  const counter =
    document.getElementById("viewerCounter");

  const openImage =
    document.getElementById("openCertificate");

  const zoomIn =
    document.getElementById("zoomIn");

  const zoomOut =
    document.getElementById("zoomOut");

  const zoomReset =
    document.getElementById("zoomReset");

  const fullscreenButton =
    document.getElementById("fullscreenButton");

  const imageScroll =
    document.getElementById("viewerImageScroll");


  if (
    !cards.length ||
    !modal ||
    !image
  ) {
    return;
  }


  let currentIndex = 0;

  let zoom = 1;

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;


  /*
    Build certificate data directly from
    the HTML cards.
  */

  const certificates =
    cards.map(card => ({

      src:
        card.dataset.certificate,

      title:
        card.dataset.title ||
        "Certificate",

      category:
        card.dataset.category ||
        "CREDENTIAL",

      alt:
        card
          .querySelector("img")
          ?.getAttribute("alt") ||
        "Certificate"

    }));


  function applyZoom() {

    image.style.transform =
      `scale(${zoom})`;

    if (zoom > 1) {

      imageScroll.style.cursor = "grab";

    } else {

      imageScroll.style.cursor = "default";

    }


    if (zoomReset) {

      zoomReset.textContent =
        `${Math.round(zoom * 100)}%`;

    }

  }


  function render(index) {

    if (!certificates.length) {
      return;
    }


    currentIndex =
      ((index % certificates.length) +
        certificates.length) %
      certificates.length;


    const certificate =
      certificates[currentIndex];


    zoom = 1;

    imageScroll.scrollTop = 0;
    imageScroll.scrollLeft = 0;

    applyZoom();


    /*
      THIS IS THE MAIN FIX.

      The exact image stored in the
      certificate card is loaded into
      the large viewer.
    */

    image.src =
      certificate.src;

    image.alt =
      certificate.alt;


    title.textContent =
      certificate.title;

    category.textContent =
      certificate.category;


    counter.textContent =
      `${String(currentIndex + 1).padStart(2, "0")} / ${String(certificates.length).padStart(2, "0")}`;


    openImage.href =
      certificate.src;


    /*
      Clear old broken image handlers.
    */

    image.onerror = () => {

      console.error(
        "Certificate image not found:",
        certificate.src
      );

      image.alt =
        "Certificate image not found. Check the file inside assets/certificates.";

    };

  }


  function openViewer(index) {

    render(index);

    modal.classList.add("open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

  }


  function closeViewer() {

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );


    if (document.fullscreenElement) {

      document.exitFullscreen?.();

    }

  }


  /*
    Clicking the certificate card opens
    the matching certificate.
  */

  cards.forEach((card, index) => {

    card.addEventListener("click", event => {

      event.preventDefault();

      openViewer(index);

    });


    card.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openViewer(index);

      }

    });

  });


  closeButton?.addEventListener(
    "click",
    closeViewer
  );


  backdrop?.addEventListener(
    "click",
    closeViewer
  );


  previousButton?.addEventListener(
    "click",
    () => {
      render(currentIndex - 1);
    }
  );


  nextButton?.addEventListener(
    "click",
    () => {
      render(currentIndex + 1);
    }
  );


  zoomIn?.addEventListener(
    "click",
    () => {

      zoom =
        Math.min(
          MAX_ZOOM,
          zoom + 0.25
        );

      applyZoom();

    }
  );


  zoomOut?.addEventListener(
    "click",
    () => {

      zoom =
        Math.max(
          MIN_ZOOM,
          zoom - 0.25
        );

      applyZoom();

    }
  );


  zoomReset?.addEventListener(
    "click",
    () => {

      zoom = 1;

      imageScroll.scrollTop = 0;
      imageScroll.scrollLeft = 0;

      applyZoom();

    }
  );


  fullscreenButton?.addEventListener(
    "click",
    async () => {

      const viewer =
        modal.querySelector(
          ".certificate-viewer"
        );


      if (!document.fullscreenElement) {

        try {

          await viewer?.requestFullscreen();

        } catch (error) {

          console.warn(
            "Fullscreen unavailable:",
            error
          );

        }

      } else {

        await document.exitFullscreen?.();

      }

    }
  );


  /*
    Keyboard controls
  */

  document.addEventListener(
    "keydown",
    event => {

      if (
        !modal.classList.contains("open")
      ) {
        return;
      }


      if (event.key === "Escape") {

        closeViewer();

      }


      if (
        event.key === "ArrowLeft"
      ) {

        render(currentIndex - 1);

      }


      if (
        event.key === "ArrowRight"
      ) {

        render(currentIndex + 1);

      }


      if (
        event.key === "+" ||
        event.key === "="
      ) {

        zoom =
          Math.min(
            MAX_ZOOM,
            zoom + 0.25
          );

        applyZoom();

      }


      if (event.key === "-") {

        zoom =
          Math.max(
            MIN_ZOOM,
            zoom - 0.25
          );

        applyZoom();

      }

    }
  );


  /*
    Mouse wheel zoom over certificate
  */

  imageScroll?.addEventListener(
    "wheel",
    event => {

      if (!modal.classList.contains("open")) {
        return;
      }

      if (!event.ctrlKey) {
        return;
      }

      event.preventDefault();


      if (event.deltaY < 0) {

        zoom =
          Math.min(
            MAX_ZOOM,
            zoom + 0.1
          );

      } else {

        zoom =
          Math.max(
            MIN_ZOOM,
            zoom - 0.1
          );

      }


      applyZoom();

    },
    { passive: false }
  );


  /*
    Double-click certificate to zoom.
  */

  image.addEventListener(
    "dblclick",
    () => {

      if (zoom === 1) {

        zoom = 2;

      } else {

        zoom = 1;

      }

      applyZoom();

    }
  );

}


/* =========================================================
   BACK TO TOP
========================================================= */

function initBackToTop() {

  const button =
    document.getElementById("backTop");


  if (!button) {
    return;
  }


  window.addEventListener(
    "scroll",
    () => {

      button.classList.toggle(
        "show",
        window.scrollY > 600
      );

    },
    { passive: true }
  );


  button.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}