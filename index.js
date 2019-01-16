let button = document.querySelector('button');

let bodySwitchColor = document.querySelector('.body').style.color = 'f0f0f0';
let bodySwitchBackgroundColor = document.querySelector('.body').style.backgroundColor = '#212121';

function OnOff() {
	body.classList.toggle('.body');
};

button.addEventListener('click', OnOff);