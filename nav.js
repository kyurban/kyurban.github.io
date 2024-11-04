const navbarToggle = document.getElementById('navbar-toggle');
const nav = document.querySelector('nav');

navbarToggle.addEventListener('click', () => {
    nav.classList.toggle('show-nav');
});