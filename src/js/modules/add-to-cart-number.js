'use strict';

function changeNumber() {
  var moinsBtn = document.querySelector('#moins');
  var plusBtn = document.querySelector('#plus');
  if (!moinsBtn) {
    return;
  }
  var count = 1;
  var countEl = document.getElementById("count");
  function plus(){
      count++;
      countEl.value = count;
  }
  function minus(){
    if (count > 1) {
      count--;
      countEl.value = count;
    }
  }

  moinsBtn.addEventListener("click", function () {
    minus();
  });

  plusBtn.addEventListener("click", function () {
    plus();
  });

};
