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

  // $('.counter-count').each(function () {
  //   $(this).prop('Counter',0).animate({
  //       Counter: $(this).text()
  //   }, {
  //       duration: 5000,
  //       easing: 'swing',
  //       step: function (now) {
  //           $(this).text(Math.ceil(now));
  //       }
  //   });
  // });

  // $('.Count').each(function () {
  //   var $this = $(this);
  //   jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
  //     duration: 1000,
  //     easing: 'swing',
  //     step: function () {
  //       $this.text(Math.ceil(this.Counter));
  //     }
  //   });
  // });

//   $('.counter-count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 4000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });

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

// var waypoints = $('.counter-count').waypoint(function(direction) {
//   $(this).prop('Counter',0).animate({
//           Counter: $(this).text()
//       }, {
//           duration: 5000,
//           easing: 'swing',
//           step: function (now) {
//               $(this).text(Math.ceil(now));
//           }
//       })
// }, {
//   offset: '50%'
// })

var waypoints = $('.counter-count').waypoint(function() {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  })
}, {
  offset: '50%'
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

var CountUp = function(target, startVal, endVal, decimals, duration, options) {

	var self = this;
	self.version = function () { return '1.9.3'; };
	
	// default options
	self.options = {
		useEasing: true, // toggle easing
		useGrouping: true, // 1,000,000 vs 1000000
		separator: ',', // character to use as a separator
		decimal: '.', // character to use as a decimal
		easingFn: easeOutExpo, // optional custom easing function, default is Robert Penner's easeOutExpo
		formattingFn: formatNumber, // optional custom formatting function, default is formatNumber above
		prefix: '', // optional text before the result
		suffix: '', // optional text after the result
		numerals: [] // optionally pass an array of custom numerals for 0-9
	};

	// extend default options with passed options object
	if (options && typeof options === 'object') {
		for (var key in self.options) {
			if (options.hasOwnProperty(key) && options[key] !== null) {
				self.options[key] = options[key];
			}
		}
	}

	if (self.options.separator === '') {
		self.options.useGrouping = false;
	}
	else {
		// ensure the separator is a string (formatNumber assumes this)
		self.options.separator = '' + self.options.separator;
	}

	// make sure requestAnimationFrame and cancelAnimationFrame are defined
	// polyfill for browsers without native support
	// by Opera engineer Erik Möller
	var lastTime = 0;
	var vendors = ['webkit', 'moz', 'ms', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}
	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
	}

	function formatNumber(num) {
		var neg = (num < 0),
        	x, x1, x2, x3, i, len;
		num = Math.abs(num).toFixed(self.decimals);
		num += '';
		x = num.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? self.options.decimal + x[1] : '';
		if (self.options.useGrouping) {
			x3 = '';
			for (i = 0, len = x1.length; i < len; ++i) {
				if (i !== 0 && ((i % 3) === 0)) {
					x3 = self.options.separator + x3;
				}
				x3 = x1[len - i - 1] + x3;
			}
			x1 = x3;
		}
		// optional numeral substitution
		if (self.options.numerals.length) {
			x1 = x1.replace(/[0-9]/g, function(w) {
				return self.options.numerals[+w];
			})
			x2 = x2.replace(/[0-9]/g, function(w) {
				return self.options.numerals[+w];
			})
		}
		return (neg ? '-' : '') + self.options.prefix + x1 + x2 + self.options.suffix;
	}
	// Robert Penner's easeOutExpo
	function easeOutExpo(t, b, c, d) {
		return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b;
	}
	function ensureNumber(n) {
		return (typeof n === 'number' && !isNaN(n));
	}

	self.initialize = function() { 
		if (self.initialized) return true;
		
		self.error = '';
		self.d = (typeof target === 'string') ? document.getElementById(target) : target;
		if (!self.d) { 
			self.error = '[CountUp] target is null or undefined'
			return false;
		}
		self.startVal = Number(startVal);
		self.endVal = Number(endVal);
		// error checks
		if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
			self.decimals = Math.max(0, decimals || 0);
			self.dec = Math.pow(10, self.decimals);
			self.duration = Number(duration) * 1000 || 2000;
			self.countDown = (self.startVal > self.endVal);
			self.frameVal = self.startVal;
			self.initialized = true;
			return true;
		}
		else {
			self.error = '[CountUp] startVal ('+startVal+') or endVal ('+endVal+') is not a number';
			return false;
		}
	};

	// Print value to target
	self.printValue = function(value) {
		var result = self.options.formattingFn(value);

		if (self.d.tagName === 'INPUT') {
			this.d.value = result;
		}
		else if (self.d.tagName === 'text' || self.d.tagName === 'tspan') {
			this.d.textContent = result;
		}
		else {
			this.d.innerHTML = result;
		}
	};

	self.count = function(timestamp) {

		if (!self.startTime) { self.startTime = timestamp; }

		self.timestamp = timestamp;
		var progress = timestamp - self.startTime;
		self.remaining = self.duration - progress;

		// to ease or not to ease
		if (self.options.useEasing) {
			if (self.countDown) {
				self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
			} else {
				self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
			}
		} else {
			if (self.countDown) {
				self.frameVal = self.startVal - ((self.startVal - self.endVal) * (progress / self.duration));
			} else {
				self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
			}
		}

		// don't go past endVal since progress can exceed duration in the last frame
		if (self.countDown) {
			self.frameVal = (self.frameVal < self.endVal) ? self.endVal : self.frameVal;
		} else {
			self.frameVal = (self.frameVal > self.endVal) ? self.endVal : self.frameVal;
		}

		// decimal
		self.frameVal = Math.round(self.frameVal*self.dec)/self.dec;

		// format and print value
		self.printValue(self.frameVal);

		// whether to continue
		if (progress < self.duration) {
			self.rAF = requestAnimationFrame(self.count);
		} else {
			if (self.callback) self.callback();
		}
	};
	// start your animation
	self.start = function(callback) {
		if (!self.initialize()) return;
		self.callback = callback;
		self.rAF = requestAnimationFrame(self.count);
	};
	// toggles pause/resume animation
	self.pauseResume = function() {
		if (!self.paused) {
			self.paused = true;
			cancelAnimationFrame(self.rAF);
		} else {
			self.paused = false;
			delete self.startTime;
			self.duration = self.remaining;
			self.startVal = self.frameVal;
			requestAnimationFrame(self.count);
		}
	};
	// reset to startVal so animation can be run again
	self.reset = function() {
		self.paused = false;
		delete self.startTime;
		self.initialized = false;
		if (self.initialize()) {
			cancelAnimationFrame(self.rAF);
			self.printValue(self.startVal);
		}
	};
	// pass a new endVal and start animation
	self.update = function (newEndVal) {
		if (!self.initialize()) return;
		newEndVal = Number(newEndVal);
		if (!ensureNumber(newEndVal)) {
			self.error = '[CountUp] update() - new endVal is not a number: '+newEndVal;
			return;
		}
		self.error = '';
		if (newEndVal === self.frameVal) return;
		cancelAnimationFrame(self.rAF);
		self.paused = false;
		delete self.startTime;
		self.startVal = self.frameVal;
		self.endVal = newEndVal;
		self.countDown = (self.startVal > self.endVal);
		self.rAF = requestAnimationFrame(self.count);
	};

	// format startVal on initialization
	if (self.initialize()) self.printValue(self.startVal);
};

