require("./scss/resume.scss");
require("particles.js")
import("jquery.easing")
import * as bootstrap from 'bootstrap'

particlesJS.load('particles-js', 'particles/particles.json', function() {});


//Enable Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Auto-collapse navbar on click
const scrollTriggerList = document.querySelectorAll('.js-scroll-trigger')
const navbar = document.querySelector('#navbarSupportedContent')
const navbar_bs =  bootstrap.Collapse.getOrCreateInstance(navbar,{toggle: false})
scrollTriggerList.forEach(function (scrollTriggerEl) {
    scrollTriggerEl.addEventListener('click', function () {
        //check if element is currently shown
        if (isNavbarShown) {
            navbar_bs.hide();
        }})})

function resizeEvent() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(function() {
            window.dispatchEvent(new Event('resize'));
        },  i)
    }
}
const navbarToggler = document.querySelector('.navbar-toggler')
navbarToggler.addEventListener('click', function () {
    navbar_bs.toggle();
})


navbar.addEventListener('hide.bs.collapse', function () {
    resizeEvent();
    isNavbarShown = false;
})

navbar.addEventListener('show.bs.collapse', function () {
    resizeEvent()
    isNavbarShown = true;

})
const profilePic = document.querySelector('.img-profile')
if (process.env.PROFILE !== undefined && process.env.PROFILE !== null) {
    profilePic.src = process.env.PROFILE
}else {
    profilePic.style.display = 'none';
}

//initialize navbar as hidden
let isNavbarShown = false;

