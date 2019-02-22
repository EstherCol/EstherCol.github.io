$(document).ready(function() {
    if (window.matchMedia('(min-width: 1150px)').matches) {
        $('.technology__list').masonry({
            // options
            itemSelector: '.technology__item',
            columnWidth: '.technology__item',
            gutter: 30,
            horizontalOrder: true
        });
    }



    if (window.matchMedia('(max-width: 433px)').matches) {

       $('.pp').attr('src', 'img/pp-mobile.png')

       // subtitle text change
    }

    // section 'direction' 
    // margin controll
    function marginControll() {
        if (window.matchMedia('(min-width: 540px)').matches) {

            $('.direction').css('margin-top', -$('.direction__list').height() / 2 - 27);
    
        }
    };
    marginControll();
    
    // swap direction item
    jQuery.fn.swap = function(b) {
        b = jQuery(b)[0];
        var a = this[0],
            a2 = a.cloneNode(true),
            b2 = b.cloneNode(true),
            stack = this;
    
        a.parentNode.replaceChild(b2, a);
        b.parentNode.replaceChild(a2, b);
    
        stack[0] = a2;
        return this.pushStack( stack );
    };
    if (window.matchMedia('(max-width: 540px)').matches) {
        $('.direction__list .direction__item:nth-child(3)').swap('.direction__list .direction__item:nth-child(4)');
        
    }


    // advantages item width controll
    function widthControll() {
        if (window.matchMedia('(min-width: 820px)').matches) {
            $('.advantages__item').each(function() {
                const titleWidth = $(this).find('.advantages__title').width();
                $(this).width(titleWidth);
            });
            alignmentByHeight('.advantages__text');
        } 
        else if (window.matchMedia('(max-width: 540px)').matches) {
            $('.advantages__item').each(function() {
                const title = $(this).find('.advantages__title');
                title.css('width', 'auto');
                const width = title.width();
                title.css('width', '100%');

                $(this).width(width + 30);
            }); 
        }
    };
    widthControll();

    function alignmentByHeight(elem) {
		let maxHeight = 0;
		$(elem).height("auto").each(function () {
			if ($(this).height() > maxHeight) {
				maxHeight = $(this).height();
			}
		}).height(maxHeight);
    };

    $('.about__view').height($('.about__view > ul').height());


    var currentX = '';
    var currentY = '';
    var movementConstant = .015;
    $('.partners').mousemove(function(e) {
        if(currentX == '') currentX = e.pageX;
        var xdiff = e.pageX - currentX;
        currentX = e.pageX;
         if(currentY == '') currentY = e.pageY;
        var ydiff = e.pageY - currentY;
        currentY = e.pageY; 
        $('.partners .circle').each(function(i, el) {
            var movement = (i + 1) * (xdiff * movementConstant / 8);
            var movementy = (i + 5) * (ydiff * movementConstant / 8);
            var newX = $(el).position().left + movement;
            var newY = $(el).position().top + movementy;
            $(el).css('left', newX + 'px');
            $(el).css('top', newY  + 'px');
        });
      });


    $('.partners__scroll').on('click', function(e) {
        e.preventDefault();

        const target = $( $(this).attr('href') );
    
        if( target.length ) {
            $('html, body').animate({
                scrollTop: target.offset().top + 1
            }, 700);
        }
    });

    const left = $('.technology__mobile-left');
        
    const right = $('.technology__mobile-right');
    
    if (window.matchMedia('(max-width: 540px)').matches) {     
        left.append($('.technology__item--direct'));
        left.append($('.technology__item--metrika'));
        left.append($('.technology__item--wordstat'));
        left.append($('.technology__item--cerebro'));
        left.append($('.technology__item--facebook-ads'));
        right.append($('.technology__item--google-abs'));
        right.append($('.technology__item--google-analytics'));
        right.append($('.technology__item--pr-cy'));
    }

});