var button = document.querySelector('button');
var body = document.querySelector('body');
var h3 = document.querySelector('h3');

function OnOff() {
	body.classList.toggle('switchBody');
};

button.addEventListener('click', OnOff);