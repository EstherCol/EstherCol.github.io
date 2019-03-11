;(function($) {

	var defaults = {						
		page: 'section',
		breakpoint: 1300		
	};

	$.fn.cubePage = function(options) {

		var config = $.extend({}, defaults, options);

		var th = this.first(),		
		currentPage = 1, nextPage = 1,
		outClass, inClass, contentInClass, contentOutClass,
		winWidth = $(window).width();
		pageTransition = false;
		th.addClass('cube-page-container').children(config.page).addClass('cube-page');
		$('.cube-page').each(function() {
			$(this).children().wrapAll('<div class="cube-page-content-wrapper"></div>');
		});				
		widthChange();
		$('.cube-page:nth-of-type(' + currentPage +  ')').show();

		var link = '#main';
		
		var pages = $('.cube-page-container>' + config.page).length;		

		function transitionPage(dir) {
			if (!pageTransition) {
				pageTransition = true;
				$('.pager').fadeOut();
				$('.pager li').removeClass("active");
				if (dir === 'down') {
					nextPage = currentPage < pages ? currentPage + 1 : 1;						
					outClass = 'rotateCubeTopOut cube-page-top';
					inClass = 'rotateCubeTopIn';			
				}
				else if (dir === 'up') {
					nextPage = currentPage > 1 ? currentPage - 1 : pages;
					outClass = 'rotateCubeBottomOut cube-page-top';
					inClass = 'rotateCubeBottomIn';			
				}
				else if (dir === 'home') {
					nextPage = 1;					
					outClass = 'rotateCubeBottomOut cube-page-top';
					inClass = 'rotateCubeBottomIn';
				}
				else if (dir === 'end') {
					nextPage = pages;
					outClass = 'rotateCubeTopOut cube-page-top';
					inClass = 'rotateCubeTopIn';
				}
				else if (dir === 'link') {
					$('.cube-page').each(function(i) {						
						var id = $(this).attr('id');
						if (link === ('#' + id)) nextPage = i + 1;
					});
					if (currentPage > nextPage) {
						outClass = 'rotateCubeBottomOut cube-page-top';
						inClass = 'rotateCubeBottomIn';
					}
					else if (currentPage < nextPage) {
						outClass = 'rotateCubeTopOut cube-page-top';
						inClass = 'rotateCubeTopIn';
					}
					else if (currentPage == nextPage) {
						pageTransition = false;
						return false;
					}
				}
				animateTransition();
			}						
		}

		function animateTransition() {
			$('.cube-page-container>' + config.page + ':nth-of-type(' + (currentPage) + ')').addClass(outClass);
			$('.cube-page-container>' + config.page + ':nth-of-type(' + (nextPage) + ')').addClass(inClass);
			$('.cube-page-container>' + config.page + ':nth-of-type(' + (nextPage) + ')').show();

			setTimeout(function() {
				$('.cube-page-container>' + config.page + ':nth-of-type(' + (currentPage) + ')').hide();
			}, 700)

			setTimeout(function() {
				$('.cube-page-container>' + config.page + ':nth-of-type(' + (currentPage) + ')').removeClass(outClass);
				$('.cube-page-container>' + config.page + ':nth-of-type(' + (nextPage) + ')').removeClass(inClass);
				currentPage = nextPage;				
				pageTransition = false;
				$('.pager').fadeIn();
				$('.pager li:nth-child(' + currentPage + ')').addClass("active");
			}, 1000)

		}

		function anchorLink(link) {
			if (winWidth > config.breakpoint) {
				transitionPage('link');
			}
			else {
				var top = $(link + '.cube-page').offset().top;
				$('html, body').animate({
					scrollTop: top
				}, 700);
			}
		}

		function widthChange() {
			if (winWidth >= config.breakpoint) {
				$('html, body').removeClass('mobile-device').addClass('cube-page-app');
				$('.cube-page').hide();
				$('.cube-page:nth-of-type(' + currentPage +  ')').show();
				$('.pager').show();
			}
			else {
				$('html, body').removeClass('cube-page-app').addClass('mobile-device');
				$('.cube-page').show();
				$('.pager').hide();
			}
		}

		$('a.anchor').on('click', function(e) {
			e.preventDefault();
			link = $(this).attr('href');
			anchorLink(link);
		});

		$(window).on("mousewheel DOMMouseScroll", function(event) {
			if (winWidth > config.breakpoint) {
				if (event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) {
					transitionPage('down');
				}
				else if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
					transitionPage('up');
				}		
			}							
		});

		$(window).on("keydown", function(event) {
			if (winWidth > config.breakpoint) {
				if (event.keyCode == 40) {
					transitionPage('down');
				}
				else if (event.keyCode == 38) {
					transitionPage('up');
				}
				else if (event.keyCode == 36  && currentPage != 1) {
					transitionPage('home')
				}
				else if (event.keyCode == 35  && currentPage != pages) {
					transitionPage('end');
				}
			}
		});

		$(window).on('resize', function() {
			winWidth = $(this).width();
			widthChange();
		});

		return this;

	};
})(jQuery);