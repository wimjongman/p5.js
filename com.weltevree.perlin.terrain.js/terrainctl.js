var ter;

function setup() {
	createCanvas(800, 800);
	ter = new Terrain();
}

function draw() {
	background(0);
	ter.draw();
}