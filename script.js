// Login and Signup Modal Functions
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('signupModal').style.display = 'none';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function openSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
    document.getElementById('loginModal').style.display = 'none';
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

function toggleModal() {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    
    if (loginModal.style.display === 'block') {
        closeLoginModal();
        openSignupModal();
    } else {
        closeSignupModal();
        openLoginModal();
    }
}

// Booking Modal Functions
function bookService(serviceName) {
    document.getElementById('serviceType').textContent = serviceName;
    document.getElementById('bookingModal').style.display = 'block';
}

function closeBookingModal() {
    document.getElementById('bookingModal').style.display = 'none';
}

// Scroll Functions
function scrollToServices() {
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const bookingModal = document.getElementById('bookingModal');
    
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (event.target === bookingModal) {
        bookingModal.style.display = 'none';
    }
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', function() {
    // Login form
    const loginForms = document.querySelectorAll('#loginModal form');
    if (loginForms.length > 0) {
        loginForms[0].addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login functionality will be connected to backend');
            this.reset();
            closeLoginModal();
        });
    }

    // Signup form
    const signupForms = document.querySelectorAll('#signupModal form');
    if (signupForms.length > 0) {
        signupForms[0].addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Sign up successful! You can now login.');
            this.reset();
            closeSignupModal();
        });
    }

    // Booking form
    const bookingForms = document.querySelectorAll('#bookingModal form');
    if (bookingForms.length > 0) {
        bookingForms[0].addEventListener('submit', function(e) {
            e.preventDefault();
            const serviceName = document.getElementById('serviceType').textContent;
            alert('Thank you for booking ' + serviceName + '! We will confirm shortly.');
            this.reset();
            closeBookingModal();
        });
    }

    // Contact form
    const contactForms = document.querySelectorAll('.contact-form');
    if (contactForms.length > 0) {
        contactForms[0].addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navButtons = document.querySelector('.nav-buttons');

    function closeMobileMenu() {
        if (!hamburger || !navMenu || !navButtons) return;
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        navButtons.classList.remove('open');
        document.body.classList.remove('menu-open');
    }

    if (hamburger && navMenu && navButtons) {
        hamburger.addEventListener('click', function() {
            const isOpen = navMenu.classList.toggle('open');
            navButtons.classList.toggle('open', isOpen);
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
            document.body.classList.toggle('menu-open', isOpen);
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu after clicking
                closeMobileMenu();
            }
        });
    });
});

// Responsive design for mobile menu
function handleResponsive() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navButtons = document.querySelector('.nav-buttons');

    if (!hamburger || !navMenu || !navButtons) return;

    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
        navButtons.classList.remove('open');
        document.body.classList.remove('menu-open');
    }
}

window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);

// Add active class to current nav item
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section) {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(l => l.style.color = 'var(--text-dark)');
                    link.style.color = 'var(--primary-color)';
                }
            }
        });
    });
});
