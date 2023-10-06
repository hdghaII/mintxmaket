"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 49,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
                slideToClickedSlide: true,
            },
            // when window width is >= 480px
            400: {
                slidesPerView: 2,
                spaceBetween: 0,
                slideToClickedSlide: true,
            },
            // when window width is >= 640px
            800: {
                slidesPerView: 3,
                spaceBetween: 49,
                slideToClickedSlide: true,
            },
        }
      });
});
