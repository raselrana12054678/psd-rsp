$(document).ready(function(){

  $('#mobile-menu-active').meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: '.mobile-menu'
  });

    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        slidesToScroll: 1
      });


      $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        dots: true,
        slidesToScroll: 1
      });


      $('.brand-active').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        autoplay: true,
        dots: false,
        slidesToScroll: 1
      });

      $('.counter').counterUp({
        delay: 1,
        time: 1000
    });
    

})
