(function () {
    'use strict';

    /* Scroll-spy: highlight active nav link */
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section[id]');

    if (navLinks.length && sections.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                    });
                }
            });
        }, { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 });

        sections.forEach((s) => observer.observe(s));
    }

    /* Image carousel: auto-rotate multiple .project-media images every 3s */
    document.querySelectorAll('.project-media').forEach((container) => {
        const images = container.querySelectorAll('img');
        if (images.length <= 1) return;

        let current = 0;
        images.forEach((img, i) => {
            img.style.opacity = i === 0 ? '1' : '0';
            img.style.zIndex = i === 0 ? '10' : '0';
        });

        setInterval(() => {
            images[current].style.opacity = '0';
            images[current].style.zIndex = '0';
            current = (current + 1) % images.length;
            images[current].style.opacity = '1';
            images[current].style.zIndex = '10';
        }, 3000);
    });

    /* Random background: adds .bg-1, .bg-2, or .bg-3 to <body> */
    document.body.classList.add(`bg-${Math.floor(Math.random() * 3) + 1}`);

})();