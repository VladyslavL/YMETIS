$(document).ready(function(n){bg=n(".backgrounds").find(".section"),n(".main").fullpage({scrollingSpeed:1e3,navigation:!0,navigationPosition:"right",anchors:["home","about","services","careers","contact"],menu:".list-menu",easingcss3:"linear",onLeave:function(e,s,t){n(this).hasClass("icon-bg-black"),5==s&&"down"==t?(n(".header-menu__row--logo__link svg path").css("fill","#333333"),n(".header-menu__row--menu__link span").addClass("mob"),n("#fp-nav ul li a.active span").addClass("mob"),n("#fp-nav ul li a span").addClass("mob"),n(".aside__link").addClass("mob"),n(".list-link").addClass("mob")):5!=s&&"up"==t&&(n(".header-menu__row--logo__link svg path").css("fill","#fff"),n(".aside__link").removeClass("mob"),n(".header-menu__row--menu__link span").removeClass("mob"),n("#fp-nav ul li a span").removeClass("mob"),n("#fp-nav ul li a.active span").removeClass("mob"),n(".list-link").removeClass("mob")),this_index=s-1,n(bg).removeClass("active"),n(bg[this_index]).addClass("active"),"down"==t?(n(bg[this_index]).removeClass("up"),n(bg[this_index]).addClass("down")):"up"==t&&(n(bg[this_index]).removeClass("down"),n(bg[this_index]).addClass("up"))},afterLoad:function(e,s){}}),n(".header-menu__row--menu__link").click(function(){return menu=n(".list-menu"),menu_item=menu.find("li"),n(this).toggleClass("open"),n(".list-menu-hidden").hasClass("open")?n(".list-menu li").css("transform","translateY(-3rem)").parent().parent().removeClass("open").fadeOut(100):(n(".list-menu-hidden").addClass("open").fadeIn(200),n(".list-menu li").show(200).css("transform","translateY(0)")),!1}),n(".list-link").click(function(e){n(".header-menu__row--menu__link").removeClass("open"),n(".list-menu li").css("transform","translateY(-3rem)").parent().parent().removeClass("open").fadeOut(100)}),google.maps.event.addDomListener(window,"load",function(){var e={zoom:11,scrollwheel:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,center:new google.maps.LatLng(55.717072,37.628792),styles:[{featureType:"water",elementType:"geometry",stylers:[{color:"#e9e9e9"},{lightness:17}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#ffffff"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#ffffff"},{lightness:16}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#f5f5f5"},{lightness:21}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#dedede"},{lightness:21}]},{elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#ffffff"},{lightness:16}]},{elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#333333"},{lightness:40}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#f2f2f2"},{lightness:19}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#fefefe"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#fefefe"},{lightness:17},{weight:1.2}]}]},s=document.getElementById("map"),s=new google.maps.Map(s,e);new google.maps.Marker({position:new google.maps.LatLng(55.717036,37.628825),map:s,icon:{url:"images/pin.png",origin:new google.maps.Point(-151,0),origin:new google.maps.Point(0,0),size:new google.maps.Size(69,76)},title:"YMetis"});console.log("map.inited")}),n(".section-content--contact .tabs, .map").mouseenter(function(e){600<n(window).width()&&n.fn.fullpage.setAllowScrolling(!1,"up")}).mouseleave(function(e){n.fn.fullpage.setAllowScrolling(!0,"up")}),n(".tabs-nav").on("click",".tabs-nav__link:not(.active)",function(){n(this).addClass("active").siblings().removeClass("active").closest(".tabs").find(".tabs-content").removeClass("active").eq(n(this).index()).addClass("active")}),n(".page-close").click(function(e){return n.fn.fullpage.setAllowScrolling(!0),n(".page").css("left","-100%"),n(".page-mask").removeClass("active"),n(".sheet").fadeOut(400),!1}),n(".page-back").click(function(e){return page=n(this).data("sheet"),n("[data-page="+page+"]").css("left","-100%"),!1}),n(".title-link").click(function(e){return page=n(this).data("sheet"),n.fn.fullpage.setAllowScrolling(!1),n(".sheet").fadeIn(1e3),n("[data-page="+page+"]").css("left","0"),n(".page-mask").addClass("active"),!1}),n(".link-detail").click(function(e){return page=n(this).data("sheet"),n(".sheet").fadeIn(200),n("[data-page="+page+"]").css("left","0"),!1}),n(".fp-section:not(.active) .section-content .description").click(function(e){n.fn.fullpage.moveSectionDown()})});