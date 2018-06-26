var button = document.querySelector('button');
var body = document.querySelector('body');

function OnOff() {
	if (body.style.background != "black") {
		body.style.background = "black";
	}
	else {
		body.style.background = "white";
	};
};

button.addEventListener("click", OnOff);
