/**
 * 
 */

function Terrain() {

	this.xOffset = 0;
	this.yOffset = 0.001;
	this.start = 100;
	this.counter = 0.002;

	this.draw = function() {
		this.yOffset = this.start;
		stroke(255);
		noFill();
		beginShape();
		for (var x = 0; x < width; x++) {
			stroke(255);
			vertex(x, map(noise(this.yOffset), -1, 1, 0, height));
			this.yOffset += this.counter;
		}
		endShape();
		this.start += 0.01
	}
}