

'use strict';

(function () {
  var accord = document.querySelector('.faq__accord');
  if (!accord) {
    return;
  }

  var accordion = new Accordion({
    element: 'accordion',
    openTab: false,
    oneOpen: false
  });

  var btns = document.querySelectorAll('.faq__btn')
  for ( var index = 0; index < btns.length; index++) {
    var btn = btns[index];
    btn.addEventListener("click", function() {
      btns.forEach(btn => {
        btn.classList.remove('rotate')
      });
    });
  }
})();
