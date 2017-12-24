const $burger = document.getElementById('js-burger');

$burger.addEventListener('click', function() {
  this.classList.toggle('isActive');
});