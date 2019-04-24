$(document).ready(function(){
     $('.feature1').slick({
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1, 
          arrows: false
     });
     $(".feature3").slick({
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


