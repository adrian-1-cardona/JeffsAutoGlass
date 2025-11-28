// Simple and reliable JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu functionality
    const mobileMenu = document.querySelector('.mobile-menu');
    const nav = document.querySelector('.nav');
    
    if (mobileMenu && nav) {
        mobileMenu.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.offsetTop;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            }
        });
    });

    // Fade-in animation observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Simple fade-in initialization
    setTimeout(function() {
        // Animate header elements immediately
        const headerElements = document.querySelectorAll('.header .fade-in');
        headerElements.forEach(function(element, index) {
            setTimeout(function() {
                element.classList.add('visible');
            }, index * 100);
        });

        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero .fade-in');
        heroElements.forEach(function(element, index) {
            setTimeout(function() {
                element.classList.add('visible');
            }, 500 + (index * 200));
        });

        // Set up observer for other elements
        const fadeElements = document.querySelectorAll('.fade-in:not(.header .fade-in):not(.hero .fade-in)');
        fadeElements.forEach(function(element) {
            observer.observe(element);
        });
        
    }, 100);

    // Phone call tracking
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Phone call initiated');
        });
    });

    // Email tracking
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            console.log('Email initiated');
        });
    });
    
});