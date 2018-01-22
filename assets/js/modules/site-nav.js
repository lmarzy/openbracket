const $burger = document.getElementById('js-burger');
const $body = document.getElementsByTagName('body')[0];

$burger.addEventListener('click', function() {
  $body.classList.toggle('navActive');
  this.classList.toggle('isActive');
});