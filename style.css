:root {
    --bg: #f4f1ea;
    --surface: #ffffff;
    --dark: #101010;
    --text: #111111;
    --muted: #6f6b64;
    --line: #d9d4ca;
    --accent: #c8ff00;
    --white: #ffffff;

    --radius: 22px;
    --max-width: 1240px;

    --font-main: "DM Sans", sans-serif;
    --font-display: "Space Grotesk", sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

button,
input,
textarea {
    font: inherit;
}

button {
    cursor: pointer;
}

.section {
    width: min(var(--max-width), 90%);
    margin: auto;
    padding: 120px 0;
}

.section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .18em;
    color: var(--muted);
}

h1,
h2,
h3 {
    font-family: var(--font-display);
    line-height: 1.05;
}

p {
    color: var(--muted);
}


/* PRELOADER */

#preloader {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: var(--dark);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s ease;
}

#preloader.hide {
    opacity: 0;
    visibility: hidden;
}

.loader {
    display: flex;
    gap: 8px;
}

.loader span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 1s infinite alternate;
}

.loader span:nth-child(2) {
    animation-delay: .15s;
}

.loader span:nth-child(3) {
    animation-delay: .3s;
}

@keyframes pulse {
    from {
        transform: translateY(0);
        opacity: .4;
    }

    to {
        transform: translateY(-12px);
        opacity: 1;
    }
}


/* NAVBAR */

.navbar {
    position: sticky;
    top: 0;
    z-index: 1000;

    min-height: 78px;

    padding: 0 5vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(244, 241, 234, .93);
    backdrop-filter: blur(16px);

    border-bottom: 1px solid rgba(0,0,0,.08);
}

.logo {
    width: 44px;
    height: 44px;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: var(--dark);
    color: var(--accent);

    font-family: var(--font-display);
    font-weight: 700;
}

.navbar nav {
    display: flex;
    gap: 30px;
}

.navbar nav a {
    font-size: 14px;
    font-weight: 600;
    color: var(--muted);
}

.navbar nav a:hover,
.navbar nav a.active {
    color: var(--text);
}

.menu-btn {
    display: none;

    width: 42px;
    height: 42px;

    border: 1px solid var(--line);
    border-radius: 50%;

    background: transparent;
}


/* HERO */

.hero {
    min-height: calc(100vh - 78px);

    display: grid;
    grid-template-columns: 1.15fr .85fr;

    align-items: center;
    gap: 80px;
}

.eyebrow {
    margin-bottom: 30px;
    font-size: 14px;
    font-weight: 600;
}

.hero h1 {
    font-size: clamp(55px, 8vw, 105px);
    letter-spacing: -.065em;
}

.hero h1 span {
    display: block;
    color: var(--muted);
}

.hero-description {
    max-width: 680px;
    margin-top: 35px;
    font-size: 18px;
}

.hero-stats {
    display: flex;
    gap: 50px;
    margin-top: 45px;
}

.hero-stats div {
    display: flex;
    flex-direction: column;
}

.hero-stats strong {
    font-family: var(--font-display);
    font-size: 40px;
}

.hero-stats span {
    color: var(--muted);
    font-size: 13px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-top: 40px;
}

.btn {
    padding: 15px 24px;
    border-radius: 999px;

    display: inline-flex;
    align-items: center;
    gap: 10px;

    font-weight: 700;

    transition: .25s ease;
}

.btn.primary {
    background: var(--dark);
    color: white;
}

.btn.primary:hover {
    transform: translateY(-3px);
}

.btn.secondary {
    border: 1px solid var(--line);
}

.btn.secondary:hover {
    background: white;
}


/* HERO VISUAL */

.hero-visual {
    display: flex;
    justify-content: center;
}

.portrait-card {
    position: relative;

    width: min(400px, 100%);
    aspect-ratio: .82;

    background: var(--dark);

    border-radius: 220px 220px 25px 25px;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
}

.portrait-placeholder {
    width: 70%;
    height: 70%;

    display: grid;
    place-items: center;

    border-radius: 50%;
    border: 1px solid rgba(255,255,255,.2);

    color: var(--accent);

    font-family: var(--font-display);
    font-size: 80px;
    font-weight: 700;
}

.floating-card {
    position: absolute;

    right: 18px;
    bottom: 25px;

    padding: 14px 18px;

    display: flex;
    align-items: center;
    gap: 12px;

    background: var(--accent);
    color: var(--dark);

    border-radius: 15px;

    box-shadow: 0 15px 40px rgba(0,0,0,.25);
}

.floating-card div {
    display: flex;
    flex-direction: column;
}

.floating-card small {
    opacity: .65;
}


/* ABOUT */

.about-grid {
    margin-top: 55px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
}

.about h2 {
    font-size: clamp(40px, 5vw, 70px);
}

