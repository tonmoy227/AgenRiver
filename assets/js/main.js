/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";



gsap.config({
	nullTargetWarn: false,
});

// lenis-smooth-scroll
const lenis = new Lenis({
	duration: .6, 
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
	direction: 'vertical', 
	smooth: true, 
	smoothTouch: false, 
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

$('a[href^="#"]').on('click', function (e) {
	e.preventDefault(); 

	const target = $(this.getAttribute('href')); 

	if (target.length) {
		lenis.scrollTo(target[0], {
			duration: 1.2, 
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		});
	}
});

// windows-loaded-before-functions
document.addEventListener("DOMContentLoaded", function () {
	window.addEventListener('load', function(){

		// preloader
		let preloader = document.querySelector("#preloader");
		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();
			}, 1000 ) ;

		}



		// after-preloader-end
		setTimeout(function() {

			// hero-1-slider
			if($(".agn-hero-1-active").length) {
				
				const swiper = new Swiper('.agn-hero-1-active', {
					speed: 1000,
					loop: true,
					effect: "fade",
					fadeEffect: {
						crossFade: true
					},

					pagination: {
						el: ".agn-h1-pagination",
						type: "fraction",
					},

					autoplay: {
						delay: 5000,
					},

					on: {
						slideChangeTransitionStart: () => animateSlide(),
					},
				});


	
				function animateSlide() {
					const currentSlide = document.querySelectorAll('.swiper-slide-active .text');
				
					const split = new SplitText(currentSlide, { type: 'lines' });
					gsap.set(split.lines, { opacity: 0, yPercent: 100 , transformOrigin: "bottom", scaleY: .3 });
				
					gsap.to(split.lines, {
						delay: .5,
						opacity: 1,
						scaleY: 1,
						yPercent: 0,
						duration: .75,
						ease: "ease1",
						stagger: 0.2,
					});
				}

				animateSlide();
	
			}


		}, 700);

		CustomEase.create("ease1", "0.2, 0.8, 0.2, 1");
		CustomEase.create("ease2", "0.68, -0.55, 0.27, 1.55");
		
		// hero-1-tl
		const agnH1tl = gsap.timeline();
		agnH1tl.from(".agn-hero-1-social", { xPercent: -100, duration: 1, delay: 1 });

		// hero-1-scroll
		var agnH1Scroll = gsap.timeline({
			scrollTrigger: {
				trigger: '.agn-hero-1-mask',
				start: "top -30%",
				scrub: 1,
				toggleActions: "play reverse play reverse",
				markers: false
			}
		});
		agnH1Scroll.to(".agn-hero-1-mask" , {     maskSize: "100% 110%"  })


		// hero-2-tl
		const agnH2tl = gsap.timeline();
		agnH2tl.from(".agn-hero-2-bg-img img", { scale: 1.2, transformOrigin: "left", filter: "blur(5px)", duration: 1.5, delay: .8, ease: "ease2" });

		// hero-2-tl-2
		const agnH2tl2 = gsap.timeline();
		agnH2tl2.from(".agn-hero-2-title", { opacity: 0, yPercent: 100 , transformOrigin: "bottom", scaleY: .2, stagger: .4,  delay: 1.5, duration: .8, ease: "ease2",});

		// section-title-1
		if($(".pf-split-1").length) {
			var split1 = $(".pf-split-1");
			if(split1.length == 0) return; gsap.registerPlugin(SplitText); split1.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines,words,chars",
					linesClass: "split-line"
				});
	
				gsap.set(el, { perspective: 400 });
	
				if( $(el).hasClass('pf-split-1') ){
					gsap.set(el.split.chars, {
						y: "100",
					});
				}
	
				el.anim = gsap.to(el.split.chars, {
					scrollTrigger: {
						trigger: el,
						start: "top 90%",
					},
					x: "0",
					y: "0",
					opacity: 1,
					duration:1,
					ease: "power3.out",
					stagger: 0.02,
					delay:0.3,
				});
	
			});
		}

		// section-title-2
		if($(".agn-split-2").length) {
			var split2 = $(".agn-split-2");
			if(split2.length == 0) return; gsap.registerPlugin(SplitText); split2.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines",
					linesClass: "split-line"
				});
	
				gsap.set(el, { perspective: 400 });
	
				if( $(el).hasClass('agn-split-2') ){
					gsap.set(el.split.lines, {
						y: "100",
						transformOrigin: "bottom", 
						scaleY: .2
					});
				}
	
				el.anim = gsap.to(el.split.lines, {
					scrollTrigger: {
						trigger: el,
						start: "top 85%",
					},
					x: "0",
					y: "0",
					scaleY: 1,
					opacity: 1,
					duration: 1,
					ease: "ease1",
					stagger: 0.3,
				});
	
			});
		}

		// section-title-3
		if($(".agn-split-3").length) {
			var split3 = $(".agn-split-3");
			if(split3.length == 0) return; gsap.registerPlugin(SplitText); split3.each(function(index, el) {
	
				el.split = new SplitText(el, { 
					type: "lines",
					linesClass: "split-line"
				});
	
				gsap.set(el, { perspective: 400 });
	
				if( $(el).hasClass('agn-split-3') ){
					gsap.set(el.split.lines, {
						yPercent: 100,
						opacity: .5,
						scaleY: .2,
						transformOrigin: "bottom",
					});
				}
	
				el.anim = gsap.to(el.split.lines, {
					scrollTrigger: {
						trigger: el,
						start: "top 80%",
						markers: false,
					},
					yPercent: 0,
					color: "inherit",
					scaleY: 1,
					opacity: 1,
					duration:1,
					ease: "power3.out",
					stagger: 0.2,
				});
	
			});
		}


	})
});







