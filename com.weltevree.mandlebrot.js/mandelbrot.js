var minXValue = -2;
var maxXValue = 2;
var minYValue = -2;
var maxYValue = 2;
var canvasSz = 360;

var zoomX = 0;
var zoomY = 0;
var zoomYEnd = 0;
var zoomXEnd = 0;

var mouseWasPressed = false;

function setup() {
	createCanvas(canvasSz, canvasSz);
	pixelDensity(1);
	loadPixels();
	zoom(minXValue, maxXValue, minYValue, maxYValue);
	updatePixels();
}

/**
 * Zooms into the Mandlebrot set.
 * 
 * @param fromX
 * @param toX
 * @param fromY
 * @param toY
 * @returns
 */
function zoom(fromX, toX, fromY, toY) {

	var maxIter = 100;

	for (var x = 0; x < canvasSz; x++) {
		for (var y = 0; y < canvasSz; y++) {
			a = map(x, 0, canvasSz, fromX, toX);
			b = map(y, 0, canvasSz, fromY, toY);

			var n = 0;
			var z = 0;

			var ca = a;
			var cb = b;

			while (++n < maxIter) {
				var aa = (a * a) - (b * b);
				var bb = 2 * a * b;
				a = aa + ca;
				b = bb + cb;

				if ((a * a + b * b) > 4) {
					break;
				}
			}

			var bright = map(n, 0, maxIter, 0, 1);
			bright = map(sqrt(bright), 0, 1, 0, 255)
			if (n === maxIter) {
				bright = 0;
			}

			var pix = (x + (y * width)) * 4;
			pixels[pix + 0] = 0;
			pixels[pix + 1] = 0;
			pixels[pix + 2] = bright;
			pixels[pix + 3] = 255;

		}
	}
}

/**
 * Checks if mouse is pressed and if so, draws a square box following the mouse
 * until the mouse button is released upon which point the zoom function is
 * called again to zoom into that portion of the Mandebrot set.
 * 
 * @returns
 */
function draw() {

	if (mouseIsPressed) {
		if (!mouseWasPressed) {
			zoomX = mouseX;
			zoomY = mouseY;
		}
		updatePixels();
		stroke(255, 255, 255);
		noFill();
		zoomXEnd = zoomX + (mouseX - zoomX);
		zoomYEnd = zoomY + (mouseX - zoomX);
		rect(zoomX, zoomY, mouseX - zoomX, mouseX - zoomX);
		mouseWasPressed = true;
	}

	if (!mouseIsPressed && mouseWasPressed) {
		mouseWasPressed = false;

		var newMinXValue = map(Math.min(zoomX, zoomXEnd), 0, canvasSz,
				minXValue, maxXValue);
		var newMaxXValue = map(Math.max(zoomX, zoomXEnd), 0, canvasSz,
				minXValue, maxXValue);
		var newMinYValue = map(Math.min(zoomY, zoomYEnd), 0, canvasSz,
				minYValue, maxYValue);
		var newMaxYValue = map(Math.max(zoomY, zoomYEnd), 0, canvasSz,
				minYValue, maxYValue);

		minXValue = newMinXValue;
		maxXValue = newMaxXValue;
		minYValue = newMinYValue;
		maxYValue = newMaxYValue;

		zoom(minXValue, maxXValue, minYValue, maxYValue);
		updatePixels();
	}
}