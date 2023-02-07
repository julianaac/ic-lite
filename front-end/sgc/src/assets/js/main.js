
(function ($) {

  "use strict";


  // Back to top button
  $(window).scroll(function () {
      if (a(this).scrollTop() > 300) {
          a('.back-to-top').fadeIn('slow');
      } else {
          a('.back-to-top').fadeOut('slow');
      }
  });


});

