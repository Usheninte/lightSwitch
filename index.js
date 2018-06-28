var button = document.querySelector('button');
var body = document.querySelector('body');

function OnOff() {
	body.classList.toggle('switch');
};

button.addEventListener('click', OnOff);