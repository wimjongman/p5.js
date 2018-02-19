var fCols, fRows;
var fScale = 10;
var fWidth = 500;
var fHeight = 500;
var fFrameRateParagraph;
var fFlowField;
var fObjects;
var fObjectCount = 5;

function setup() {
	createCanvas(fWidth + 1, fHeight + 1);
	// pg = createGraphics(myX, myY);
	fCols = floor(fWidth / fScale);
	fRows = floor(height / fScale);
	pixelDensity(1);
	fFrameRateParagraph = createP('');
	fFlowField = new Array(fCols, fRows)
	initObjects();
	initFlowField();
}

function initObjects(){
	fObjects = new Array(fObjectCount);
	for(var i=0; i< fObjectCount; i++){
		var objectX = Math.floor(Math.random() * (fWidth - fScale));
		var objectY = Math.floor(Math.random() * (fHeight - fScale));
		fObjects[i] = new Vector(objectX, objectY);
	}
}

function initFlowField(){
	
	
	
}



function draw() {
	background(255);
	updateFlowField(true);
	fFrameRateParagraph.html(floor(frameRate()));
}

function updateFlowField(pDraw) {
	if (pDraw) {
		drawFlowFieldBoxes();
//		drawFlowFieldMatrix();
	}
	drawObjects();
}

function drawObjects(){
	for (var i = 0; i < fObjectCount; i++) {
		ellipse(fObjects[i].x, fObjects[i].y);
	}
}

function drawFlowFieldMatrix(){
	for (var row = 0; row <= fRows; row++) {
		line(row * fScale, 0, row * fScale, fWidth);
	}
	for (var col = 0; col <= fCols; col++) {
		line(0, col * fScale, fHeight, col * fScale);
	}
	
}

function drawFlowFieldBoxes(){
	for (var row = 0; row < fRows; row++) {
		for (var col = 0; col < fCols; col++) {
			doDrawFlowFieldBox(row, col);
		}
	}
}

function doDrawFlowFieldBox(pRow, pCol) {
	push();
	stroke(100);
	translate(pRow * fScale, pCol * fScale);
	line(0, 0, fScale, 0);
	line(fScale, 0, fScale, fScale);
	line(fScale, fScale, 0, fScale);
	line(0, fScale, 0, 0, 0);
	pop();
}