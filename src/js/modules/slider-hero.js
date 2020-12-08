'use strict';

(function () {
  var slider = document.querySelector('.hero__slider');
  if (!slider) {
    return;
  }

  var mySwiper1 = new Swiper('.hero__slider-container-index', {
    slidesPerView: 1,

    spaceBetween: 10,
    pagination: {
      el: '.hero__slider-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',

    onlyExternal: true,
    noSwipingClass: ".hero__slider-container-index .swiper-slide",
    breakpointsInverse: true,
    breakpoints: {
      320: {
        noSwiping: false,
        loop: true,
        speed: 400,
      },
      768: {
        noSwiping: true,
        speed: 1000,
      }
    }

  });

  mySwiper1.on('slideChange', function () {
    setTimeout(() => {
      var resr = document.querySelector(".swiper-slide.swiper-slide-resr");
      var office = document.querySelector(".swiper-slide.swiper-slide-office");
      var home = document.querySelector(".swiper-slide.swiper-slide-home");
      var titleRest = document.querySelector(".hero__title .change-title .rest");
      var titleOffice = document.querySelector(".hero__title .change-title .office");
      var titleHome = document.querySelector(".hero__title .change-title .home");

      if (resr.classList.contains('swiper-slide-active')) {
        titleRest.classList.remove('hidden');
        titleOffice.classList.add('hidden');
        titleHome.classList.add('hidden');
      }

      if(office.classList.contains('swiper-slide-active')) {
        titleRest.classList.add('hidden');
        titleOffice.classList.remove('hidden');
        titleHome.classList.add('hidden');
      }
      if(home.classList.contains('swiper-slide-active')) {
        titleRest.classList.add('hidden');
        titleOffice.classList.add('hidden');
        titleHome.classList.remove('hidden');
      }
    }, 10);
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
  mySwiper.on('slideChange', function () {
      console.log('slide changed');
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

(function () {

})();