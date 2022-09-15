$('.main_slider').slick({
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
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
