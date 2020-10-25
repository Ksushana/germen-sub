

'use strict';

(function () {
  var accord = document.querySelector('.faq__accord');
  if (!accord) {
    return;
  }

  var accordion = new Accordion({
    element: 'accordion',
    openTab: 1,
    oneOpen: true
  });

})();