// sticky-header-default
function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();



// offcanvas
$('.offcanvas_toggle').on('click', function() {
    $('.overlay, .offcanvas_box_active').addClass('active');
});

$('.overlay, .offcanvas_box_close').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});
$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.offcanvas_box_active').removeClass('active');
        $('.overlay').removeClass('active');
    }
});
$('.offcanvas_box_active a').on('click', function() {
    $('.offcanvas_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

// menu-dropdown
jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
});


// search-box
$('.search_btn_toggle').on('click', function() {
    $('.overlay, .search_box_active').addClass('active');
});

$('.overlay, .search_box_close').on('click', function() {
    $('.search_box_active').removeClass('active');
    $('.overlay').removeClass('active');
});

$(document).on('keydown', function(event) {
    if (event.key === 'Escape') {
        $('.search_box_active').removeClass('active');
        $('.overlay').removeClass('active');
    }
});


// about-1-line
var agnA1line = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-1-content-line",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
        ease: "power4.out",

    },
})
agnA1line
.from(".agn-about-1-content-line .line", {
	scaleX: 0,
	transformOrigin: "left",
	duration: 2,
})
.from(".agn-about-1-content-line .has-btn-ani", {
	scale: 0,
})

// about-2-author
var agnA2author = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-about-2-author",
		toggleActions: "play reverse play reverse",
		markers: false,
	},
	defaults: {
        ease: "ease2",
		duration: .8,
    },
})
agnA2author
.from(".agn-about-2-author-img", {
	xPercent: -100,
	stagger: .3,
	opacity: 0
})
.from(".agn-about-2-author-btn-wrap", {
	xPercent: -100,
	opacity: 0
})



// campaign-1-card
var campaign1CardTl = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-campaign-1-card",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
		markers: false,
	
	},
	defaults: {
		ease: "ease1",
		duration: 1,
    },
})
campaign1CardTl
.from(".agn-campaign-1-card-single", {
	yPercent: 100,
	stagger: 0.3,
	ease: "power4.out",
})

// process-1-card
if (window.matchMedia("(min-width: 992px)").matches) {
	var process1CardTl = gsap.timeline({
		scrollTrigger: {
			trigger: ".agn-process-1-wrap",
			start: "top 80%",
			toggleActions: "play reverse play reverse",
			markers: false,
			
		},
		defaults: {
			ease: "ease1",
			duration: 1,
		},
	})
	
	process1CardTl
	.from(".agn-process-1-img", {
		xPercent: -100,
	})
	.from(".agn-process-1-card-single", {
		scale: 0,
		stagger: .2
	}, "<=.5")

}

