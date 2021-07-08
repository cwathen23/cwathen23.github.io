// Side menu

let openButton = document.querySelector("#menu-trigger");
let closeButton = document.querySelector("#menu-close");
let menu = document.querySelector("#side-menu");

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("show-menu");
}