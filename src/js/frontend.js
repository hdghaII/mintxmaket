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
$('.faq__item--button').on('click', function() {
  let opener = $(this).parent().find('.faq__item--content');
  if( !opener.hasClass('active') ) {
    opener.addClass('active');
    $(this).html('-');
  } else {
    opener.removeClass('active');
    $(this).html('+');
  }
});
  $('.header__lang').on('click', function() { 
    if( !$('.header__lang').hasClass('active') ) {
      $('.header__lang').addClass('active');

    } else {
      $('.header__lang').removeClass('active');

    }
  });
  $('.exchange__first--item').on('click', function() {
    if( !$(this).hasClass('active') ) {
      $('.exchange__first--item').removeClass('active');
       $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
  $('.header__burger--wrapper').on('click', function() {
    if( !$('.header__burger').hasClass('active') ) {
       $('.header__burger').addClass('active');
       $('html').addClass('no-scroll');
       $('body').addClass('no-scroll')
       $('.menu').addClass('active');
    } else {
      $('.header__burger' ).removeClass('active');
      $('html').removeClass('no-scroll');
      $('body').removeClass('no-scroll')
      $('.menu').removeClass('active');
    }
  });
  
  $('.exchange__second--item').on('click', function() {
    if( !$(this).hasClass('active') ) {
      $('.exchange__second--item').removeClass('active')
       $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
  $('.exchange__second--btn').on('click', function() {
    $('.exchange__second--btn').removeClass('active')
    if( !$(this).hasClass('active') ) {
       $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
  $('.exchange__first--btn').on('click', function() {
    $('.exchange__first--btn').removeClass('active')
    if( !$(this).hasClass('active') ) {
       $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });
  var imageElement = document.getElementById('header__theme');
  var lightThemeImageSrc = './assets/img/theme__light.svg';
  var darkThemeImageSrc = './assets/img/theme__dark.svg';
  
  // Track the current theme state
  var isDarkTheme = false;
  
  // Function to toggle the theme
  function toggleTheme() {
      if (isDarkTheme) {
          imageElement.src = lightThemeImageSrc; // Switch to light theme
      } else {
          imageElement.src = darkThemeImageSrc; // Switch to dark theme
      }
      // Toggle the theme state
      isDarkTheme = !isDarkTheme;
  }
  
  // Add a click event listener to the image element
  imageElement.addEventListener('click', toggleTheme);
