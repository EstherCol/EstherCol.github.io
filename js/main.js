$(document).ready(function(){
   $(".owl-carousel").owlCarousel({
      items:1,
      loop:true,
      dots: true
   });

   $(function() {
      $('.lazy').Lazy();
   });

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
