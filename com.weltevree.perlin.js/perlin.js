
// var nice = [200, 200, 0.02, 0.002, 10, 2000, 4];
// var nice = [7280, 4320 , 0.02, 0.002, 10, 2000, 4];
var nice = [8000, 6000 , 0.02, 0.002, 10, 1000, 4];
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
// pg.background(255);
	 updateParticles();
	 updateFlowField(false);
//	 if(counter++ == 1){
	 image(pg, 0, 0);
//	 counter = 0;
	 fr.html(floor(frameRate()) + " " + iteration++);
//	 }

}

function updateParticles(){
	for (var i = 0; i < parts; i++) {
		p = particles[i];
		var idx = floor(p.pos.x / scl) + (floor(p.pos.y / scl) * cols);
		p.applyForce(flowField[idx]);
		p.update();
		show(p);
	}
}

function updateFlowField(draw){
	var startY = 0;
	for (var blockY = 0; blockY < rows; blockY++) {
		var startX = 0;
		for (var blockX = 0; blockX < cols; blockX++) {
			var val = noise(startX, startY, time); // * 255;
			var v = p5.Vector.fromAngle(TWO_PI - (val * TWO_PI * 4));
			v.setMag(magnitude);
			flowField[blockY * rows + blockX] = v;
			if(draw == true){
			pg.stroke(0);
			pg.push();
			pg.strokeWeight(2);
			pg.translate(blockX * scl, blockY * scl);
			pg.rotate(v.heading());
			pg.line(0, 0, scl, 0);
			pg.pop();
			}
			startX += inc;
		}
		startY += inc;
	}
	time += incTime;
}

function show(p){
		// ellipse(this.pos.x, this.pos.y, 5, 5);
		pg.stroke(0, 2);
		pg.strokeWeight(1);
		pg.line(p.pos.x, p.pos.y, p.prv.x, p.prv.y);
// point(this.pos.x, this.pos.y);
}