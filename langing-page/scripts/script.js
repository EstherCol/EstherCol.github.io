

// scroll links
 $(document).ready(function(){
 	$('.header__link').click(function(e) {
 		const id = $(this).attr('href');
 		const top = $(id).offset().top;

 		$('body,html').animate({scrollTop: top - 70}, 1000);
 		

 		e.preventDefault();
 	});
});
// sticky navbar
$( window ).scroll(function() {
	const navbar = $('.header__nav');
	const sticky = $('.services').offset().top;
	
	if ($(window).scrollTop() >= sticky) {
		navbar.addClass('header__nav--sticky');
	}else {
		navbar.removeClass('header__nav--sticky');
	}
});
// text cut
$('document').ready(function() {
	$('.header__burger').click(function() {
		$('.header__list').slideToggle();
	});

	let query  = window.matchMedia('(max-width: 948px)');
	let query2  = window.matchMedia('(min-width: 714px)');
	let query3  = window.matchMedia('(max-width: 496px)');

	let firstText = $('.blog__article-text');
	let result = '';

	for (let i = 200; i < firstText.text().length; i++) {
		if (firstText.text()[i] === ' ') {
			result = firstText.text().substring(0,i + 1) + '...';
			break;
		}
	}

	if(query.matches && query2.matches) {
		$(firstText).text(result);
	}else if (query3.matches) {
		$(firstText).text(result);
	}
});











$('.about__expand').click(function() {
	$('.about__text:last-child').slideToggle();
});


// ____________tabs___________//
$('.tab__item').not(':first').hide();

$('.tab').click(function() {
	$('.tab').removeClass('tab--active');
	$(this).addClass('tab--active');

	$('.tab__item').hide().eq( $('.tab').index(this) ).fadeIn('slow');

}).eq(0).addClass('tab--active');
// _________tabs end___________//



// without jq
// client slider comments:
const UIcontrollers = document.querySelectorAll('.clients__controller');
const UIcomments = document.querySelectorAll('.clients__slider-wrap');

let active = 0;

UIcomments.forEach(function(item, i) {
	item.classList.add('visually-hidden');
});

UIcontrollers.forEach(function(item, i) {
	UIcontrollers[active].classList.add('clients__controller--active');

	UIcomments[active].classList.remove('visually-hidden');

	item.addEventListener('click', function() {
		UIcontrollers[active].classList.remove('clients__controller--active');
		UIcontrollers[i].classList.add('clients__controller--active');

		UIcomments[active].classList.add('visually-hidden');
		UIcomments[i].classList.remove('visually-hidden');

		active = i;
	});
});
