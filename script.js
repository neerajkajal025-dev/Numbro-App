// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // --- Hero Animations ---
    const heroTl = gsap.timeline();

    heroTl.from('#hero-text h1', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    })
        .from('#hero-text p', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('#hero-text .btn-primary, #hero-text a:not(.btn-primary)', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        }, '-=0.4')
        .from('#hero-image', {
            scale: 0.8,
            opacity: 0,
            duration: 1.2,
            ease: 'expo.out'
        }, '-=1');

    // --- Section Header Reveals ---
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const header = section.querySelector('h2');
        const content = section.querySelectorAll('p, .feature-card, .showcase-item');

        if (header) {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out'
            });
        }

        if (content.length > 0) {
            gsap.from(content, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power2.out',
                clearProps: "opacity,transform" // Ensure properties are cleared after animation
            });
        }
    });

    // --- Sticky Download Button Logic ---
    // Button is always visible as requested.
    const stickyBtn = document.getElementById('sticky-download');

    // --- Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });

        if (closeMenu) {
            closeMenu.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        }

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });
    }

    // --- Navbar Scroll Effect ---
    window.addEventListener('scroll', () => {
        const navContainer = document.querySelector('nav > div');
        if (window.scrollY > 50) {
            navContainer.classList.add('shadow-lg', 'bg-white/90');
        } else {
            navContainer.classList.remove('shadow-lg', 'bg-white/90');
        }
    });

    // --- Voice Wave Animation Randomizer ---
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach(bar => {
        const duration = 0.5 + Math.random() * 1;
        bar.style.animationDuration = `${duration}s`;
    });
});
