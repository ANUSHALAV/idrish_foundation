



// here nav bar animation code....
let nav = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        nav.classList.add("position-fixed", "top-0");
    } else {
        nav.classList.remove("position-fixed", "top-0");
    }
});



// here aos animation init method call...
AOS.init();

