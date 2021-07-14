// Side menu

let openButton = document.querySelector("#menu-trigger");
let closeButton = document.querySelector("#menu-close");
let menu = document.querySelector("#side-menu");
openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);
function toggleMenu() {
    menu.classList.toggle("show-menu");
};

// Sticky Navbar
window.onscroll = function() {myFunction()};
var navbar = document.querySelector(".nav-header");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  };

// Get More Information Form

var formInput = document.getElementById("more-info-form");
formInput.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("full-name").value;
    name.trim().toLowerCase();
    let email = document.getElementById("email").value;
    email.trim().toLowerCase();
    let phone = document.getElementById("phone").value;
    phone.trim().toLowerCase();
    let message = document.getElementById("message").value;
    message.trim().toLowerCase();
});

// Smooth Anchor Scrolling

var $root = $('html, body');
$('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 1000, function() {
        window.location.hash = href;
    });
    return false;
});

// Modal Mouseout

const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;
    if (shouldShowExitIntent) {
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.exit-intent-popup').classList.add('visible');
    }
};

let close = document.querySelector(".close");
close.addEventListener("click", buttonClose);
function buttonClose (){
    console.log('clicked');
    document.querySelector('.exit-intent-popup').classList.remove('visible');
};

let rootModal = document.querySelector(".modalRoot");
rootModal.addEventListener("click", buttonClose);
const exit = e => {
    console.log(e.target.className);
    const shouldExit =
        e.keyCode === 27;
    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};

setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
}, 10_000);