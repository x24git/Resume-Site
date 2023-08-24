import("./scss/resume.scss");
import("particles.js")
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
console.log(navbar)
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

navbar.addEventListener('hide.bs.collapse', function () {
    resizeEvent();
    isNavbarShown = false;
})

navbar.addEventListener('show.bs.collapse', function () {
    resizeEvent()
    isNavbarShown = true;

})

//initialize navbar as hidden
let isNavbarShown = false;

