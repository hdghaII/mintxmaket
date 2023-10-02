"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
      });
});