// team-2-card
var agnTeam2 = gsap.timeline({
	scrollTrigger: {
		trigger: ".agn-team-2-wrap",
		start: "top 80%",
		toggleActions: "play reverse play reverse",
		markers: false,
	
	},
	defaults: {
		ease: "ease2",
		duration: .8,
    },
})
agnTeam2
.from(".agn-team-2-card", {
	yPercent: 50,
	opacity: 0,
	stagger: 0.2,
})

// agn-subtitle-1
const agnSubtitle1 = gsap.utils.toArray('.agn-subtitle-1-shape');
agnSubtitle1.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ rotation: 0, fill: "#FF275A", opacity: 1,   duration: 3, 	ease: "ease1",  }, 
	{ rotation: 360, fill: "#D9D9D9", opacity: 1, duration: 3, 	ease: "ease1",   });
	
	ScrollTrigger.create({
		trigger: box,
		start: "top 90%",
		animation: anim,
		toggleActions: 'play reverse play reverse',
		markers: false,
	});
});



// item-parallax
const waItemParallax = gsap.utils.toArray('.item-parallax');
waItemParallax.forEach((box, i) => {
	const anim = gsap.fromTo(box, 
		
	{ yPercent: 20, stagger: .3, duration: .5, },
	{ yPercent: -5, stagger: .3, duration: .5, }

	);

	ScrollTrigger.create({
		trigger: box,
		start: "top 100%",
		end: "top -40%",
		animation: anim,
		toggleActions: 'play none none reverse',
		once: false,
		markers: false,
		scrub: .5,
	});
});

// services-1-slider
if($('.agn-services-1-active').length) {
	let slider = new Swiper('.agn-services-1-active', {
		loop: true,
		spaceBetween: 0,
		speed: 500,
		slidesPerView: 4,

		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".pf-t1-btn-next",
			prevEl: ".pf-t1-btn-prev",
		},

        pagination: {
            el: ".pf-t1-pagination",
            clickable: true,
        },


		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},
		},
	});
}


// services-2-slider
if($(".agn-services-2-active").length) {
	const swiper = new Swiper(".agn-services-2-active" , {
		speed: 1000,
		spaceBetween: 32,
		loop: true,
		
		autoplay:  {
			delay: 5000,
		},


		navigation: {
			nextEl: ".agn-s2-btn-next",
			prevEl: ".agn-s2-btn-prev",
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
		},
	})
	
}

// process-1-hover-active
$(".agn-process-1-card-single").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-process-1-card-single active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// blog-1-hover-active
$(".agn-blog-1-item").on("mouseover", function(){
	var current_class = document.getElementsByClassName("agn-blog-1-item active");
	current_class[0].className = current_class[0].className.replace(" active", "");
	this.className += " active";
});

// brand-1-marquee
if($('.agn-brand-1-marquee').length) {
	$('.agn-brand-1-marquee').marquee({
		gap: 72,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
}

// video-1-shape-marquee
if($('.agn-video-1-shape-marquee').length) {
	$('.agn-video-1-shape-marquee').marquee({
		gap: 0,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}

// brand-2-marquee
if($('.agn-brand-2-marquee-active').length) {
	$('.agn-brand-2-marquee-active').marquee({
		gap: 32,
		speed: 80,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false,
		startVisible:true,
	});
}


// feather-icon
feather.replace()

// counter-activation
$('.counter').counterUp({
	delay: 10,
	time: 5000
});


// bootstrap-tooltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// back-to-top
if ($('.agn-back-to-top').length) {
    var scrollTopbtn = document.querySelector('.agn-back-to-top');
    var offset = 500; // Distance to scroll before showing the button
    var duration = 1000; // Scroll animation duration in milliseconds

    // Update the button's visibility on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $(scrollTopbtn).addClass('show');
        } else {
            $(scrollTopbtn).removeClass('show');
        }
    });

    // Scroll to the top with smooth behavior when the button is clicked
    $(scrollTopbtn).on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration, 'swing');
    });
}




// popup-video-activation
if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}

// popup-img-activation
if($('.popup-img').length) {
	$('.popup-img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

// data-background
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


// wow-activation
if($('.wow').length){
	var wow = new WOW({
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	});
	wow.init();
};


})(jQuery);