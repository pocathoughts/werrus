(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  $('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  $('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

/*
$(window).scroll(function () {
    var y = $(window).scrollTop(),
        x = $('.animated').offset().top - 600;
    if (y > x) {
        $('.animated').addClass('fadeInUp').removeClass('fadeOutDown');
    } 
});
*/

/*
var waypoints = $('#handler-first').waypoint(function(direction) {
  alert(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '60%'
})*/

if ( $(window).width() > 992) {      
  var waypoints = $('.header-fade').waypoint(function(direction) {
      $('.header-fade').addClass('fade-effect-large');
    }, {
      offset: '80%'
    }) 
} 
else {
  var waypoints = $('.header-fade').waypoint(function(direction) {
    $('.header-fade').addClass('fade-effect-small');
    }, {
      offset: '90%'
    })
}


var waypoints = $('.fade-in-effect').waypoint(function(direction) {
  $('.fade-in-effect').addClass('fadein-1');
}, {
  offset: '100%'
})

var waypoints = $('.slide-left-effect').waypoint(function(direction) {
  $('.slide-left-effect').addClass('slideleft');
}, {
  offset: '80%'
})


var waypoints = $('.slide-right-effect').waypoint(function(direction) {
  $('.slide-right-effect').addClass('slideright');
}, {
  offset: '80%'
})


if ( $(window).width() < 992) {      
  var waypoints = $('.optional-fade').waypoint(function(direction) {
      $('.optional-fade').addClass('fade-effect');
    }, {
      offset: '70%'
    }) 
} 


var waypoints = $('.header-left').waypoint(function(direction) {
  $('.header-left').addClass('headerslideright');
}, {
  offset: '40%'
})

var waypoints = $('.header-up').waypoint(function(direction) {
  $('.header-up').addClass('headerslideup');
}, {
  offset: '70%'
})


var waypoints = $('.fade').waypoint(function(direction) {
  $('.fade').addClass('fade-effect');
}, {
  offset: '50%'
})

var waypoints = $('.fade-small').waypoint(function(direction) {
  $('.fade-small').addClass('fade-small-1');
}, {
  offset: '80%'
}) 

var waypoints = $('.fade1').waypoint(function(direction) {
  $('.fade1').addClass('fadein-1');
}, {
  offset: '80%'
})

var waypoints = $('.fade2').waypoint(function(direction) {
  $('.fade2').addClass('fadein-2');
}, {
  offset: '80%'
})

var waypoints = $('.fade3').waypoint(function(direction) {
  $('.fade3').addClass('fadein-3');
}, {
  offset: '80%'
})
