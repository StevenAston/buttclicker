var butt = document.getElementById('butt');
var clickCounterBox = document.getElementById('counter');
var levelCounterBox = document.getElementById('level');
var count = 0;
var increment = 1;
var handLevel = 1;
var handLevelExp = 10;

butt.onclick = function() {
	incrementCounter();
	levelCheck();
	updateCounter(count, increment);
	buttResize();
}

function incrementCounter() {
	count += increment;
}

function updateCounter(a, b) {
	clickCounterBox.value = Math.round(a) +  "  +" + Math.round(b);
	levelCounterBox.value = "Hand Level " + handLevel;
}

function buttResizeShrink() {
	butt.style.height = "46%";
	butt.style.webkitTransform = "skewY(5deg) rotate(-5deg)";
}

function buttResizeExpand() {
	butt.style.height = "50%";
	butt.style.webkitTransform = "none";
}

function buttResize() {
	setTimeout(function() {buttResizeShrink();}, 1);
	setTimeout(function() {buttResizeExpand();}, 55);
}

function levelCheck() {
	if (count >= handLevelExp) {
		handLevelExp=count + (handLevelExp*1.4);
		handLevel+=1;
		increment=increment*1.4;
	}
}