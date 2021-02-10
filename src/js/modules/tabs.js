'use strict';

(function () {
  var slider = document.querySelector('.subscribe__tabs');
  if (!slider) {
    return;
  }

  var tabs = new Tabs({
    elem: "tabs",
    open: 0
  });

})();

(function () {
  var care = document.querySelector('.care__tabs');
  if (!care) {
    return;
  }

  var tabs = new Tabs({
    elem: "care-tabs",
    open: 0
  });

})();