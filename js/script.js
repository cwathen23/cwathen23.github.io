// Side menu

let openButton = document.querySelector("#menu-trigger");
let closeButton = document.querySelector("#menu-close");
let menu = document.querySelector("#side-menu");

openButton.addEventListener("click", toggleMenu);
closeButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("show-menu");
};

//Get More Information Form

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
})

//Smooth Anchor Scrolling

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

const exit = e => {
    console.log(e.target.className)
    const shouldExit =
        [...e.target.classList].includes('exit-intent-popup') || 
        e.target.className === 'close' ||
        e.keyCode === 27;

    if (shouldExit) {
        document.querySelector('.exit-intent-popup').classList.remove('visible');
    }
};

setTimeout(() => {
    document.addEventListener('mouseout', mouseEvent);
    document.addEventListener('keydown', exit);
}, 10_000);

