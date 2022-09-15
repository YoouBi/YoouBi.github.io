$('.main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$('.menu_slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
