// script.js – Bistro Aldo global interactions

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSectionReveal();
    initParallaxImage();
    initTiltCards();
    initTestimonialsSlider();
    initReserveButtons();
    initSeasonalBanner();
    initLanguageModal(); // NEW
});

/* ===== NAVBAR + HAMBURGER ===== */
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

/* ===== LANGUAGE MODAL + TRANSLATION ===== */
function initLanguageModal() {
    const openBtn = document.getElementById('open-lang-modal');
    const modal = document.getElementById('lang-modal');
    if (!openBtn || !modal || !window.BISTRO_TRANSLATIONS) return;

    const closeBtn = modal.querySelector('.lang-close');
    const options = modal.querySelectorAll('.lang-option');
    const currentLabel = document.getElementById('current-lang-label');

    const stored = localStorage.getItem('bistroLang');
    const defaultLang = stored && window.BISTRO_TRANSLATIONS[stored] ? stored : 'en';

    // Apply saved/default language on load
    setLanguage(defaultLang, false);

    function open() {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    }

    function close() {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    }

    function setLanguage(lang, persist = true) {
        if (!window.BISTRO_TRANSLATIONS[lang]) lang = 'en';

        if (persist) {
            localStorage.setItem('bistroLang', lang); // persists across pages
        }

        applyLanguage(lang);

        const meta = window.BISTRO_LANGS && window.BISTRO_LANGS[lang];
        if (currentLabel && meta) {
            currentLabel.textContent = `${meta.flag} ${meta.label}`;
        }
    }

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', e => {
        if (e.target === modal) close();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') close();
    });

    options.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);
            close();
        });
    });
}

// Updates all elements with data-i18n using the dictionary
function applyLanguage(lang) {
    const dict = window.BISTRO_TRANSLATIONS && window.BISTRO_TRANSLATIONS[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(node => {
        const key = node.getAttribute('data-i18n');
        if (dict[key]) {
            node.textContent = dict[key];
        }
    });
}

/* ===== REVEAL ON SCROLL ===== */
function initSectionReveal() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ===== PARALLAX IMAGE (ABOUT) ===== */
function initParallaxImage() {
    const img = document.querySelector('.parallax-img');
    if (!img) return;

    window.addEventListener('scroll', () => {
        const rect = img.getBoundingClientRect();
        const windowH = window.innerHeight || document.documentElement.clientHeight;
        const center = rect.top + rect.height / 2;
        const dist = center - windowH / 2;
        img.style.transform = `translateY(${dist * -0.08}px)`;
    });
}

/* ===== 3D TILT CARDS (SIGNATURE) ===== */
function initTiltCards() {
    const cards = document.querySelectorAll('.tilt-card');
    if (!cards.length) return;

    cards.forEach(card => {
        const height = card.clientHeight;
        const width = card.clientWidth;

        card.addEventListener('mousemove', e => {
            const xVal = e.layerX;
            const yVal = e.layerY;
            const yRotation = 10 * ((xVal - width / 2) / width);
            const xRotation = -10 * ((yVal - height / 2) / height);
            card.style.transform = `perspective(900px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        });
    });
}

/* ===== TESTIMONIALS SLIDER ===== */
function initTestimonialsSlider() {
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonial-card');
    if (!track || !cards.length) return;

    let index = 0;

    function updateSlide() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    const prev = document.querySelector('.testimonial-nav.prev');
    const next = document.querySelector('.testimonial-nav.next');

    if (prev && next) {
        prev.addEventListener('click', () => {
            index = (index - 1 + cards.length) % cards.length;
            updateSlide();
        });

        next.addEventListener('click', () => {
            index = (index + 1) % cards.length;
            updateSlide();
        });
    }

    setInterval(() => {
        index = (index + 1) % cards.length;
        updateSlide();
    }, 7000);
}

/* ===== RESERVE CTA + MODAL ===== */
function initReserveButtons() {
    const buttons = document.querySelectorAll('[data-reserve]');
    const overlay = document.getElementById('reserve-modal');
    if (!buttons.length || !overlay) return;

    const dialog = overlay.querySelector('.reserve-modal');
    const closeBtn = overlay.querySelector('.reserve-close');

    function open() {
        overlay.classList.add('open');
        overlay.setAttribute('aria-hidden', 'false');
    }
    function close() {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
    }

    buttons.forEach(btn => btn.addEventListener('click', open));
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', e => {
        if (e.target === overlay) close();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') close();
    });
}

/* ===== SEASONAL BANNER (DECEMBER ONLY) ===== */
function initSeasonalBanner() {
    const banner = document.getElementById('seasonal-banner');
    if (!banner) return;

    const now = new Date();
    const month = now.getMonth(); // 0 = Jan, 11 = Dec
    if (month === 11) {
        banner.style.display = 'block';
        banner.removeAttribute('aria-hidden');
    }
}

