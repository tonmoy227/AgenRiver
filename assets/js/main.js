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
	if($('.agt-split-2').length) {
		var txtSplit = $('.agt-split-2');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "words",
				wordsClass: "split-word"
			});
		});
	}
	if($('.agt-sub-tilte').length) {
		var agtsub = $(".agt-sub-tilte");

		if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {
			
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			
			if( $(el).hasClass('agt-sub-anim') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "-7",
				});
			}
			
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
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
				if($(".agt-h-slider-3").length) {
					var PortSlider = new Swiper(".agt-h-slider-3", {
						loop: true,
						speed: 1000,
						effect: "fade",
						autoplay: {
							delay: 4000,
						},
					});
				};
				
				if($(".agt_hero_title").length) {
					var AGTTitleAni = $(".agt_hero_title");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('agt_hero_title') ){
							gsap.set(el.split.chars, {
								x: 100,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,

							opacity: 1,
							duration: 1,
							stagger: .03,
							delay: .1,
							ease: "power3.inOut",
						});

					});
				}
				gsap.utils.toArray('.scroll_up_scale_img').forEach((el, index) => { 
					let imgUpScroll = gsap.timeline({
						scrollTrigger: {
							trigger: ".agt-hero-content-2",
							scrub: 5,
							start: "top -1%",
							end: "top 100%",
							markers: false,
						}
					})

					imgUpScroll
					.set(el, {transformOrigin: 'center center'})
					.fromTo(el, { y: 300, scale: 0.5  }, { y: 0, scale: 1, duration: 3,})
				});
				gsap.utils.toArray(".agt-h-text p").forEach(paragraph => {
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
		var txtheading = $(".agt-sec-title");

		if(txtheading.length == 0) return; gsap.registerPlugin(SplitText); txtheading.each(function(index, el) {
			
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
	if($('.tx-split-text').length) {
		var st = jQuery(".tx-split-text");
		if(st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			gsap.set(el, { perspective: 400 });
			if( jQuery(el).hasClass('split-in-right') ){
				gsap.set(el.split.words, {
					opacity: 0,
					rotationX: -90,
					ease: "power2.out",
				});
			}
			el.anim = gsap.to(el.split.words, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				rotationX: "0",
				color: 'inherit',
				webkitTextStroke: "0px white",
				scale: 1,
				opacity: 1,
				duration: 0.8, 
				stagger: 0.25,
			});
		});
	};
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
// Animation  Footer Logo
	gsap.utils.toArray(' .top_view_logo').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 2,
				start: "top 100%",
				end: "top -100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: .5,  y: "+=150"}, {opacity: 1, y: 0, scale: 1, duration: 1, immediateRender: false})
	});
	jQuery(window).on('load', function(){
		const boxes = gsap.utils.toArray('.txt_item_active');
		boxes.forEach(svg => {
			gsap.to(svg, {
				scrollTrigger: {
					trigger: svg,
					start: "top 100%",
					end: "bottom bottom",
					toggleClass: "active",
					duration: 3,
					delay:1,
					toggleActions: "play play play reverse",
					once: true,
				}
			});
		});
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
	// Project Slider
	if ($('.agt-pr-slider').length > 0 ) {
		var swiper2 = new Swiper(".agt-pr-slider", {
			slidesPerView: 1,
			loop: true,
			spaceBetween: 32,
			roundLengths: true,
			centeredSlides: true,
			speed: 1000,
			navigation: {
				nextEl: ".agt-pr-next",
				prevEl: ".agt-pr-prev",
			},
			pagination: {
				el: ".agt-pr-pagination-2 ",
				type: "progressbar",
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
	if (window.matchMedia("(min-width: 1200px)").matches) { 
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
		gsap.utils.toArray('.wt-item-1').forEach((el, index) => { 
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
				xPercent: -50,
				duration: 5,
				rotate: "-30deg" 
			} )
		})
		gsap.utils.toArray('.wt-item-2').forEach((el, index) => { 
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
		gsap.utils.toArray('.agt_text_up').forEach((el, index) => { 
			let tlcta = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					scrub: 1,
					start: "top 0%",
					end: "bottom -100%",
					toggleActions: "play none none reverse",
					markers: false
				},
				
			})

			tlcta
			.set(el, {transformOrigin: 'center center'})
			.to(el,  {
				y: -100,
				zIndex: 4,
				scale: 1.05,
			})
		})
	}	
	if ($('.agt-service-section-4').length > 0 ) {
		let SerAnim;
		const screenWidth = window.screen.width;
		if (screenWidth > 990) {
			const SerArea = document.querySelector(".agt-service-section-4");
			const SerPin = document.querySelector(".agt-sr-card-sticky");
			const SerOne = document.querySelector(".agt-sr-card-item-4.card_n_2");
			const SerTwo = document.querySelector(".agt-sr-card-item-4.card_n_3");
			const SerThree = document.querySelector(".agt-sr-card-item-4.card_n_4");
			const SerZoom = document.querySelector(".agt-sr-card-item-4.has-main-card");
			const SerZoomImage = document.querySelector(".agt-sr-card-item-4.has-main-card .item-img-wrap");
			const SerZoomContent = document.querySelector(".activity_hero-item-outter-wrapper.is-hero-main .item-text-wrap");
			const TextContent = document.querySelectorAll(".activity_cut-out");
			const ItemCard = document.querySelector(".agt-sr-card-item-4.has-main-card .agt-s-card-item");
			const SideItem = document.querySelector(".agt-sr-text-wrap-4");
			let easingValue = "Power1.easeOut";
			SerAnim = gsap.timeline({
				scrollTrigger: {
					trigger: SerArea,
					start: "top 0%",
					end: "top -100%",
					scrub: true,
					pin: true,
				},
			});
			SerAnim.to(SerThree, {
				rotate: "360",
				duration: 0.5,
				ease: easingValue
			}).to(SideItem, {
				y: "-100%",
				opacity: "0",
				duration: 0.4,
				ease: easingValue
			}, "<").to(SerPin, {
				width: "100%",
				duration: 0.5,
				ease: easingValue
			}, "<+.1").to(SerZoom, {
				width: "103vw",
				duration: 0.5,
				ease: easingValue
			}, ">").to(SerPin, {
				top: "-1rem",
				paddingTop: "0",
				duration: 0.5,
				ease: easingValue
			}, "<").to(SerZoomImage, {
				height: "103vh",
				duration: 0.5,
				ease: easingValue
			}, "<").to(SerZoomContent, {
				scale: "3",
				y: "-65vh",
				duration: 0.5,
				ease: easingValue
			}, "<").to(TextContent, {
				scale: "1.5",
				duration: 0.5,
				ease: easingValue
			}, "<").to(ItemCard, {
				borderWidth: "1.5",
				duration: 0.5,
				ease: easingValue
			}, "<").to(SerTwo, {
				rotate: "360",
				duration: 0.5,
				ease: easingValue
			}, "0.08").to(SerOne, {
				rotate: "360",
				duration: 0.5,
				ease: easingValue
			}, "<+0.08").to([SerThree, SerTwo, SerOne], {
				css: {
					zIndex: -1
				}
			}, "0.1");
		};
	}
	gsap.utils.toArray('.agt-part-content-3').forEach((el, index) => { 
		let Sponsor = gsap.timeline({
			scrollTrigger: {
				trigger: ".agt-part-content-3",
				scrub: 6,
				start: "top 20%",
				end: "bottom -20%",
				toggleActions: "play none none reverse", 
				markers: false,
			}
		})

		Sponsor
		.set(el, {transformOrigin: 'top bottom'})
		.fromTo(el, { x: 0  }, { x: -1200 , duration: 30, immediateRender: false})
	});

})(jQuery);