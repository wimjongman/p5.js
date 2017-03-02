var fColor;
var noize;
var nextNoise = 0.00;
var TWO24 = 16777215;

function setup() {
	fColor = Math.floor(random(TWO24));
	noize = .002;
	nextNoise = random(100);

	createCanvas(7280, 4320 );
	snake = new Snake();
}

function draw() {
	getNewColor();
	var col = hex(fColor, 6);
	fill(color("#" + col));
	drawSnake();
}

function drawSnake() {
	snake.move();
	ellipse(snake.x, snake.y, snake.sprSize, snake.sprSize);
}

function getNewColor() {
	fColor += 1;
	fColor = fColor > TWO24 ? 0 : fColor;
}