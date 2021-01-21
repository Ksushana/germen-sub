'use strict';

window.showDiscription = () => {
  var text = document.querySelector('.product-info__discription-text');
  var show = document.querySelector('.product-info__discription-show');

  if (!text) {
    return;
  }

  show.addEventListener("click", function () {
    text.classList.add("full-text");
  });
};
