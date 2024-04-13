let GoToTop = document.getElementById('scrollToUp');

GoToTop.addEventListener('click', function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});