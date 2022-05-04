// window.addEventListener('DOMContentLoaded', function () {
// document.querySelector('.header').style.display = 'none';
// }) 로 자체적으로 헤더를 없앨 수도 있다

// $('.header').hide().show();
// ('')을 따라서 써라 hide()안에

$(function () {
    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
        dots: true,
        // 쉼표 쓰는 이유. 뒤에 객체가 있다
        // 슬릭의 자동 슬라이드는 기본 3초. 자바스크립트에서는 3000이라고 쓴다
    });
    // 중괄호를 쳐주면 객체가 된다

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on')
        $('.mopen').toggleClass('oo')
    })

})
// $(function () { 이
// window.addEventListener('DOMContentLoaded', function () { 역할을 해줘서
// $('.header').hide(); 가 먹힌다
