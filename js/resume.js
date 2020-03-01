particlesJS.load('particles-js', 'vendor/particles/particles.json', function() {});


function expandSection() {
  if($(window).width() < 992){
    for (var i = 0; i < 600; i++) {
      (function(i) {
        setTimeout(function() {
          window.dispatchEvent(new Event('resize'));
        }, 5 * i);
      })(i);
    }
  }
}


(function($) {
  "use strict"; // Start of use strict
  $('[data-toggle="tooltip"]').tooltip()
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 250, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

})(jQuery); // End of use strict

