var button = document.querySelector('button');
var body = document.querySelector('body');
var h3 = document.querySelector('h3');

function OnOff() {
	body.classList.toggle('switchBody');
	h3.classList.toggle('switch_h3');
};

button.addEventListener('click', OnOff);