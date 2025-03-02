// GSAP and ScrollTrigger Setup
gsap.registerPlugin(ScrollTrigger);

// Header Animation
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Hero Animation
gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
});

gsap.from('.hero-emoji', {
    scale: 0.8,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.8
});

// Parallax Effect on Hero
gsap.to('.hero-emoji', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
});

// Product Card Animations
gsap.utils.toArray('.product-card').forEach(card => {
    gsap.from(card, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reset'
        }
    });

    card.addEventListener('click', () => {
        const emoji = card.querySelector('.product-emoji');
        gsap.to(emoji, {
            scale: emoji.style.transform === 'scale(1.2)' ? 1 : 1.2,
            duration: 0.5,
            ease: 'power2.inOut'
        });
    });
});

// Footer Animation
gsap.from('.footer', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 90%'
    }
});