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

// Salon Classic cart and active category state
document.addEventListener('DOMContentLoaded', function() {
    const salonCart = new Map();
    const cartTitle = document.querySelector('.salon-cart-card h3');
    const cartLines = document.querySelector('.salon-cart-lines');
    const cartTotal = document.querySelector('.salon-cart-total');
    const cartTotalValue = document.querySelector('.salon-cart-total strong');

    function formatSalonPrice(value) {
        return '₹' + value.toLocaleString('en-IN');
    }

    function renderSalonCart() {
        if (!cartTitle || !cartLines || !cartTotal || !cartTotalValue) return;

        cartLines.innerHTML = '';
        let total = 0;

        salonCart.forEach(function(item) {
            total += item.price * item.quantity;
            const line = document.createElement('div');
            line.className = 'salon-cart-line';
           line.innerHTML = '<span>' + item.name + ' x ' + item.quantity + '</span>' + '<strong>' + formatSalonPrice(item.price * item.quantity) + '</strong>' + '<button class="remove-item" data-name="' + item.name + '">❌</button>';
            cartLines.appendChild(line);
            const removeBtn = line.querySelector('.remove-item');

removeBtn.addEventListener('click', function () {
    salonCart.delete(item.name);
    renderSalonCart();
});
        });

        if (salonCart.size === 0) {
            cartTitle.textContent = 'No items in your cart';
            cartTotal.classList.add('hidden');
            cartTotalValue.textContent = '₹0';
            return;
        }

        cartTitle.textContent = salonCart.size + ' item' + (salonCart.size > 1 ? 's' : '') + ' in your cart';
        cartTotal.classList.remove('hidden');
        cartTotalValue.textContent = formatSalonPrice(total);
    }

    document.querySelectorAll('.salon-add-btn').forEach(function(button) {

button.addEventListener('click', function() {

    const name = button.dataset.name;
    const price = Number(button.dataset.price);

    const existing =
        salonCart.get(name) ||
        { name: name, price: price, quantity: 0 };

    existing.quantity += 1;

    salonCart.set(name, existing);

    button.classList.add('added');
    button.textContent = 'Added';

    renderSalonCart();

});

});

const placeOrderBtn = document.getElementById("placeOrderBtn");

if(placeOrderBtn){

placeOrderBtn.addEventListener("click", function(){

    if(salonCart.size === 0){
        alert("Cart is empty");
        return;
    }

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("customerPhone").value;

    const address =
        document.getElementById("customerAddress").value;

    if(!name || !phone || !address){
        alert("Please enter Name, Phone and Address");
        return;
    }

    let message =
        "🌸 NEW SALON ORDER 🌸%0A%0A";

    message += "Name: " + name + "%0A";
    message += "Phone: " + phone + "%0A";
    message += "Address: " + address + "%0A%0A";

    let total = 0;

    salonCart.forEach(function(item){

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        message +=
            item.name +
            " x " +
            item.quantity +
            " = ₹" +
            subtotal +
            "%0A";

    });

    message +=
        "%0A💰 Total: ₹" +
        total;

    window.open(
        "https://wa.me/917489284535?text=" +
        encodeURIComponent(message),
        "_blank"
    );

});


}


    const categoryLinks = Array.from(document.querySelectorAll('.salon-category'));
    const sections = categoryLinks
        .map(function(link) { return document.querySelector(link.getAttribute('href')); })
        .filter(Boolean);

    if ('IntersectionObserver' in window && sections.length > 0) {
        const observer = new IntersectionObserver(function(entries) {
            const visible = entries
                .filter(function(entry) { return entry.isIntersecting; })
                .sort(function(a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];

            if (!visible) return;

            categoryLinks.forEach(function(link) {
                link.classList.toggle('active', link.getAttribute('href') === '#' + visible.target.id);
            });
        }, { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] });

        sections.forEach(function(section) {
            observer.observe(section);
        });
    }
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`🌸 New Contact Form Message

👤 Name: ${name}
📧 Email: ${email}

💬 Message:
${message}`;

    const phoneNumber = "917489284535";

    const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
});

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
