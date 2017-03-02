function Snake() {

	this.xOffset = 0;
	this.yOffset = 100;
	var x = 0;
	var y = 0;
	var sprSize = 0;

	this.move = function() {
		this.x = map(noise(this.xOffset), 0, 1, 0, width);
		this.y = map(noise(this.yOffset), 0, 1, 0, height);
		this.sprSize = map(noise(this.yOffset), 0, 1, 10, 500);
		this.xOffset += 0.01;
		this.yOffset += 0.01;
	}
}