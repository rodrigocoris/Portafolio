// Animación al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach((section) => {
    observer.observe(section);
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle del menú móvil
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        if (sidebar.style.transform === 'translateX(0px)') {
            sidebar.style.transform = 'translateX(-250px)';
        } else {
            sidebar.style.transform = 'translateX(0px)';
        }
    });
});