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
				if($(".agt-hr2-slider").length) {
					var PortSlider = new Swiper(".agt-hr2-slider", {
						loop: true,
						speed: 1000,
					});
				};
			}, 700);
		})
	});
// Testimonial
	if($(".agt-tst-s-active").length) {
		var swiper3 = new Swiper(".agt-tst-s-active", {
			speed: 1000,
			loop: true,
			spaceBetween: 32,
			pagination: {
				el: ".agt-testi-pagination-2",
				clickable: true,
				type: 'fraction',
				formatFractionCurrent: function (number) {
					if (number < 10) {
						return '0' + number;
					} else {
						return number;
					}
				}
			},

			navigation: {
				nextEl: ".agt-testi-next",
				prevEl: ".agt-testi-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
			},

		});
	}
// Bottom Text Marque
	$('.marque-active').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: false, 
		startVisible:true,
	});
// Bottom Text Marque
	$('.marque-active-2').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true, 
		startVisible:true,
	});
// Bottom Text Marque
	$('.marque-active-3').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true, 
		startVisible:true,
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
// popup-video-activation
	if($('.popup-video').length) {
		$('.popup-video').magnificPopup({
			type: 'iframe'
		});
	}
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
//Animation
	const imageAppearContainers = document.querySelectorAll(".ptx-image-appear2");
	imageAppearContainers.forEach((container) => {
		const image = container.querySelector(".ptx-img-rvl_2");
		gsap.timeline({
			scrollTrigger: {
				start: "top 90%",
				trigger: container,
				toggleActions: "play none none none",
			}
		})
		.set(container, { autoAlpha: 1 })
		.from(container, {
			xPercent: 100,
			duration: 1.5,
			ease: "power2.out"
		})
		.from(image, {
			xPercent: -100,
			scale: 1.3,
			duration: 1.5,
			delay: -1.5,
			ease: "power2.out"
		});
	});
	//Animation
	if($('.gray_text').length) {
		var about_text = $(".gray_text");
		if(about_text.length == 0) return; gsap.registerPlugin(SplitText); about_text.each(function(index, text) {
			text.split = new SplitText(text, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			if( $(text).hasClass('gray_text') ){
				gsap.set(text.split.chars, {
					opacity: .4,
				});
			}
			text.anim = gsap.to(text.split.chars, {
				scrollTrigger: {
					trigger: text,
					start: "top 60%",
					end: "top 10%",
					markers: false,
					scrub: 1,
				},
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});

		});
	}
// Service Slider
	if ($('.agt-s-slide-active2').length > 0 ) {
		var slider = new Swiper('.agt-s-slide-active2', {
			slidesPerView: 5,
			loop: true,
			centeredSlides: true,
			autoplay: {
				enabled: true,
				delay: 5000
			},
			speed: 1000,
			navigation: {
				prevEl: ".ser-button-prev",
				nextEl: ".ser-button-next",
			},
			pagination: {
				el: ".agt-ser-pagination",
				type: 'fraction',
				formatFractionCurrent: function (number) {
					if (number < 10) {
						return '0' + number;
					} else {
						return number;
					}
				}

			},
			on: {
				slideChange: function () {
					var activeIndex = this.activeIndex;
					var realIndex = this.slides[activeIndex].getAttribute('data-swiper-slide-index'); 
					$('.swiper-slide').removeClass('swiper-slide-nth-prev-2 swiper-slide-nth-next-2');
					$('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').prev().prev().addClass('swiper-slide-nth-prev-2');
					$('.swiper-slide[data-swiper-slide-index="'+realIndex+'"]').next().next().addClass('swiper-slide-nth-next-2');
				},
			},
			breakpoints: {
				'1600': {
					slidesPerView: 5,
				},
				'1200': {
					slidesPerView: 4,
					spaceBetween: 40,
				},
				'992': {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				'991': {
					slidesPerView: 2,
					centeredSlides: false,
				},
				'768': {
					slidesPerView: 2,
					spaceBetween: 20,
					centeredSlides: false,
				},
				'576': {
					slidesPerView: 1,
					spaceBetween: 20,
					centeredSlides: false,
				},
				'0': {
					slidesPerView: 1,
					centeredSlides: false,
				},
			},
		});
	};
//Animation
	if(window.innerWidth> 991){
		let proSroll = gsap.timeline();
		let otherSections_2 = document.querySelectorAll('.agt_sticky_item')
		otherSections_2.forEach((section, index, i) => {
			gsap.set(otherSections_2, {
				scale: 1 
			});
			proSroll.to(section, {
				scale: index === otherSections_2.length - 1 ? 1 : 0.8,
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: "top " + (100 + 10 * i),
					end: "bottom 100%",
					ease: "none",
					endTrigger: '.agt-p-content-2',
					pinSpacing: false,
					markers: false,
				},
			})
		});
	};
//Animation
	if (window.matchMedia("(min-width: 768px)").matches) { 
		gsap.to(".agt-work-content", {
			scrollTrigger: {
				trigger: ".agt-work-content",
				start: "top 0%", 
				end: "bottom bottom", 
				pin: ".agt-work-content", 
				pinSpacing: true,
				markers: false
			}
		});
		gsap.utils.toArray('.scroll_right_slide_1').forEach((el, index) => { 
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 0%",
					end: "top -100%",
					toggleActions: "play none none reverse",
					markers: false
				},
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.to(el,  {opacity: 1, xPercent: -50, duration: 5, rotate: "-30deg" } )
		})
		gsap.utils.toArray('.scroll_right_slide_2').forEach((el, index) => { 
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 0%",
					end: "top -100%",
					toggleActions: "play none none reverse",
					markers: false
				},
				
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.to(el,  {
				opacity: 1,
				xPercent: 50,
				duration: 5,
				rotate: "30deg",
			})
		})
	}	
})(jQuery);