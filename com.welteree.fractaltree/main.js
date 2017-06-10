"use strict";

var maxIterations = 9;

function getDimensions() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	return [ w, h];
}

function mousePressed() {
	background(200);
	for (var i = 300; i < window.innerWidth; i += 300) {
		new Branch(maxIterations).draw(i, window.innerHeight);
	}
}

function mouseMoved() {
}

function setup() {
	var canvas = createCanvas(getDimensions()[0], getDimensions()[1]);
	canvas.mousePressed(mousePressed);
	canvas.mouseMoved(mouseMoved);
}