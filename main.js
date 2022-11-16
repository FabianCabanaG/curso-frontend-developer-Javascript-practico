const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu'); 
var desktopMenuClass = desktopMenu.classList;

desktopMenu.some

function toggleDesktopMenu () {
    if (desktopMenuClass.contains("inactive")) {
        desktopMenu.classList.remove('inactive')
    } else {
        desktopMenu.classList.add('inactive')
    }
    
};

menuEmail.addEventListener('click',toggleDesktopMenu);