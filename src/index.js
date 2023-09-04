require("./scss/resume.scss");
require("particles.js")
import("jquery.easing")
import * as bootstrap from 'bootstrap'

particlesJS.load('particles-js', 'particles/particles.json', function () {
});


//Enable Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Auto-collapse navbar on click
const scrollTriggerList = document.querySelectorAll('.js-scroll-trigger')
const navbar = document.querySelector('#navbarSupportedContent')
const navbar_bs = bootstrap.Collapse.getOrCreateInstance(navbar, {toggle: false})
scrollTriggerList.forEach(function (scrollTriggerEl) {
    scrollTriggerEl.addEventListener('click', function () {
        //check if element is currently shown
        if (isNavbarShown) {
            navbar_bs.hide();
        }
    })
})

function resizeEvent() {
    for (let i = 0; i < 1000; i++) {
        setTimeout(function () {
            window.dispatchEvent(new Event('resize'));
        }, i)
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
} else {
    profilePic.style.display = 'none';
}

//initialize navbar as hidden
let isNavbarShown = false;


const getStoredTheme = () => localStorage.getItem('theme')
const setStoredTheme = theme => localStorage.setItem('theme', theme)

const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
        return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
const darkModeSwitch = document.getElementById('darkMode')
const darkModeButton = document.getElementById('dark-button')
const lightModeButton = document.getElementById('light-button')

const setTheme = theme => {
    const sunIcon = document.getElementById('sunIcon')
    const moonIcon = document.getElementById('moonIcon')

    if (theme === 'dark') {
        console.log('dark mode enabled')
        document.documentElement.setAttribute('data-bs-theme', 'dark')
        darkModeSwitch.checked = true
        sunIcon.classList.remove('active')
        moonIcon.classList.add('active')
        darkModeButton.style.display = 'block'
        lightModeButton.style.display = 'none'

    } else {
        console.log('light mode enabled')
        document.documentElement.setAttribute('data-bs-theme', theme)
        darkModeSwitch.checked = false
        sunIcon.classList.add('active')
        moonIcon.classList.remove('active')
        darkModeButton.style.display = 'none'
        lightModeButton.style.display = 'block'
    }
}

setTheme(getPreferredTheme())

const changeTheme = (theme) => {
    if (typeof theme !== 'string') {
        theme = darkModeSwitch.checked ? 'dark' : 'light'
    }
    console.log('theme changed to ' + theme)
    setTheme(theme)
    // setStoredTheme(theme)
}

darkModeSwitch.addEventListener('change', changeTheme)

darkModeButton.addEventListener('click', function () {
    changeTheme('light')
})

lightModeButton.addEventListener('click', function () {
    changeTheme('dark')
})

const topButton = document.getElementById("top-button");
window.onscroll = function () {
    scrollFunction();
};
const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

const backToTop = () => {
    window.scrollTo(0, 0)
}

// When the user clicks on the button, scroll to the top of the document
topButton.addEventListener("click", backToTop);





