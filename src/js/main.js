$(document).ready(function($) {

    bg = $('.backgrounds').find('.section')


	$('.main').fullpage({
		scrollingSpeed: 1000,
		navigation: true,
		navigationPosition: 'right',
		anchors: ['home', 'about', 'services', 'careers', 'contact'],
        menu: '.list-menu',
        easingcss3: 'linear',
		
		onLeave: function(index, nextIndex, direction){
		var loadedSection = $(this);
            if (loadedSection.hasClass('icon-bg-black')) {

            }
			if(nextIndex == 5 && direction =='down'){
				$('.header-menu__row--logo__link svg path').css('fill', '#333333')
                $('.header-menu__row--menu__link span').addClass('mob')
                $('#fp-nav ul li a.active span').addClass('mob')
                $('#fp-nav ul li a span').addClass('mob')
                $('.aside__link').addClass('mob')
                $('.list-link').addClass('mob')
			} else if (nextIndex != 5 && direction =='up') {
				$('.header-menu__row--logo__link svg path').css('fill', '#fff')
                $('.aside__link').removeClass('mob')
                $('.header-menu__row--menu__link span').removeClass('mob')
                $('#fp-nav ul li a span').removeClass('mob')
                $('#fp-nav ul li a.active span').removeClass('mob')
                $('.list-link').removeClass('mob')
			}
            this_index = nextIndex-1
            $(bg).removeClass('active')
            $(bg[this_index]).addClass('active')
            if(direction == 'down'){
                $(bg[this_index]).removeClass('up');
                $(bg[this_index]).addClass('down');
            }
            else if(direction == 'up'){
                $(bg[this_index]).removeClass('down');
                $(bg[this_index]).addClass('up');
            }
            
           
		},
        afterLoad: function(anchorLink, index){
        }
	});





	$('.header-menu__row--menu__link').click(function(){
		menu = $('.list-menu')
		menu_item = menu.find('li')
		$(this).toggleClass('open');
		if ($('.list-menu-hidden').hasClass('open')) {
			$('.list-menu li').css('transform','translateY(-3rem)').parent().parent().removeClass('open').fadeOut(100);
	} else {
        $('.list-menu-hidden').addClass('open').fadeIn(200)
			$('.list-menu li').show(200).css('transform','translateY(0)');
	}

	return false
	});

    $('.list-link').click(function(event) {
        $('.header-menu__row--menu__link').removeClass('open');
        $('.list-menu li').css('transform','translateY(-3rem)').parent().parent().removeClass('open').fadeOut(100);
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
            styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
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
    .mouseenter(function(event) {
        if ($(window).width() > 600) {
    	   $.fn.fullpage.setAllowScrolling(false, 'up');
        }
    })
    .mouseleave(function(event) {
    	$.fn.fullpage.setAllowScrolling(true, 'up');
    });

    // $('.tabs, .map').scroll(function(event) {
    //    $.fn.fullpage.setAllowScrolling(false, 'up');
    // });

    $('.tabs-nav').on('click', '.tabs-nav__link:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs').find('.tabs-content').removeClass('active').eq($(this).index()).addClass('active');

  });



    // pages
    $('.page-close').click(function(event) {
        $.fn.fullpage.setAllowScrolling(true);
        $('.page').css('left','-100%')
        $('.page-mask').removeClass('active');
        $('.sheet').fadeOut(400);
        return false

    });

    $('.page-back').click(function(event) {
        page = $(this).data('sheet')
        $('[data-page='+page+']').css('left','-100%')
        return false

    });

    $('.title-link').click(function(event) {
        page = $(this).data('sheet')
        $.fn.fullpage.setAllowScrolling(false);
        $('.sheet').fadeIn(1000);
        $('[data-page='+page+']').css('left','0');
        $('.page-mask').addClass('active')
        return false
    });

    $('.link-detail').click(function(event) {
        page = $(this).data('sheet')
        $('.sheet').fadeIn(200);
        $('[data-page='+page+']').css('left','0')
        return false
    });

    $('.fp-section:not(.active) .section-content .description').click(function(event) {
        $.fn.fullpage.moveSectionDown();
    });

});