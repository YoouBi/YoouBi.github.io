$('.main_slider').slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    
    prevArrow: "<button type='button' class='slick-prev'><i class='fi fi-sr-angle-small-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='fi fi-sr-angle-small-left'></i></button>",
});

$('.menu_slider').slick({
  draggable : false ,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: '160px',
  variableWidth: true
});