.about-text {
    display: flex;
    flex-direction: column;
    gap: 25px;
    font-size: 18px;
}


/* FOCUS */

.focus {
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;

    background: var(--dark);
    color: white;
}

.section-heading {
    max-width: 900px;
}

.section-heading > span {
    color: var(--accent);
    font-size: 12px;
    letter-spacing: .18em;
    font-weight: 700;
}

.section-heading h2 {
    margin-top: 20px;
}

.focus-grid {
    max-width: var(--max-width);
    margin: 70px auto 0;

    display: grid;
    grid-template-columns: repeat(4, 1fr);

    border-top: 1px solid rgba(255,255,255,.16);
}

.focus-card {
    min-height: 310px;
    padding: 35px 25px;

    border-right: 1px solid rgba(255,255,255,.16);
}

.focus-card:last-child {
    border-right: 0;
}

.focus-card .number {
    color: var(--accent);
    font-size: 12px;
}

.focus-card i {
    display: block;
    margin-top: 80px;

    font-size: 30px;
    color: var(--accent);
}

.focus-card h3 {
    margin-top: 25px;
    font-size: 25px;
}

.focus-card p {
    margin-top: 15px;
    color: #aaa;
}


/* WORK */

.section-title-row {
    display: flex;
    justify-content: space-between;
    gap: 50px;

    margin-top: 30px;
    margin-bottom: 60px;
}

.section-title-row p {
    max-width: 420px;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

.project-card {
    background: white;

    border: 1px solid var(--line);
    border-radius: var(--radius);

    overflow: hidden;

    transition: .3s ease;
}

.project-card:hover {
    transform: translateY(-7px);
    box-shadow: 0 25px 60px rgba(0,0,0,.08);
}

.project-image {
    height: 270px;

    position: relative;

    display: grid;
    place-items: center;

    background:
        radial-gradient(circle at 50% 30%, #3b3b3b, #101010 65%);
}

.project-image i {
    color: var(--accent);
    font-size: 75px;
}

.project-image span {
    position: absolute;
    top: 22px;
    right: 25px;

    color: rgba(255,255,255,.45);
}

.project-content {
    padding: 30px;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
}

.project-tags span {
    padding: 6px 10px;

    background: #f1eee7;
    border-radius: 999px;

    font-size: 11px;
    font-weight: 600;
}

.project-content h3 {
    font-size: 28px;
}

.project-content p {
    margin-top: 15px;
}

.details-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;

    margin-top: 25px;

    border: 0;
    background: transparent;

    font-weight: 700;
}

.details-btn:hover {
    gap: 15px;
}


/* SERVICES */

.services {
    border-top: 1px solid var(--line);
}

.services-grid {
    margin-top: 55px;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;

    background: var(--line);
}

.service-card {
    min-height: 370px;
    padding: 35px;

    background: var(--bg);
}

.service-card > span {
    color: var(--muted);
    font-size: 12px;
}

.service-card h3 {
    margin-top: 70px;
    font-size: 27px;
}

.service-card p {
    margin-top: 18px;
}

.service-card ul {
    margin-top: 25px;
    list-style: none;
}

.service-card li {
    padding: 7px 0;
    color: var(--muted);
}

.service-card li::before {
    content: "→";
    margin-right: 8px;
}


/* SKILLS */

.skills-intro {
    margin-top: 45px;

    display: flex;
    justify-content: space-between;
    gap: 50px;
}

.skills-intro h2 {
    max-width: 600px;
}

.skills-intro p {
    max-width: 400px;
}

.skill-category {
    margin-top: 70px;
}

.skill-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 18px;

    border-bottom: 1px solid var(--line);
}

.skill-heading h3 {
    font-size: 26px;
}

.skill-heading span {
    color: var(--muted);
    font-size: 13px;
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 30px 60px;

    margin-top: 30px;
}

.skill-top {
    display: flex;
    justify-content: space-between;

    margin-bottom: 10px;

    font-size: 14px;
    font-weight: 600;
}

.skill-top strong {
    color: var(--muted);
}

.progress {
    height: 5px;

    overflow: hidden;

    background: #dedad2;
    border-radius: 999px;
}

.progress span {
    display: block;
    height: 100%;

    background: var(--dark);
    border-radius: inherit;
}


/* TIMELINE */

.timeline-list {
    position: relative;
    margin-top: 60px;
}

.timeline-list::before {
    content: "";

    position: absolute;

    left: 230px;
    top: 0;
    bottom: 0;

    width: 1px;

    background: var(--line);
}

.timeline-item {
    position: relative;

    display: grid;
    grid-template-columns: 200px 30px 1fr;

    gap: 20px;

    padding-bottom: 70px;
}

.timeline-date {
    color: var(--muted);
    font-size: 13px;
    text-align: right;
}

