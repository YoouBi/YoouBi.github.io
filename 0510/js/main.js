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

    $('.movie .dec i:nth-of-type(1)').on('click', function () {
        // 아이콘이 달라질 수도 있으니 선택자, 위치로 잡아준다
        $('.movie video').trigger('play')
    })

    $('.movie .dec i:nth-of-type(2)').on('click', function () {
        // 아이콘이 달라질 수도 있으니 선택자, 위치로 잡아준다
        $('.movie video').trigger('pause')
    })

    $('#myMovie').YTPlayer({
        videoURL: 'https://youtu.be/G29hY9YsMOc',
        containment: '.utube',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true
    });

    $('.utube i:nth-of-type(1)').on('click', function () {
        $('#myMovie').YTPPlay();
    });

    $('.utube i:nth-of-type(2)').on('click', function () {
        $('#myMovie').YTPPause();
    });



    ///////////////////////////////////////////////////////////
})