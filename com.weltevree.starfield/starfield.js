"use strict";

var fNumberOfStars = 500;
var fStars = [];
var fMaxVelocity = 10;
var fMinWidth, fMaxWidth, fMinHeight, fMaxHeight;
var fMode = true;
var fColorMode = true;

function getDimensions() {
	// if(window.innerHeight/2 > 600){
	var w = window.innerWidth;
	var h = window.innerHeight;
	fMinWidth = -(w / 2);
	fMaxWidth = (w / 2);
	fMinHeight = -(h / 2);
	fMaxHeight = (h / 2);
	return [ w, h ];
}

function flip() {
	fMode = !fMode;
	if (fMode) {
		fColorMode = fColorMode == 3 ? 0 : fColorMode + 1;
		fill(255, 255, 255);
	}
	console.log(fMode);
}

function setup() {
	var canvas = createCanvas(getDimensions()[0], getDimensions()[1]);
	canvas.mousePressed(flip);

	for (var i = 0; i < fNumberOfStars; i++) {
		fStars[i] = Star.newStar();
	}

	noStroke();
}

function draw() {
	translate(fMaxWidth, fMaxHeight);
	background(51);
	for (var i = 0; i < fStars.length; i++) {
		fStars[i].move();
		fStars[i].show();
	}
}

function Star(pPosition, pVelocity) {

	this.position = pPosition;
	this.velocity = pVelocity;
	this.starSize = 1;
	this.magnitude = .001;
	this.color = random(50) + 200;

	this.move = function() {
		if (this.position.x > fMaxWidth || this.position.x < fMinWidth
				|| this.position.y > fMaxHeight || this.position.y < fMinHeight) {
			this.init();
			if (!fMode) {
				this.position.x += map(mouseX, 0, width, fMinWidth, fMaxWidth);
				this.position.y += map(mouseY, 0, height, fMinHeight,
						fMaxHeight);
				// console.log(this.position.x);
			}
		}
		this.position.add(this.velocity);
		if (fMode) {
			this.starSize = map(mouseX, 0, width, 1, 1.1);
		}
		this.velocity.scale(this.starSize);
	};

	this.init = function() {
		this.position = Vector.randomVector();
		this.velocity = Vector.randomVector();
	}

	this.show = function() {
		if (fMode) {
			this.magnitude = map(mouseY, 0, height, .001, 1);
		}
		this.setColor();
		ellipse(this.position.x, this.position.y, this.position.mag()
				* this.magnitude, this.position.mag() * this.magnitude);
	};

	this.setColor = function() {
		if (fColorMode == 1) {
			fill(this.color, 0, 0);
		}
		if (fColorMode == 2) {
			fill(0, this.color, 0);
		}
		if (fColorMode == 3) {
			fill(0, 0, this.color);
		}
	}
};

Star.newStar = function() {
	return new Star(Vector.randomVector(), Vector.randomVector());
};

function Vector(pX, pY) {

	this.x = pX;
	this.y = pY;

	this.add = function(pVector) {
		this.x += pVector.x;
		this.y += pVector.y;
	}

	this.scale = function(pScalar) {
		this.x *= pScalar;
		this.y *= pScalar;
	}

	this.mag = function() {
		return sqrt(abs(this.x * this.x) + abs(this.y * this.y));
	}
}

Vector.randomVector = function() {
	var dice = round(random());
	var x = random();
	if (dice == 1) {
		x = -x;
	}
	dice = round(random());
	var y = random();
	if (dice == 1) {
		y = -y;
	}

	return new Vector(x, y);
}

if (typeof module != 'undefined') {
	module.exports = Vector;
}