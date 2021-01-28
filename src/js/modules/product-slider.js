window.productMainSlider = () => {
  var slider = document.querySelector('.product-slider');
  if (!slider) {
    return;
  }

  var mySwiper = new Swiper('.product-slider', {
    loop: true,
    speed: 400,
    spaceBetween: 5,
    slidesPerView: "auto",
    pagination: {
      el: '.product-slider__pagination',
      type: 'bullets',
    },
    breakpointsInverse: true,
    navigation: {
      nextEl: '.product-slider__next',
      prevEl: '.product-slider__prev',
    },
    breakpoints:{
      320: {
        slidesPerView: "auto",
      },
      1130: {
        slidesPerView: "1",
      }
    }
  });
};
window.productAddSlider = () => {
  var slider = document.querySelector('.product-add-slider');
  if (!slider) {
    return;
  }

  var mySwiper = new Swiper('.product-add-slider', {
    loop: true,
    speed: 400,
    spaceBetween: 8,
    slidesPerView: "auto",
  });
};