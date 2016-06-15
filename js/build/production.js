
document.addEventListener('DOMContentLoaded', function () {

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(e) {
drawer.classList.toggle('open');
e.stopPropagation();
});

main.addEventListener('click', function() {
drawer.classList.remove('open');
});

});


