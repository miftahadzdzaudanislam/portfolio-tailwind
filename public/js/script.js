// Navbar-fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toAtas = document.querySelector("#to-atas");

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toAtas.classList.remove('hidden');
        toAtas.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toAtas.classList.add('hidden');
        toAtas.classList.remove('flex');
    }
};

// Hamburger
const hamburg = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburg.addEventListener('click', function(){
    hamburg.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// klik diluar hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburg && e.target != navMenu){
        hamburg.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// dark mode toggle
const darkToggle = document.querySelector ('#dark-toggle');
const html = document.querySelector ('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme= 'light';
    }
})

// indahkan posisi dark-toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }