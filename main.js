// Navbar email
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 

const mobileMenu = document.querySelector('.mobile-menu'); 
const menuIcon = document.querySelector('.menuIcon'); 


const shoppingCart = document.querySelector('.navbar-shopping-cart'); 
const productAside = document.querySelector('.product-detail'); 



function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
    productAside.classList.add('inactive');
};

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
    productAside.classList.add('inactive');
};

function toggleProductAside () {
    productAside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');  
    desktopMenu.classList.add('inactive'); 
};

menuEmail.addEventListener('click',toggleDesktopMenu);
menuIcon.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleProductAside);