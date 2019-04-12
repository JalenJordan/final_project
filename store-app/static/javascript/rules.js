$(document).ready(function(){
     $('.feature').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1, 
          arrows: false
     });

     $(".menubtn").click(function(){
          $(".xsmenu").fadeIn();
     });
})

