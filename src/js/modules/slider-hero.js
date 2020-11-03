'use strict';

(function () {
  var slider = document.querySelector('.hero__slider');
  if (!slider) {
    return;
  }

  var mySwiper = new Swiper('.hero__slider-container-index', {
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

  var mySwiper = new Swiper('.hero__slider-container-1', {
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

  var mySwiper = new Swiper('.hero__slider-container-2', {
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

(function () {
  var mono = document.querySelector(".subscribe-page__form-type--mono");
  var compose = document.querySelector(".subscribe-page__form-type--compose");
  var monoSlider = document.querySelector(".hero__slider-container-1");
  var composeSlider = document.querySelector(".hero__slider-container-2");

  if (!composeSlider) {
    return;
  }


  mono.addEventListener("click", function() {
    monoSlider.classList.remove("visually-hidden");
    composeSlider.classList.add("visually-hidden");
  });

  compose.addEventListener("click", function() {
    monoSlider.classList.add("visually-hidden");
    composeSlider.classList.remove("visually-hidden");
  });
})();