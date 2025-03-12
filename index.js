$(function () {
    var prevScrollTop = 0;

    document.addEventListener("scroll", function () {

        var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장

        if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
        // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
        else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
        prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장

    });

});
document.addEventListener("DOMContentLoaded", function () {
    // ✅ main Swiper 설정
    var mainSwiper = new Swiper(".mySwiper-main", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // ✅ product Swiper 설정 (스크롤로만 이동)
    // var productSwiper = new Swiper(".mySwiper-product", {
    //     loop: true, // 🔹 무한 반복 (drink5 → drink1)
    //     slidesPerView: 1,
    //     spaceBetween: 30,
    //     mousewheel: true, /* 스크롤로만 이동 */
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //     },
    // });

    var productSwiper = new Swiper(".mySwiper-product", {
        loop: true, // 무한 반복
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true, // 마우스 스크롤로만 이동
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loopAdditionalSlides: 1, // 🔹 추가 슬라이드 복제 (loop 버그 방지)
    });

});
