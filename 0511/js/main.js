$(function () {
    // 문서가 다 로딩된 후에 쓰이므로 굳이 body 후반에 js를 쓸 필요없이 header부분에 써도 실행이 된다
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
        // 지금 있는 거 = current
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

    // $('.prodict_slider').on('init reInit afterChange', function () {
    //     let current = $('.prodict_slider .slick-center');
    //     current.addClass('on').siblings().removeClass('on');
    // })

    $('.product_slider').slick({
        slidesToShow: 5,
        centerMode: true,
        arrows: false,
        dots: true,
        autoplay: true,
    });
    // 슬릭은 display: block을 만든다. 인라인이 아니니까 텍스트 얼라인으로 중간으로 안오니 마진으로 잡는다

    $('.product_list .s_left').on('click', function () {
        $('.product_slider').slick('slickPrev');
    });

    $('.product_list .s_right').on('click', function () {
        $('.product_slider').slick('slickNext');
    });

    $('.tab_link>li').on('click', function () {
        // console.log($(this), $(this).index())
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        $('.tab_content>li').eq(idx).addClass('on').siblings().removeClass('on')
        // eq가 nth-of-child와 비슷
    })

    $('.footer #link').on('change', function () {
        var lik = $(this).val();
        if (lik) window.open(lik)
        // if (lik) {window.open(lik)} 중괄호 생략 가능
        // 같은 창에서 띄우는건 document.hrl
    })



    ///////////////////////////////////////////////////////////
})