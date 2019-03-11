$(document).ready(function () {

    //CubePage
    if ($('body').hasClass('cuber-page')) {
        if ($('.wrapper').length) $('.wrapper').cubePage({});
        $('.pager ul li:nth-child(1)').addClass('active');
    }

    // services slider
    $('.service-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        smartSpeed: 400,
        navText: ['<div class="slider-arrow-prev"></div>', '<div class="slider-arrow-next"></div>']
    });
    // alignmentByHeight('.employee__info');


    $('.service__show-more').click(function () {
        $('.service-slider .slider-arrow-next').click();
    });


    $('.feedback-slider').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        smartSpeed: 400,
        navText: ['<div class="slider-arrow-prev"></div>', '<div class="slider-arrow-next"></div>']
    });

    // banner button scroll
    $('.user-scroll').click(function () {
        $('.pager ul li:nth-child(2) a').click();
    });

    let idleState = false; 
    let timerId;
    (function () {
        let isShowed = false;
        let idleWait = 20000; 
    
        $(document).bind('mousemove keydown scroll', function(){
            clearInterval(timerId);
            
            if (!isShowed) {
                idleState = true;
                timerId = setTimeout(function(){ 
                    showPopup('.manage-form');
                    isShowed = true;
                }, idleWait);
            }
        });
    })();


    // popups
    $('.to-connection').click(function (e) {
        e.preventDefault();
        if (window.matchMedia('(min-width: 1300px)').matches) {
            $('a[href$="#connection"]').click();
        } else {
            $('.slider-menu').slideUp();
            $('html, body').animate({
                scrollTop: $('#connection').offset().top
            }, 500, function() {
                $('body').removeClass('ovf');
                $('html').removeClass('ovf');
            });
        }
    });
    $('.request-link').click(function(e) {
        e.preventDefault();
        $('.slider-menu').slideUp();
        showPopup('.request-form');
    });
    $('.service-item__link').click(function (e) {
        e.preventDefault();
        showPopup('.service-form');
    })

    $('.popup__close').click(closePopup);
    $('.popup__bg').click(closePopup);

    function showPopup(elem) {
        clearInterval(timerId);
        idleState = true; 
        $('body').addClass('ovf');
        $('html').addClass('ovf');

        $('.popup').fadeIn();

        $(elem).fadeIn();
    }

    function closePopup() {
        idleState = false; 
        $('body').removeClass('ovf');
        $('html').removeClass('ovf');
        $('.popup').fadeOut(300, function () {
            $('.popup__form').hide();
        });
    }
    $('.dropdown-cat__link--active').closest('.dropdown-cat').addClass('dropdown-cat--active').find('.dropdown-cat__list').show();
    $('.dropdown-cat__btn').click(function (e) {
        e.preventDefault();
        $('.dropdown-cat__list').slideUp();

        const parent = $(this).closest('.dropdown-cat');
        
        if (parent.hasClass('dropdown-cat--active')) {
            parent.removeClass('dropdown-cat--active');
        } else {
            $('.dropdown-cat--active').removeClass('dropdown-cat--active');
            parent.addClass('dropdown-cat--active');
        }
        
        if (parent.find('.dropdown-cat__list').is(':hidden')) {
            parent.find('.dropdown-cat__list').slideDown();
        }
    });


    textCut('.news-sidebar-item__text', 76);

    function alignmentByHeight(elem) {
        let maxHeight = 0;
        $(elem).height("auto").each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        }).height(maxHeight);
    };

    function textCut(item, length) {
        $(item).each(function () {
            if ($(this).text().length > length) {
                $(this).text($(this).text().substring(0, length - 4) + "...");
            }
        });
    }
    $('.header-menu-open').click(function() {
        $('body').addClass('ovf');
        $('html').addClass('ovf');

        $('.slider-menu').slideDown();
    });
    $(".slider-menu__close").click(function() {
        $('body').removeClass('ovf');
        $('html').removeClass('ovf');

        $('.slider-menu').slideUp();
        $('.dropdown-menu').slideUp();
    });
    

    // media
    if (window.matchMedia('(max-width: 1500px)').matches) {
        textCut('.news-sidebar-item__text', 56);
    }
    if (window.matchMedia('(max-width: 1320px)').matches) {
        $('body').addClass('mobile-device');
    }
    if (window.matchMedia('(max-width: 900px)').matches) {
        const nav = document.querySelector('.contact-tiny');
        const contact = document.querySelector('.main-nav');
        document.querySelector('.slider-menu-nav').appendChild(contact);
        document.querySelector('.slider-menu-nav').appendChild(nav);

        const links = $('.link-dropdown');
        const secondMenu = links.find('.link-dropdown');

        links.addClass('mobile-drop');
        links.removeClass('link-dropdown');
        
        secondMenu.removeClass('mobile-drop');
        secondMenu.removeClass('link-dropdown');
        secondMenu.addClass('mobile-drop-second');

        $('.mobile-drop > .main-nav__link').click(function() {

            $('.mobile-drop dropdown-menu').slideUp();
            const menu = $(this).siblings('.dropdown-menu');

            menu.slideToggle();
            
            
        });

        $('.mobile-drop-second > .dropdown-menu__link').click(function() {

            // $('.mobile-drop-second dropdown-menu').slideUp();
            const menu = $(this).siblings('.dropdown-menu');
            
            if (menu.is(':visible')) {
                menu.slideUp();
            } else {
                $('.mobile-drop-second').find('.dropdown-menu').slideUp();
                menu.slideToggle();
            }
        });
        
    }
    if (window.matchMedia('(max-width: 540px)').matches) {
        $('.banner__video-bg').remove();

        $('h2.section-heading').wrap('<div class="section-heading-wrap"></div>');

        $('.service-form__wrap').height($(window).height() - 70);
    }

});