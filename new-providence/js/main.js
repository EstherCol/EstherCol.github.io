new WOW().init();
  	$('document').ready(function () {

  		// sticky
  		$(window).scroll(function() {
  			if( $(window).scrollTop() ) {
  				$('.header__nav').addClass('fixed');
  				$('.header__title').addClass('mt97');
  			}else {
  				$('.header__nav').removeClass('fixed');
  				$('.header__title').removeClass('mt97');
  			}
  		});
		// const navbar = $('.header__nav');
		// const sticky = $('.services').offset().top;
		
		// if ($(window).scrollTop() >= sticky) {
		// 	navbar.addClass('header__nav--sticky');
		// }else {
		// 	navbar.removeClass('header__nav--sticky');
		// }



  		// slide menu
  		$('.header__menu').click(function() {
  			$('.header-slide').toggleClass('open');

  			$('.header-slide__close').click(function() {
  				$('.header-slide').removeClass('open');
  			});
  		});


  		// slider interface
  		$('.interface__slider').slick({
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  centerMode: true,
		  variableWidth: true,
		  arrows: false,
		  autoplay : true,
		  autoplaySpeed : 5000
		});


  		// customers
  		let activeCuctomer = 1
		$('.customers__slide').hide();
		$('.customers__slide:nth-child(' + activeCuctomer + ')').fadeIn();

		$('.customers__item').click(function() {
			$('.customers__item').removeClass('customers__item--current');
			$(this).addClass('customers__item--current');

			$('.customers__slide').hide().eq( $(this).index() ).fadeIn();
		})


		// switch
		$('.plan__select').click(function() {
			$('.plan__select').removeClass('plan__select--active');
			$(this).addClass('plan__select--active');
		});
	});