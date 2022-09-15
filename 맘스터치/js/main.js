$('.main_slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
});

$('.menu_slider').slick({
  centerMode: true,
  centerPadding: '160px',
  slidesToShow: 5,
  responsive: 
    {
      breakpoint: 1200,
      settings: {
        width: "1200px",
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
});