.timeline-dot {
    width: 10px;
    height: 10px;

    margin-top: 4px;

    border-radius: 50%;

    background: var(--accent);

    border: 3px solid var(--bg);

    z-index: 2;
}

.timeline-content h3 {
    font-size: 29px;
}

.timeline-content h4 {
    margin-top: 10px;

    color: var(--muted);

    font-size: 14px;
    font-weight: 500;
}

.timeline-content p {
    max-width: 700px;
    margin-top: 18px;
}


/* EDUCATION */

.education-card {
    margin-top: 55px;

    display: grid;
    grid-template-columns: 200px 1fr;

    gap: 50px;

    padding: 45px;

    background: var(--dark);
    color: white;

    border-radius: var(--radius);
}

.education-year {
    color: var(--accent);
    font-weight: 700;
}

.education-card h2 {
    font-size: clamp(30px, 4vw, 50px);
}

.education-card p {
    margin-top: 20px;
}

.education-card span {
    display: block;
    margin-top: 5px;
    color: #777;
}


/* CREDENTIALS */

.credential-grid {
    margin-top: 55px;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
}

.credential-card {
    min-height: 220px;
    padding: 30px;

    border: 1px solid var(--line);
    border-radius: 18px;

    display: flex;
    flex-direction: column;
}

.credential-card > span {
    font-size: 12px;
    color: var(--muted);
}

.credential-card h3 {
    margin-top: auto;
    font-size: 25px;
}

.credential-btn {
    margin-top: 20px;
    align-self: flex-start;

    padding: 9px 16px;

    border: 0;
    border-radius: 999px;

    background: var(--dark);
    color: white;

    font-size: 12px;
}


/* TRUST */

.trust {
    width: 100%;

    padding-left: 5%;
    padding-right: 5%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    gap: 50px;

    background: var(--accent);
}

.trust-content h2 {
    margin-top: 20px;
}

.trust-content h2 span {
    display: block;
    color: rgba(0,0,0,.55);
}

.trust-content p {
    margin-top: 20px;
    color: rgba(0,0,0,.65);
}

.trust-stats {
    min-width: 220px;

    display: grid;
    grid-template-columns: auto 1fr;

    align-items: end;

    column-gap: 10px;
}

.trust-stats strong {
    font-family: var(--font-display);
    font-size: 50px;
}

.trust-stats span {
    color: rgba(0,0,0,.6);
}


/* CONTACT */

.contact-heading {
    max-width: 850px;
}

.contact-heading h2 {
    margin-top: 25px;
}

.contact-heading h2 span {
    color: var(--muted);
}

.contact-heading p {
    max-width: 700px;
    margin-top: 25px;
    font-size: 18px;
}

.contact-grid {
    margin-top: 70px;

    display: grid;
    grid-template-columns: 1.25fr .75fr;

    gap: 50px;
}

.contact-form-card {
    padding: 40px;

    background: white;

    border: 1px solid var(--line);
    border-radius: var(--radius);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 9px;

    margin-bottom: 22px;
}

.form-group label {
    font-size: 12px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: .08em;
}

.form-group input,
.form-group textarea {
    width: 100%;

    padding: 15px 17px;

    border: 1px solid var(--line);
    border-radius: 12px;

    background: var(--bg);

    outline: none;

    transition: .25s ease;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--dark);

    box-shadow: 0 0 0 3px rgba(200,255,0,.2);
}

.form-group textarea {
    resize: vertical;
    min-height: 150px;
}

.send-btn {
    width: 100%;

    padding: 17px 25px;

    border: 0;
    border-radius: 999px;

    background: var(--dark);
    color: white;

    font-weight: 700;

    transition: .25s ease;
}

.send-btn:hover {
    transform: translateY(-2px);
}

.send-btn:disabled {
    opacity: .6;
    cursor: not-allowed;
}

#sendLoading {
    display: none;
}

#formStatus {
    display: none;

    margin-top: 18px;
    padding: 13px 16px;

    border-radius: 12px;

    font-size: 14px;
    font-weight: 600;
}

#formStatus.success {
    display: block;

    background: rgba(200,255,0,.25);
    color: #465900;
}

#formStatus.error {
    display: block;

    background: #ffe7e7;
    color: #a50000;
}

.contact-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.contact-detail {
    padding: 25px;

    display: flex;
    align-items: flex-start;
    gap: 18px;

    background: white;

    border: 1px solid var(--line);
    border-radius: 18px;
}

.contact-detail > span {
    width: 42px;
    height: 42px;

    flex-shrink: 0;

    display: grid;
    place-items: center;

    border-radius: 50%;

    background: var(--dark);
    color: var(--accent);
}

.contact-detail div {
    display: flex;
    flex-direction: column;
}

