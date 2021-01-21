'use strict';

function  showDiscription() {
  var text = document.querySelector('.product-info__discription-text');
  var show = document.querySelector('.product-info__discription-show');

  if (!text) {
    return;
  }

  show.addEventListener("click", function () {
    text.classList.add("full-text");
  });
};

function  showFeatures() {
  var features = document.querySelector('.product-info__features');
  var show = document.querySelector('.product-info__features-show');

  if (!features) {
    return;
  }

  show.addEventListener("click", function () {
    features.classList.add("full-text");
  });
};
