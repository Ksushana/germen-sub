'use strict';

(function () {
  var slider = document.querySelector('.hero__slider');
  if (!slider) {
    return;
  }

  var mySwiper = new Swiper('.hero__slider-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 10,
    navigation: {
      nextEl: '.hero__slider-button-next',
      prevEl: '.hero__slider-button-prev',
    },
    pagination: {
      el: '.hero__slider-pagination',
      type: 'bullets',
    },
  });
})();