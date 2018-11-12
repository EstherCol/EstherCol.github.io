$( document ).ready(function() {
   $('.owl-one').owlCarousel({
     center: true,
     loop: true,
     items:3,
     nav : true,
     margin: 45,
     // autoWidth:true,
     autoplay: true,
     navText : ["<div class='arrow-prev'></div>","<div class='arrow-next'></div>"],
     responsive : {
      0 : {
          items: 1,
          nav : false,
             center: false
      },
      490 : {
          items: 1,
             center: false,
          nav : false
      },
        500 : {
           items: 2,
           nav : false,
           center: false,
           margin: 25
        },
        730 : {
           items: 3,
           nav : true
        }
    }
   });
   $('.owl-two').owlCarousel({
      margin: 15,
     nav : true,
     items : 4,
     navText : ["<div class='arrow-prev'></div>","<div class='arrow-next'></div>"],
     responsive : {
        0 : {
           items: 2,
           nav : false
        },
        400 : {
           items: 2,
           nav : false
        },
         500 : {
            items: 3,
            nav : false
         },
         600 : {
            items: 4,
            nav : true
         }
     }
   });
   $('.owl-three').owlCarousel({
      center: true,
      loop: true,
      items:3,
      nav : true,
      margin: 45,
      navText : ["<div class='arrow-prev'></div>","<div class='arrow-next'></div>"],
      responsive : {
        0 : {
           items: 1,
           nav : false,
              center: false
        },
        490 : {
           items: 1,
              center: false,
           nav : false
        },
         500 : {
            items: 2,
            nav : false,
            center: false,
            margin: 25
         },
         730 : {
            items: 3,
            nav : true
         }
     }
   });


   $('.header__hamb').click(function () {
      $('.mobile-nav').slideToggle();
      $(this).toggleClass('header__hamb--active');
      // $('body').toggleClass('overf-h');
   })
});
