$(function () {
    ///////////////////////////////////////////////////////////



    $('.top_banner i').on('click', function () {
        $('.top_banner').slideUp(5000);
    })

    $('.main_slider').on('init reInit afterChange', function () {
        // init reInit와 afterChange같이 이벤트는 붙여쓸 수 있다
        let current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        // console.log('변했네???');
        // console.log(current);
        // 지금 있는 current
    })

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });



    ///////////////////////////////////////////////////////////
})