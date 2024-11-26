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
			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				// if($('.agt-hero-slider').length) {
				// 	let slider = new Swiper('.agt-hero-slider', {
				// 		loop: true,
				// 		spaceBetween: 0,
				// 		speed: 1000,
				// 		effect: "fade",
				// 		fadeEffect: {
				// 			crossFade: true
				// 		},
				// 		autoplay: {
				// 			delay: 5000,
				// 		},
				// 		pagination: {
				// 			el: ".agt-hero1-pagination",
				// 			clickable: true,
				// 			renderBullet: function (className) {
				// 				return `
				// 				<button class="${className}">
				// 				<svg class="item-progress" width="24" height="24" viewbox="-3 -3 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
				// 				<circle r="14" cx="12" cy="12" fill="transparent" stroke="#ffe6e3" stroke-width="2.5" stroke-dasharray="12.56px" stroke-dashoffset="0"></circle>
				// 				<circle r="14" cx="12" cy="12" stroke="#ff2727" stroke-width="2.5" stroke-linecap="round" stroke-dashoffset="12px" fill="transparent" stroke-dasharray="12.56px"></circle>
				// 				</svg>
				// 				</button>
				// 				`;
				// 			}
				// 		},


				// 	});
				// }

			}, 700);
		})
	});









})(jQuery);