// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = navMenu.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// CTA Button - WhatsApp Action
const ctaButton = document.getElementById('ctaButton');
const phoneNumber = '0777331582';
const message = 'Hi LUUMone, I would like to inquire about your engineering services.';

ctaButton.addEventListener('click', () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Show success message
    const submitButton = contactForm.querySelector('.submit-button');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent! ✓';
    submitButton.style.backgroundColor = '#27ae60';
    
    // Reset form
    contactForm.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
    }, 3000);
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and stat items
document.querySelectorAll('.service-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form input validation
const contactInputs = contactForm.querySelectorAll('input, textarea');
contactInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.type === 'email') {
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value);
            if (input.value && !isValid) {
                input.style.borderColor = '#e74c3c';
            } else {
                input.style.borderColor = '';
            }
        }
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--secondary-color)';
        } else {
            link.style.color = '';
        }
    });
});

console.log('LUUMone landing page loaded successfully!');
