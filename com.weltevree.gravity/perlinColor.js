'use strict';
// var nice = [200, 200, 0.02, 0.002, 10, 2000, 4];
// var nice = [7280, 4320 , 0.02, 0.002, 10, 2000, 4];
var nice = [800, 800 , 0.02, 0.04, 15, 2000, 4, 23345];
// var nice = [600, 600, 0.02, 0.002, 50, 1000, 3];
var myX;
var myY;
var inc;
var incTime;
var scl;
var parts;
var magnitude;

var cols, rows;
var fr;
var time = 0;
var iteration = 0;
var colLoop = 0;
var counter = 0;

var particles = [];

var flowField;

var pg;


function setup() {
	myX = nice[0];
	myY = nice[1];
	inc = nice[2];
	incTime = nice[3];
	scl = nice[4];
	parts = nice[5];
	magnitude = nice[6];
	// noiseSeed(nice[7]);

	createCanvas(myX, myY);
	pg = createGraphics(myX, myY);
	cols = floor(width / scl);
	rows = floor(height / scl);
	pixelDensity(1);
	fr = createP('');
	flowField = new Array(cols, rows)
	for (var i = 0; i < parts; i++) {
		particles[i] = new Particle();
	}
	pg.background(255);
	updateFlowField(false);
}

function draw() {
	if(iteration > 3000){
		noLoop();
		return;
	}
	// pg.background(255);
	updateParticles();
	 updateFlowField(false);
	

	 image(pg, 0, 0);
	 fr.html(floor(frameRate()) + " " + iteration++);
}

function updateParticles(){
	var p;
	var idx;
	for (var i = 0; i < parts; i++) {
		p = particles[i];
		idx = floor(p.pos.x / scl)  + (floor(p.pos.y / scl) * rows);
		p.applyForce(flowField[idx]);
		p.update();
		show(p, idx);
	}
	colLoop++;
}

function updateFlowField(draw){
	var startY = 0;
	for (var blockY = 0; blockY < rows; blockY++) {
		var startX = 0;
		for (var blockX = 0; blockX < cols; blockX++) {
			var val = noise(startX, startY, time); // * 255;
			var v = p5.Vector.fromAngle(val * TWO_PI);
			v.setMag(magnitude);
			flowField[blockY * rows + blockX] = v;
			if(draw == true){
			pg.stroke(51);
			pg.noFill();
			pg.strokeWeight(1);
			var radius = scl/2;
			var x0 = blockX * scl + radius;
			var y0 = blockY * scl + radius;
	// pg.translate(x0ff, y0ff);
		//	pg.rect(x0-radius,y0-radius,scl,scl);
	// pg.text(ix, scl/2, scl/2)
	// console.log(v.heading());
	// pg.push();
// pg.rotate(v.heading());
			
			var mx = floor(cos(v.heading()) * radius);
			var my = floor(sin(v.heading()) * radius);
			// console.log("X:" + mx + " Y:" + my)
//			pg.text(ix, x0,y0)
			pg.line(x0-mx, y0-my, x0 + mx, y0 + my);
			pg.strokeWeight(2);
			pg.point(x0 + mx, y0 + my);
// pg.pop();
			}
			startX += inc;
		}
		startY += inc;
	}
	time += incTime;
}

function show(p, idx){
// console.log(redV);
	pg.stroke(0, 2);
	pg.strokeWeight(1);
//  pg.stroke(getColor());
//	pg.strokeWeight(1);
//	pg.strokeWeight(1);
//	pg.stroke(0);
//	pg.ellipse(p.pos.x, p.pos.y, 5, 5, 0, 100);
//
 //  pg.point(p.pos.x, p.pos.y);
   pg.line(p.pos.x, p.pos.y, p.prv.x, p.prv.y);
   
//	pg.text(idx, p.pos.x, p.pos.y)
}

function getColor(){
	if(colLoop >= 5000){
		colLoop = 0;
	}
	
	if(colLoop < 200)
	{
		return color(0,0,0, 2);
		}
	else if(colLoop < 4000){
		return color(100,0,0, 2);
}
	else {
		return color(0,0,0, 2);
}


}