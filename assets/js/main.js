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
// Animation 2
	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,  y: "+=30"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
// Play Btn
	gsap.utils.toArray(' .agt_v_btn').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, x:"+50" , y: "+=50"}, {opacity: 1, x:0, y: 0, duration: 1, immediateRender: false})
	});
// Animation 2
	gsap.utils.toArray('.scale_item ').forEach((el, index) => {
		let tl1 = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1,
				start: "top 90%",
				end: "buttom 50%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tl1
		.set(el, { perspective: 2000 , transformStyle: "preserve-3d" , transformOrigin: "0% 50%" })
		.from(el , { scaleX: .2  , opacity: 0})
	})
// Animation 3
	gsap.utils.toArray(".agt-text p").forEach(paragraph => {
		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: paragraph,
				start: "top 90%",
				end: "bottom 60%",
				toggleActions: "play none none none"
			}
		});
		let splitText = new SplitText(paragraph, { type: "lines" });
		gsap.set(paragraph, { perspective: 400 });
		timeline.from(splitText.lines, {
			opacity: 0,
			rotationX: -80,
			transformOrigin: "top center -50",
			force3D: true,
			duration: 1,
			delay: 0.5,
			stagger: 0.1
		});
	});
// Animation 4
	gsap.utils.toArray(' .top_view_item').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 90%",
				end: "top 90%",
				toggleActions: "play none none reverse",
				markers: false,
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0,  y: "+=250"}, {opacity: 1, y: 0, duration: 1,  immediateRender: false})
	});

})(jQuery);