"use strict";

var fNumberOfChasers = 400;
var fChasers = [];
var fMaxVelocity = 10;
var fMinWidth, fMaxWidth, fMinHeight, fMaxHeight;
var fMousePosition;

function getDimensions() {
	// if(window.innerHeight/2 > 600){
	var w = window.innerWidth;
	var h = window.innerHeight;
	fMinWidth = 0;
	fMaxWidth = w;
	fMinHeight = 0;
	fMaxHeight = h;
	return [ w, h ];
}

function mousePressed() {
}

function mouseMoved() {
	fMousePosition = new Vector(mouseX, mouseY);
}

function setup() {
	fMousePosition = Vector.randomVector();
	var canvas = createCanvas(getDimensions()[0], getDimensions()[1]);
	canvas.mousePressed(mousePressed);
	canvas.mouseMoved(mouseMoved);
	for (var i = 0; i < fNumberOfChasers; i++) {
		var size = random(10);
		fChasers[i] = Chaser.newChaser(size);
	}
	console.log(fChasers);

	noStroke();
}

function draw() {
	background(51);
	for (var i = 0; i < fChasers.length; i++) {
		fChasers[i].move();
		fChasers[i].show();
	}
}