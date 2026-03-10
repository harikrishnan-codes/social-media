// hamburger js

const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const dropdown = document.querySelector('.dropdown');

 mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
     const bars = document.querySelectorAll('.bar');
    mobileMenuBtn.classList.toggle('is-active');
});

 dropdown.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
        dropdown.classList.toggle('active');
    }
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








window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.reveal-item');
    const phoneImg = document.getElementById('phone-img');
    
     const images = [
        "./assets/img 1.webp",
        "./assets/img 3.webp",
        "./assets/img 2.webp"
    ];

    items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
         if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            phoneImg.src = images[index];
            item.style.opacity = "1";
        } else {
            item.style.opacity = "0.3";  
        }
    });
});













document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
         document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

         faqItem.classList.toggle('active');
    });
});


