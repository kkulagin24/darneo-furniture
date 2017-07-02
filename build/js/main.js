var popupOpen = document.querySelector('.header-top__btns');


popupOpen.addEventListener('click', function(e) {
  if(e.target.dataset.popup) {
    var popup = document.getElementById(e.target.dataset.popup);
    popup.classList.add('overlay--show');
    var close = popup.querySelector('.feed-back__close');

    close.addEventListener('click', function() {
       popup.classList.remove('overlay--show');
    });

  }
})

