'use strict';

(function () {
  var ESC = 27;
  var button = document.querySelector('.temporary-closed__btn');
  var close = document.querySelector(".temporary-closed__close");
  var overlay = document.querySelector(".temporary-closed");

  if (!overlay) {
    return;
  }

  var closeModal = function () {
    overlay.classList.remove("modal-show");
    setTimeout(function(){
      overlay.classList.add("z-index");
    }, 300);
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === ESC) {
      if (overlay.classList.contains("modal-show")) {
        evt.preventDefault();
        closeModal();
      }
    }
  });

  overlay.addEventListener("click", function (evt) {
    if (evt.target === overlay) {
      closeModal();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeModal();
  });

  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    closeModal();
  });

})();