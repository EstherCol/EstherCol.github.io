$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      dots: true
   });


   // sticky header for <= tablets
   // $( window ).scroll(function() {
   //    let query = window.matchMedia('(max-width: 768px)');
   //
   //    if (query.matches) {
   //       const header = $('.header');
   //
   //       if($(window).scrollTop()) {
  	// 			header.addClass('fixed');
   //          $('.nav-category').css({'marginTop' : '129.5px'});
  	// 		}else {
  	// 			header.removeClass('fixed');
   //          $('.nav-category').css({'marginTop' : '0'});
  	// 		}
   //    }
   // });


   // header gamburger toggle
   $('.header__box-gamburger').click(function () {
      $(this).toggleClass('header__box-gamburger--active');
      $('.sidebar').toggle();
   });

   // main info toggle
   $('.info__btn-show-all').click(function () {
      const content = $('.info__toggle');
      content.css('height', '100%');
      $('.info__fade-out').remove();
      $(this).remove();
   })

   // ask question timer
   let counter = 0;
   let id = setTimeout(function t() {
      id = setTimeout(t,1000);
      if (counter === 5){
       	clearInterval(id);
         $('.ask-question').css('display', 'block');
      }
      counter++;
   })
});
