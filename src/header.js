const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

btn?.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuOpenIcon.classList.toggle('hidden');
    menuCloseIcon.classList.toggle('hidden');
});
