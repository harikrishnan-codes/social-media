const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const dropdown = document.querySelector('.dropdown');

// Toggle Mobile Menu
mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger to X (optional)
    const bars = document.querySelectorAll('.bar');
    mobileMenuBtn.classList.toggle('is-active');
});

// Mobile Dropdown Toggle
dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        dropdown.classList.toggle('active');
    }
});








window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.reveal-item');
    const phoneImg = document.getElementById('phone-img');
    
    // Images for each step
    const images = [
        "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556656793-062ff987b50d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512428559083-a401a30c4556?auto=format&fit=crop&w=800&q=80"
    ];

    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        // If the item is in the middle of the screen
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            phoneImg.src = images[index];
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0.3"; // Dim the non-active text
        }
    });
});








document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Close other items (Optional: remove this if you want multiple open)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        // Toggle current item
        faqItem.classList.toggle('active');
    });
});


