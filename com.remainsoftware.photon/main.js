"use strict";

var fImage;
var fCanvas;
var w;
var h;
var fPixels;
var fFlowfield;

function getDimensions() {
	w = window.innerWidth;
	h = window.innerHeight;
}

function preload() {
	fImage = loadImage('https://i1.wp.com/www.clubdetecnologia.net/wp-content/uploads/2017/11/eclipse-logo.jpg?fit=400%2C400');
}

function setup() {
	getDimensions();
	createCanvas(w, h);
	background(128);
	fImage.loadPixels();
	h = fImage.height;
	w = fImage.width;
	fPixels = fImage.pixels;
	drawPixels();
	createFlowfield();
	// image(img, 0, 0);
}

function createFlowfield() {
	// TODO create a flowfield
}

function drawPixels() {
	for (var y = 0; y < h; y++) {
		for (var x = 0; x < w; x++) {
			let idx = 4 * (y * w + x);
			stroke(fPixels[idx + 0], fPixels[idx + 1], fPixels[idx + 2]);
			point(x, y);
		}
	}
}

function draw() {

	let idx = 4 * (mouseY * w + mouseX);
	if (fPixels.length > idx && mouseX < w && mouseY < h) {
		stroke(255, 255, 255);
		rect(mouseX, mouseY, 5, 5);
	}
}
