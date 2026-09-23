//Burger nav bar button event listener
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

btn?.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuOpenIcon.classList.toggle('hidden');
    menuCloseIcon.classList.toggle('hidden');
});

//Animate elements on page load
document.addEventListener("DOMContentLoaded", function () {
    var replacers = document.querySelectorAll('[data-replace]')
    for (var i = 0; i < replacers.length; i++) {
        let replaceClasses = JSON.parse(replacers[i].dataset.replace.replace(/'/g, '"'));
        Object.keys(replaceClasses).forEach(function (key) {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
        });
    }
})