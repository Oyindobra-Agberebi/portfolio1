



let closeMenu = document.getElementById('close');

let openMenu = document.getElementById('open');

let navLinks = document.getElementById('nav-links');

openMenu.addEventListener('click', function () {
    navLinks.style.right = '0';
})

closeMenu.addEventListener('click', function () {
    navLinks.style.right = '-100%';
})


