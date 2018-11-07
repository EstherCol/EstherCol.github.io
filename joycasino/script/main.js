$(document).ready(function(){
	$(".owl-one").owlCarousel({
      items:1,
      dots: true,
      autoplay: false,
      video: true,
      loop: true
   });
	$(".owl-two").owlCarousel({
      items:5,
      loop: true,
      dots: false,
      responsive:{
        0:{
            items:1
        },
        470:{
            items:2
        },
        700:{
            items:3
        },
        900:{
            items:4
        },
        1200:{
            items:5
        }
    }
   });

	$('.header__gamburger').click(function() {
		$('.side-menu__aside').animate({
			'right' : '0'
		},200);
		$('.side-menu').addClass('side-menu_state_open');
		$('body').css('overflow', 'hidden');
	});

	$('.side-menu__close').click(function() {
		$('.side-menu__aside').animate({
			'right' : '-380'
		},200);
		setTimeout(function () {
			$('body').css('overflow', '');
			$('.side-menu').removeClass('side-menu_state_open');
			$('.dropdown').hide();
		}, 300);
	});

	$('.side-menu-list__item--dropdown').click(function() {
		$(this).children('ul').slideToggle();
	});
});