.contact-detail small {
    color: var(--muted);
}

.contact-detail a,
.contact-detail div > span {
    font-weight: 600;
    word-break: break-word;
}

.contact-detail a:hover {
    text-decoration: underline;
}


/* MODAL */

.modal {
    position: fixed;
    inset: 0;

    z-index: 5000;

    display: none;

    align-items: center;
    justify-content: center;

    padding: 25px;
}

.modal.active {
    display: flex;
}

.modal-overlay {
    position: absolute;
    inset: 0;

    background: rgba(0,0,0,.72);
    backdrop-filter: blur(7px);
}

.modal-box {
    position: relative;
    z-index: 2;

    width: min(600px, 100%);

    padding: 45px;

    border-radius: 24px;

    background: var(--bg);

    animation: modalIn .3s ease;
}

@keyframes modalIn {
    from {
        opacity: 0;
        transform: translateY(25px) scale(.97);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

.modal-close {
    position: absolute;

    top: 18px;
    right: 18px;

    width: 38px;
    height: 38px;

    border: 1px solid var(--line);
    border-radius: 50%;

    background: transparent;
}

.modal-label {
    font-size: 11px;
    letter-spacing: .15em;
    font-weight: 700;
    color: var(--muted);
}

.modal-box h2 {
    margin-top: 18px;
    font-size: 45px;
}

.modal-box p {
    margin-top: 20px;
    font-size: 17px;
}


/* FOOTER */

footer {
    padding: 80px 5vw 30px;

    background: var(--dark);
    color: white;
}

.footer-title {
    font-family: var(--font-display);

    font-size: clamp(45px, 8vw, 110px);

    line-height: .9;

    letter-spacing: -.06em;
}

.footer-title span {
    display: block;
    color: #555;
}

.footer-links {
    display: flex;
    gap: 25px;
    margin-top: 70px;
}

.footer-links a {
    color: #aaa;
}

.footer-links a:hover {
    color: var(--accent);
}

footer p {
    margin-top: 70px;
    color: #555;
    font-size: 13px;
}


/* RESPONSIVE */

@media (max-width: 1050px) {

    .hero {
        grid-template-columns: 1fr;
    }

    .hero-visual {
        justify-content: flex-start;
    }

    .focus-grid,
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .focus-card:nth-child(2) {
        border-right: 0;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }

    .credential-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .contact-grid {
        grid-template-columns: 1fr;
    }

}


@media (max-width: 760px) {

    .section {
        padding: 80px 0;
    }

    .navbar {
        padding: 0 5%;
    }

    .menu-btn {
        display: grid;
        place-items: center;
    }

    .navbar nav {
        position: absolute;

        top: 78px;
        left: 0;
        right: 0;

        display: none;

        flex-direction: column;

        padding: 20px 5% 25px;

        background: var(--bg);

        border-bottom: 1px solid var(--line);
    }

    .navbar nav.active {
        display: flex;
    }

    .navbar nav a {
        padding: 12px 0;
    }

    .hero h1 {
        font-size: clamp(50px, 15vw, 80px);
    }

    .hero-stats {
        gap: 25px;
        flex-wrap: wrap;
    }

    .hero-stats strong {
        font-size: 32px;
    }

    .hero-buttons {
        flex-wrap: wrap;
    }

    .about-grid {
        grid-template-columns: 1fr;
        gap: 35px;
    }

    .focus-grid,
    .services-grid {
        grid-template-columns: 1fr;
    }

    .focus-card {
        border-right: 0;
        border-bottom: 1px solid rgba(255,255,255,.16);
    }

    .focus-card:last-child {
        border-bottom: 0;
    }

    .section-title-row,
    .skills-intro {
        flex-direction: column;
    }

    .skills-list {
        grid-template-columns: 1fr;
    }

    .timeline-list::before {
        left: 6px;
    }

    .timeline-item {
        grid-template-columns: 20px 1fr;
        gap: 15px;
    }

    .timeline-date {
        grid-column: 2;
        text-align: left;
        order: -1;
    }

    .timeline-dot {
        grid-column: 1;
        grid-row: 2;
    }

    .timeline-content {
        grid-column: 2;
    }

    .education-card {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 30px;
    }

    .credential-grid {
        grid-template-columns: 1fr;
    }

    .trust {
        flex-direction: column;
        align-items: flex-start;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .contact-form-card {
        padding: 25px;
    }

    .modal-box {
        padding: 30px;
    }

    .modal-box h2 {
        font-size: 36px;
    }

}


@media (max-width: 450px) {

    .hero-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .hero-stats strong {
        font-size: 27px;
    }

    .hero-stats span {
        font-size: 11px;
    }

    .portrait-card {
        width: 100%;
    }

    .project-content {
        padding: 23px;
    }

}