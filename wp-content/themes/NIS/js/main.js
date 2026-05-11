////selected menu active link
jQuery(document).ready(function ($) {
    var url = window.location.href;
    var activePage = url;
    jQuery('.site-navbar a').each(function () {
        var linkPage = this.href;
        if (activePage == linkPage) {
            jQuery(this).closest("li").addClass("menu-active");
        }
    });

 	"use strict";
 	var poca_window = $(window);
 	poca_window.on('load', function () {
 		$('#preloader').fadeOut('1000', function () {
 			$(this).remove();
 		});
 	});

 	 		// :: 13.0 Scrollup Active Code
 		$(window).scroll(function () {
 			if ($(this).scrollTop() > 1000) {
 				$('#scroll').fadeIn();
 			} else {
 				$('#scroll').fadeOut();
 			}
 		});
 		$('#scroll').click(function () {
 			$("html, body").animate({
 				scrollTop: 0
 			}, 600);
 			return false;
 		});

 	// :: anchor tag scroll
 		jQuery(document).ready(function ($) {
if ( window.location.hash ) scroll(0,0);
setTimeout( function() { scroll(0,0); }, 1);

$(function() {  
    if(window.location.hash) {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000, 'swing');

    }
});
});

 	// Header scroll class
  var nav_offset_top = $('header').height() + 20;
    /*-------------------------------------------------------------------------------
	  Navbar
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
    function navbarFixed(){
        if ( jQuery('.header_area').length ){
            jQuery(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    jQuery(".header_area").addClass("navbar_fixed");
					jQuery("#fixednavgap").addClass("fixed");
                } else {
                    jQuery(".header_area").removeClass("navbar_fixed");
					jQuery("#fixednavgap").removeClass("fixed");
                }
            });
        };
    };
    navbarFixed();




// Mobile Menu
 	var siteMenuClone = function () {
 		jQuery('.js-clone-nav').each(function () {
 			var $this = $(this);
 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
 		});
 		setTimeout(function () {
 			var counter = 0;
 			jQuery('.site-mobile-menu .menu-item-has-children').each(function () {
 				var $this = $(this);
 				$this.prepend('<span class="arrow-collapse"><i class="fa fa-plus" aria-hidden="true"></i></span>');
 				$this.find('.arrow-collapse').attr({
 					'data-toggle': 'collapse',
 					'data-target': '#collapseItem' + counter,
 				});

 				$this.find('> ul').attr({
 					'class': 'collapse',
 					'id': 'collapseItem' + counter,
 				});
 				counter++;
 			});
 		}, 1000);

 		jQuery('body').on('click', '.arrow-collapse', function (e) {
			jQuery(this).closest('li').find('.collapse:first').toggleClass('show');

 				var $this = $(this);
				if($this.html()=='<i class="fa fa-plus" aria-hidden="true"></i>') {
					$this.html('<i class="fa fa-minus" aria-hidden="true"></i>');
				} else {
					$this.html('<i class="fa fa-plus" aria-hidden="true"></i>');
				}
 			e.preventDefault();
 		});

 		jQuery(window).resize(function () {
 			var $this = $(this),
 				w = $this.width();
 			if (w > 768) {
 				if ($('body').hasClass('offcanvas-menu')) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		})
 		jQuery('body').on('click', '.js-menu-toggle', function (e) {
 			var $this = $(this);
 			e.preventDefault();
 			if (jQuery('body').hasClass('offcanvas-menu')) {
 				jQuery('body').removeClass('offcanvas-menu');
 				$this.removeClass('active');
 			} else {
 				jQuery('body').addClass('offcanvas-menu');
 				$this.addClass('active');
 			}
 		})
 		// click outisde offcanvas
 		jQuery(document).mouseup(function (e) {
 			var container = $(".site-mobile-menu");
 			if (!container.is(e.target) && container.has(e.target).length === 0) {
 				if ($('body').hasClass('offcanvas-menu')) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		});
 	};
 	siteMenuClone();
 });