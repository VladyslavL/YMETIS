$(window).on('load',(function() {
	$('body').addClass('loaded')
}));

$(document).ready(function ($) {

	bg = $('.backgrounds').find('.section')


	$('.main').fullpage({
		scrollingSpeed: 1000,
		verticalCentered: false,
		lazyLoading: false,
		navigation: true,
		navigationPosition: 'right',
		anchors: ['page1', 'page2', 'page3', 'page4', 'last'],
		easingcss3: 'ease',

		onLeave: function (index, nextIndex, direction) {
			// var loadedSection = $(this);
			// if (loadedSection.hasClass('icon-bg-black')) {
			// 	$('body').addClass('icon-black')
			// }else{
			// 	$('body').removeClass('icon-black')				
			// }
			this_index = nextIndex - 1
			$(bg).removeClass('active')
			$(bg[this_index]).addClass('active')

			if (direction == 'down') {
				$(bg[this_index]).removeClass('up');
				$(bg[this_index]).addClass('down');
			} else if (direction == 'up') {
				$(bg[this_index]).removeClass('down');
				$(bg[this_index]).addClass('up');
			}
		}
	});

	$('.main-nav_btn').click(function () {
		$(this).parent('.main-nav').toggleClass('open');
		return false
	});

	$('.list-link').click(function (event) {
		$('.header-menu__row--menu__link').removeClass('open');
		$('.list-menu li').css('transform', 'translateY(-3rem)').parent().parent().removeClass('open').fadeOut(100);
		// return false

	});

	google.maps.event.addDomListener(window, 'load', init);

	function init() {
		var mapOptions = {
			zoom: 11,
			scrollwheel: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			center: new google.maps.LatLng(55.717072, 37.628792),
			styles: [{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [{
					"color": "#e9e9e9"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 17
				}]
			}, {
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 29
				}, {
					"weight": 0.2
				}]
			}, {
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 18
				}]
			}, {
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [{
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f5f5f5"
				}, {
					"lightness": 21
				}]
			}, {
				"featureType": "poi.park",
				"elementType": "geometry",
				"stylers": [{
					"color": "#dedede"
				}, {
					"lightness": 21
				}]
			}, {
				"elementType": "labels.text.stroke",
				"stylers": [{
					"visibility": "on"
				}, {
					"color": "#ffffff"
				}, {
					"lightness": 16
				}]
			}, {
				"elementType": "labels.text.fill",
				"stylers": [{
					"saturation": 36
				}, {
					"color": "#333333"
				}, {
					"lightness": 40
				}]
			}, {
				"elementType": "labels.icon",
				"stylers": [{
					"visibility": "off"
				}]
			}, {
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [{
					"color": "#f2f2f2"
				}, {
					"lightness": 19
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 20
				}]
			}, {
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [{
					"color": "#fefefe"
				}, {
					"lightness": 17
				}, {
					"weight": 1.2
				}]
			}]
		};

		var mapElement = document.getElementById('map');
		var map = new google.maps.Map(mapElement, mapOptions);
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(55.717036, 37.628825),
			map: map,
			icon: {
				url: 'images/pin.png',
				origin: new google.maps.Point(-151, 0),
				origin: new google.maps.Point(0, 0),
				size: new google.maps.Size(69, 76),
			},
			title: 'YMetis'

		});
		console.log('map.inited');
	}


	$('.section-content--contact .tabs, .map')
		.mouseenter(function (event) {
			if ($(window).width() > 600) {
				$.fn.fullpage.setAllowScrolling(false, 'up');
			}
		})
		.mouseleave(function (event) {
			$.fn.fullpage.setAllowScrolling(true, 'up');
		});

	// $('.tabs, .map').scroll(function(event) {
	//    $.fn.fullpage.setAllowScrolling(false, 'up');
	// });

	$('.tabs-nav').on('click', '.tabs-nav__link:not(.active)', function () {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');

	});
	
	var controller;		
	var pageAnimation = function(page){
		var selector = $('[data-page=' + page + ']').find('.page-content_wrap')[0];
		console.log(selector)
		// controller = new ScrollMagic.Controller({container: ".page.active .page-content_wrap", loglevel: 3});
		controller = new ScrollMagic.Controller({container: selector, loglevel: 3});

		var pageLogo = TweenMax.to((".main-logo"), 1, {
			x: '-200%'
		});

		var logoScene = new ScrollMagic.Scene({
			triggerHook: 0,
			duration: '200'
		})
		.setTween(pageLogo)
		.addTo(controller);

		$('.page.active .page-items__item').each(function(index){
			var item = this,
					itemParallax = $(item).find('.parallax');

			var pageItem = new ScrollMagic.Scene({
				triggerHook: 1,
				triggerElement: item,
				offset: '100',
				reverse: false
			})
			.setClassToggle(item, "in-view")
			.addTo(controller)
		})

		$('.page.active .parallax').each(function(index){
			var item = this;

			console.log(this)
			var imageParallax = TweenMax.to(this, 1, {
				y: '-100px'
			})

			var pageParallax = new ScrollMagic.Scene({
				triggerHook: 1,
				triggerElement: this,
				duration: '150%'
			})
			.setTween(imageParallax)
			.addTo(controller)
		})
	}

	// pages
	$('.page-close').click(function (event) {
		$.fn.fullpage.setAllowScrolling(true);
		$('.page').removeClass('active')
		$('.page-mask').removeClass('active');
		$('body').removeClass('page-opened')
		controller.destroy(true);
		return false
	});

	$('.page-back').click(function (event) {
		page = $(this).data('sheet')
		$('[data-page=' + page + ']').removeClass('active')
		return false
	});

	$('.title-link').click(function (event) {
		page = $(this).data('sheet');
		pageIndex = $('[data-page=' + page + ']');

		$.fn.fullpage.setAllowScrolling(false);
		$('[data-page=' + page + ']').addClass('active');
		$('.page-mask').addClass('active')
		$('body').addClass('page-opened')
		pageAnimation(page);
		return false
	});

	$('.link-detail').click(function (event) {
		page = $(this).data('sheet')
		$('[data-page=' + page + ']').addClass('active')
		return false
	});

	$(".back-to-top").click(function() {
		$(this).parent('.page').find('.page-content_wrap').animate({ scrollTop: 0 }, "slow");
		return false;
	});
});