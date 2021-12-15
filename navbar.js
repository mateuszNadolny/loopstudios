// this script is responsible for navbar

const menu_btn = document.querySelector('.header-toggle');
const close_btn = document.querySelector('.close-icon');
const navbar = document.querySelector('.navbar-ul');
const visibility = navbar.getAttribute('data-visible');

const navbarAnchors = document.querySelectorAll('.nav-anchor');

menu_btn.addEventListener('click', () => {
    if (visibility === 'false') {
        navbar.setAttribute('data-visible', true);
    }
});

close_btn.addEventListener('click', () => {
    if (visibility === 'false') {
        navbar.setAttribute('data-visible', false);
    }
});

for(let i = 0; i < navbarAnchors.length; i++) {
    navbarAnchors[i].addEventListener('click', () => {
        if (visibility === 'false') {
            navbar.setAttribute('data-visible', false);
        }
    });
};



