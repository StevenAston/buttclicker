var butt = document.getElementById('butt');
var clickCounterBox = document.getElementById('counter');
var count = 0;
var increment = 1;

butt.onclick = function() {
	count += increment;
	clickCounterBox.value = count;
	updateIncrement();
}

function incrementCounter() {
	count += increment;
}

function updateCounter() {
	clickCounterBox.value = count;
}

function buttResizeShrink() {
	butt.style.width = "50%";
}

function buttResizeExpand() {
	butt.style.width = "90%";
}

function buttResize() {
	for (i = 90; i >= 80; i--) {
		butt.style.width = i + "%";
	}
	for (i = 80; i <= 90; i++) {
		butt.style.width = i + "%";
	}
}

function updateIncrement() {
	if (count == 10) {
		increment+=1;
	} else if (count == 100) {
		increment+=3;
	} else if (count == 1000) {
		increment+=10;
	}
}

updateCounter();