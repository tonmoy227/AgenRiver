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
	if($('.agt-split-1').length) {
		var txtSplit = $('.agt-split-1');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});
		});
	}
// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){
			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".agt-hero-slider").length) {
					var swiper3 = new Swiper(".agt-hero-thumb", {
						speed: 500,
						loop: true,
						watchSlidesProgress: true,
						slideToClickedSlide: true,
						direction: 'vertical',
						breakpoints: {
							0: {
								slidesPerView: 5,
								direction: 'horizontal',
							},
							576: {
								slidesPerView: 5,
								direction: 'horizontal',
							},
							767: {
								slidesPerView: 5,
								direction: 'horizontal',
							},
							768: {
								slidesPerView: 5,
							},
							992: {
								slidesPerView: 5,
							},
						},

					});
					var swiper2 = new Swiper(".agt-hero-slider", {
						speed: 500,
						loop: true,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},
						autoplay: {
							delay: 6000,
						},
						thumbs: {
							swiper: swiper3,
						},

					});
				}	

			}, 700);
		})
	});

// Background JS
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

// counter-activation
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});

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
	// Animation 1
	if($('.agt-sec-title').length) {
		var txasplit2 = $(".agt-sec-title");

		if(txasplit2.length == 0) return; gsap.registerPlugin(SplitText); txasplit2.each(function(index, el) {
			
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			
			if( $(el).hasClass('agt-sec-anim') ){
				gsap.set(el.split.chars, {
					opacity: .3,
					x: "-7",
				});
			}
			
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 92%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});
			
		});
	}

})(jQuery);