// Navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        header.classList.remove('absolute')
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// Hamburger
const hamburg = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburg.addEventListener('click', function(){
    hamburg.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});