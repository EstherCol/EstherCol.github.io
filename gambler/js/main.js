$(document).ready(function() {

	if (window.matchMedia('(min-width: 992px)').matches) {

        $('.forum-topic__top-right').width($('.forum-topic__bot .topic-link').width());
	}
    if (window.matchMedia('(min-width: 1200px)').matches) {
        $('.top-cas-sidebar').css('height', $('.top-cas-sidebar').outerHeight() + $('.header__bot').outerHeight());
        $('.top-cas-sidebar').css('margin-top', -$('.header__bot').outerHeight());
    }
    $('.header__menu-toggle').click(function() {
        $('body').toggleClass('ofh')
        $('.nav').slideToggle();

        if ($('.mainMenu').hasClass('active')) {
            $('.mainMenu').removeClass('active')
            $('.toggle-site-sec__hamburger').removeClass('active');

        }
    });
    $('.toggle-site-sec').click(function() {
        $('.mainMenu').toggleClass('active');
    })
    $('.humb-js').click(function() {
        $(this).find('.hamburger').toggleClass('active');

    });
    $('.js-homepage-help').on('click', function () {
        $(this).siblings('.js-homepage-popover').toggle();
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode === 27) {
            $('.js-homepage-popover').hide();
        }
    });

    $('body').on('click', function (event) {

        if (!event.target.classList.contains('js-homepage-help') &&
            !event.target.classList.contains('js-homepage-popover')
            && !$(event.target).parents('.js-homepage-popover').length
            && !$(event.target).parents('.js-homepage-help').length) {

            $('.js-homepage-popover').hide();
        }
    });


	$('.interest__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: true,
        arrows: true,
        // appendDots: $('.exclusive__block-title')
        appendDots: $('.interest header'),
        responsive: [
            {
                breakpoint: 669,
                settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
              	}	
            },
            {
                breakpoint: 1000,
                settings: {
			        slidesToShow: 4,
			        slidesToScroll: 4
              	}
            }
        ]
    });
    $('.slots__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: true,
        dots: true,
        arrows: false,
        // appendDots: $('.exclusive__block-title')
        appendDots: $('.slots header'),
        responsive: [
            {
                breakpoint: 669,
                settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
              	}	
            },
            {
                breakpoint: 1000,
                settings: {
			        slidesToShow: 5,
			        slidesToScroll: 5
              	}
            }
        ]
    });


    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        dots: true,
        arrows: false,
        appendDots: $('.reviews__action'),
         responsive: [
            {
                breakpoint: 669,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }   
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});