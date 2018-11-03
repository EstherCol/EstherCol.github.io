$(document).ready(function(){

   // slider
   $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      dots: true
   });
   // header gamburger toggle
   $('.header__box-gamburger').click(function () {
      $(this).toggleClass('header__box-gamburger--active');
      $('.sidebar').toggle();
   });

   $('.nav-category__more').click(function () {
      if ($('.nav-category__box').height() > 82) {
         $('.nav-category__box').animate({
            'height' : '81px'
         });
      }else {
         $('.nav-category__box').animate({
            'height' : $('.nav-category__list').height()
         });
      }

   });

   $('.sidebar__dropdown').click(function () {
      // this.css('borderTop', '2px solid #13100e');
      $('.sidebar__dropdown ul').slideToggle();
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
