// Navbar email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 

const mobileMenu = document.querySelector('.mobile-menu'); 
const menuIcon = document.querySelector('.menuIcon'); 

const shoppingCart = document.querySelector('.product-detal'); 



function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
};

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
};

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);