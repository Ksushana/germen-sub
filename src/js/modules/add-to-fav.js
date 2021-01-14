'use strict';

(function () {
  var favBtns = document.querySelectorAll('.promo-item__add-to-fav-btn');

  for (let index = 0; index < favBtns.length; index++) {
    const favBtn = favBtns[index];
    favBtn.addEventListener("click", function () {
      favBtn.classList.toggle("red-heart");
    });
  }
})();
