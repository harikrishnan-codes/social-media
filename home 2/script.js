const trigger = document.getElementById('menu-trigger');
const mobileMenu = document.getElementById('mobile-menu');
const body = document.body;

trigger.addEventListener('click', () => {
    // Toggle Hamburger Icon Animation
    trigger.classList.toggle('open');
    
    // Toggle Menu Slide-in
    mobileMenu.classList.toggle('active');
    
    // Lock/Unlock Body Scroll
    if (mobileMenu.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// Close menu if a link is clicked
document.querySelectorAll('.m-link').forEach(link => {
    link.addEventListener('click', () => {
        trigger.classList.remove('open');
        mobileMenu.classList.remove('active');
        body.style.overflow = 'auto';
    });
});