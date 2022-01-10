function buttonMethod(hyperlink) {
	window.open(hyperlink, "_self", false);
}

function setup() {	
	setButton("button1", button1Text);
	setButton("button2", button2Text);
	setButton("button3", button3Text);
	setButton("button4", button4Text);
}

function setButton(bttn, txt)
{
	var element = document.getElementById(bttn);
	element.textContent = txt;
}