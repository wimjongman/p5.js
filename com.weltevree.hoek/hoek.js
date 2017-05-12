var fUur;
var fMin;
var fSec;
var fXOff = 100;
var fYOff = 100;
var fBoxSize = 150;
var radius = fBoxSize / 2;
var fRealX = fXOff + radius;
var fRealY = fYOff + radius;
var fr;

function setup() {
	fUur = (360 / 12) * ((hour() > 12) ? hour() - 12 : hour());
	fMin = (360 / 60) * minute();
	fSec = (360 / 60) * second();
	createCanvas(500, 500);
	fr = createP('');
	fr.html(floor(frameRate()));
	// frameRate(1);

}

function draw() {
	// background(255);
	strokeWeight(1);
	stroke(51);
	rect(fXOff, fYOff, fBoxSize, fBoxSize);

	var x = cos(radians(fUur - 90)) * radius / 2;
	var y = sin(radians(fUur - 90)) * radius / 2;
	line(fRealX, fRealY, x + fRealX, y + fRealY);

	x = cos(radians(fMin - 90)) * (3 * radius / 4);
	y = sin(radians(fMin - 90)) * (3 * radius / 4);
	line(fRealX, fRealY, x + fRealX, y + fRealY);

	x = cos(radians(fSec - 90)) * radius;
	y = sin(radians(fSec - 90)) * radius;
	line(fRealX, fRealY, x + fRealX, y + fRealY);

	fSec += radians(360/60);
	if (fSec == 360) {
		fSec = 0;
		fMin += 1;
	}
	if (fMin == 360) {
		fMin = 0;
		fUur += 1;
	}
	if (fUur == 360) {
		fUur = 0;
	}

	fr.html(floor(frameRate()));

}