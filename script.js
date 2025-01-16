function toggleMenu(){
    const MENU = document.querySelector('.menu-links');
    const ICON = document.querySelector('.burger-icon');

    MENU.classList.toggle('open');
    ICON.classList.toggle('open');
}