var optionsNormal = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.',
    prefix : '',
    suffix : '' 
  }

  var optionsDollar = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.',
      prefix : '$ ',
      suffix : ' MM' 
    }

  var optionsPlus = {
      useEasing : true, 
      useGrouping : true, 
      separator : ',', 
      decimal : '.',
      prefix : '',
      suffix : ' +' 
    }

    var options = {
        useEasing : true, 
        useGrouping : true, 
        separator : ',', 
        decimal : '.',
        prefix : '',
        suffix : ' +' 
      }


  // count up variables
  // target, startVal, endVal, decimals, duration, options

  var scrollNum = document.getElementById("scroll-num");
  var scrollDemo = new CountUp(scrollNum, 0, 2015, 0, 2.5, options);

  var firstNum = document.getElementById("first-num");
  var firstScroll = new CountUp(firstNum, 0, 3, 0, 4.5, optionsNormal);

  var secondNum = document.getElementById("second-num");
  var secondScroll = new CountUp(secondNum, 0, 37.5, true, 4.5, optionsDollar);

  var thirdNum = document.getElementById("third-num");
  var thirdScroll = new CountUp(thirdNum, 0, 50, 0, 4.5, optionsPlus);

  var hoverNum = document.getElementById("hover-num");
  var hoverDemo = new CountUp(hoverNum, 0, 3000, 0, 2.5, options);
  
  jQuery('.first-counter').waypoint(
    function(direction){
      if(direction == "down") {
        firstScroll.start();
      }
    },
    { offset: '70%' }
  );

  jQuery('.second-counter').waypoint(
    function(direction){
      if(direction == "down") {
        secondScroll.start();
      }
    },
    { offset: '70%' }
  );

  jQuery('.third-counter').waypoint(
    function(direction){
      if(direction == "down") {
        thirdScroll.start();
      }
    },
    { offset: '70%' }
  );

  jQuery('.region-2').waypoint(
    function(direction){
      if(direction == "down") {
        scrollDemo.start();
      }
    },
    { offset: '70%' }
  );

//   var scrollNum = document.getElementById("scroll-num");
// var scrollDemo = new CountUp(scrollNum, 0, 2015, 0, 2.5, options);
// var hoverNum = document.getElementById("hover-num");
// var hoverDemo = new CountUp(hoverNum, 0, 3000, 0, 2.5, options);

// jQuery('.region-2').waypoint(
//   function(direction){
//     if(direction == "down") {
//       scrollDemo.start();
//     }
// 	},
// 	{ offset: 0 }
// );

// $(".region-1 .num-wrap #hover-num").hover(function(){
//   hoverDemo.start();
// });

  
  $(".region-1 .num-wrap #hover-num").hover(function(){
    hoverDemo.start();
  });