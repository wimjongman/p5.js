function Particle() {

//	this.pos = createVector(2, 2);
	this.pos = createVector(random(width), random(height));
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.prv = createVector(0, 0);
	this.maxSpeed = random(4);

	this.update = function() {
		this.prv.set(this.pos);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.vel.limit(this.maxSpeed);
		this.acc.mult(0);
		this.edges();
	}

	this.edges = function() {
		if (this.pos.x >= width) {
			this.pos.x = 2;
			this.prv.set(this.pos);
		}
		if (this.pos.x <= 0) {
			this.pos.x = width - 2;
			this.prv.set(this.pos);
		}
		if (this.pos.y >= height) {
			this.pos.y = 2;
			this.prv.set(this.pos);
		}
		if (this.pos.y <= 0) {
			this.pos.y = height - 2;
			this.prv.set(this.pos);
		}
	}

	this.applyForce = function(force) {
		this.acc.add(force);
	}
}