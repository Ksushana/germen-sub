'use strict';

(function () {
  var slider = document.querySelector('.subscribe__compose-container');
  if (!slider) {
    return;
  }

  var mySwiper = new Swiper('.subscribe__compose-container', {
    slidesPerView: 4,
    loop: true,
    speed: 400,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subscribe__slider-button-next',
      prevEl: '.subscribe__slider-button-prev',
    },
    pagination: {
      el: '.subscribe__slider-pagination',
      type: 'bullets',
    },
    breakpointsInverse: true,
    breakpoints:{
      320: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: 4,
      }
    }
  });
})();

(function () {
  var slider = document.querySelector('.subscribe__mono-container');
  if (!slider) {
    return;
  }

  var mySwiper = new Swiper('.subscribe__mono-container', {
    loop: true,
    speed: 400,
    spaceBetween: 20,
    navigation: {
      nextEl: '.subscribe__slider-button-next',
      prevEl: '.subscribe__slider-button-prev',
    },
    pagination: {
      el: '.subscribe__slider-pagination',
      type: 'bullets',
    },

    breakpointsInverse: true,
    breakpoints:{
      320: {
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: 4,
      }
    }
  });
})();