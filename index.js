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

    var productSwiper = new Swiper(".mySwiper-product", {
        loop: true, // 무한 반복
        slidesPerView: 3, // 🔹 한 번에 3개씩 보이도록 설정
        spaceBetween: 30, // 슬라이드 사이 간격
        mousewheel: true, // 마우스 스크롤 이동
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    document.querySelector('.btn-arrow-line.next').addEventListener('click', function (event) {
        event.preventDefault(); // 기본 동작(링크 이동 등) 막기

        // archive-inner-wrapper 이동 (오른쪽 화살표)
        const wrapper = document.querySelector('.archive-inner-wrapper');
        const itemWidth = document.querySelector('.archive-inner-item').offsetWidth;
        const currentTransform = parseInt(getComputedStyle(wrapper).transform.split(',')[4]) || 0;

        // 이동
        const maxMove = -(wrapper.scrollWidth - wrapper.offsetWidth); // 최대로 이동할 거리
        if (currentTransform > maxMove) {
            wrapper.style.transition = 'transform 0.3s ease-in-out';
            wrapper.style.transform = `translateX(${currentTransform - itemWidth}px)`;
        }
    });

    document.querySelector('.btn-arrow-line').addEventListener('click', function (event) {
        event.preventDefault(); // 기본 동작(링크 이동 등) 막기

        // archive-inner-wrapper 이동 (왼쪽 화살표)
        const wrapper = document.querySelector('.archive-inner-wrapper');
        const itemWidth = document.querySelector('.archive-inner-item').offsetWidth;
        const currentTransform = parseInt(getComputedStyle(wrapper).transform.split(',')[4]) || 0;

        // 이동
        if (currentTransform < 0) {
            wrapper.style.transition = 'transform 0.3s ease-in-out';
            wrapper.style.transform = `translateX(${currentTransform + itemWidth}px)`;
        }
    });



});
