const navbarToggle = document.getElementById('navbar-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle navigation visibility
navbarToggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
});

// Change color of clicked navigation link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});
