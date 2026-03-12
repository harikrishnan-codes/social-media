const menuTrigger = document.getElementById('menu-trigger');
const navMenu = document.getElementById('nav-menu');
const body = document.body;

menuTrigger.addEventListener('click', () => {
    // Toggle active classes
    menuTrigger.classList.toggle('active');
    navMenu.classList.toggle('active');

    // Prevent background scrolling
    if (navMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuTrigger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = 'auto';
    });
});






// dropdown js

document.addEventListener("DOMContentLoaded", function () {

    const arrow = document.querySelector(".dropdown-arrow");
    const dropdown = document.querySelector(".dropdown");

    arrow.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("show");
    });

});


document.addEventListener("click", function () {
    dropdown.classList.remove("show");
});








document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('[data-depth]');
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;

    cards.forEach(card => {
        const depth = card.getAttribute('data-depth');
        const moveX = x * depth;
        const moveY = y * depth;
        card.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    });
});










const revealItems = document.querySelectorAll('.reveal-item');
const morphIcon = document.getElementById('morph-icon');
const morphCard = document.getElementById('morph-display');

const icons = {
    'feat-1': 'fa-calendar-alt',
    'feat-2': 'fa-magic',
    'feat-3': 'fa-wallet'
};

revealItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // 1. Update Active State
        revealItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // 2. Change Icon with Animation
        const target = item.getAttribute('data-target');
        morphIcon.style.opacity = '0';
        morphIcon.style.transform = 'scale(0.5)';

        setTimeout(() => {
            morphIcon.className = `fas ${icons[target]}`;
            morphIcon.style.opacity = '1';
            morphIcon.style.transform = 'scale(1)';
        }, 200);

        // 3. Card Bounce
        morphCard.style.transform = 'rotateY(10deg) scale(1.05)';
        setTimeout(() => {
            morphCard.style.transform = 'rotateY(0deg) scale(1)';
        }, 400);
    });
});








const magneticBtn = document.getElementById('magnetic-btn');

document.addEventListener('mousemove', (e) => {
    const bound = magneticBtn.getBoundingClientRect();
    const anchorX = bound.left + bound.width / 2;
    const anchorY = bound.top + bound.height / 2;

    const dist = Math.hypot(e.clientX - anchorX, e.clientY - anchorY);

    if (dist < 150) {
        const moveX = (e.clientX - anchorX) * 0.4;
        const moveY = (e.clientY - anchorY) * 0.4;
        magneticBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    } else {
        magneticBtn.style.transform = `translate(0px, 0px)`;
    }
});










const observerOptions = {
    threshold: 0.2
};

const roadmapObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.step-card').forEach(card => {
    roadmapObserver.observe(card);
});






const openBtn = document.getElementById('open-filter');
const closeBtn = document.getElementById('close-filter');
const drawer = document.getElementById('filter-drawer');
const backdrop = document.getElementById('filter-backdrop');

function toggleDrawer() {
    drawer.classList.toggle('open');
    backdrop.classList.toggle('active'); // Add a CSS class for the backdrop opacity
    
    // Smooth body lock
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : 'auto';
}

openBtn.addEventListener('click', toggleDrawer);
closeBtn.addEventListener('click', toggleDrawer);






const scrollWrapper = document.getElementById('testi-scroll');
const dots = document.querySelectorAll('.dot');

scrollWrapper.addEventListener('scroll', () => {
    const scrollLeft = scrollWrapper.scrollLeft;
    const cardWidth = scrollWrapper.querySelector('.testi-card').clientWidth + 30;
    const activeIndex = Math.round(scrollLeft / cardWidth);

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
});






document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parent = trigger.parentElement;
        
        // Close other items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== parent) item.classList.remove('active');
        });

        // Toggle current item
        parent.classList.toggle('active');
    });
});










