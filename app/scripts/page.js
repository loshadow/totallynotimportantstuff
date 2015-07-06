

$(document).ready(function(){


//nav
//	$(".back-to-top-link, nav ul li a,a[href='#section1'],a[href='#section2'],a[rel='m_PageScroll2id']").mPageScroll2id({
//		highlightSelector:".nav-options a"
//	});


//sticky
	$("nav").sticky({topSpacing:0});

//slick
//	$('.section1-slider, .section1-laptop-slider, .section2-part1, .section2-part4-slider').slick({
//	  autoplay: true,
//	  infinite: true,
//	  dots: false,
//	  arrows: false,
//	  fade: true
//	});
//	$('.section1-laptop-slider').slick({
//	  autoplay: true,
//	  dots: false,
//	  arrows: false,
//	  fade: true,
//	  asNavFor: '.section1-slider'
//	});
//
//	$('.section2-fold2-slider').slick({
//	  autoplay: true,
//	  infinite: true,
//	  dots: true,
//	  arrows: false
//	})

	$('.section4-slider').slick({
	  autoplay: false,
	  infinite: false,
	  dots: false,
	  arrows: true,
	  fade: false,
	  adaptiveHeight: true
	});

	$('.section3-price-slider').slick({
	  responsive: [
	    {
	      breakpoint: 100000,
	      settings: "unslick"
	    },
	    {
	      breakpoint: 640,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			infinite: true,
	      }
	    },
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
			dots: true,
			arrows: false,
			infinite: false,
			speed: 300,
			infinite: true
	      }
	    }
	  ]
	});


//hide back to top
	$("#back-to-top").hide();

//show back to top
//	$(window).scroll(function () {
//
//		if ($(this).scrollTop() > 500) {
//			$('#back-to-top').fadeIn();
//		} else {
//			$('#back-to-top').fadeOut();
//		}
//
//	});

// lightbox

	$('.popup').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,

		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});


});

// collapsing menu


	$(function() {
		var pull 		= $('#pull');
			menu 		= $('nav ul');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
       		var w = $(window).width();
       		if(w > 320 && menu.is(':hidden')) {
       			menu.removeAttr('style');
       		}
   		});
		});
