$(function(){
  //  SERVICE SLIDER PART
        $('.experiance_slider').slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
          vertical:true,
          autoplay: true,
          autoplaySpeed: 700,
          speed: 1100,
          prevArrow:'<i class="fas fa-chevron-up prev_btn"></i>',
          nextArrow:'<i class="fas fa-chevron-down next_btn"></i>',
          centerMode:true,
          centerPadding:'0',
          responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow:1
              }
            }
          ]
        });
         
   // Back to Top 
   var btn = $('.backtotop');

   $(window).scroll(function() {
     if ($(window).scrollTop() > 300) {
       btn.addClass('show');
     } else {
       btn.removeClass('show');
     }
   });
   btn.on('click', function(e) {
     e.preventDefault();
     $('html, body').animate({scrollTop:0}, '300');
   });
 
// Navbar scrolalar add class
  $(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('.header').addClass('newclass');
  } else {
     $('.header').removeClass('newclass');
  }
});
  
// navbar off can list
var list = $('.js-dropdown-list');
var link = $('.js-link');
link.click(function(e) {
  e.preventDefault();
  list.slideToggle(200);
}); 
  
  
  });
  
