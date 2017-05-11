/**
 * Object that chases the mouse 
 */
function Chaser(pPosition, pVelocity, pSize) {

	this.position = pPosition;
	this.velocity = pVelocity;
	this.force = new Vector(0, 0);
	this.size = pSize;

	this.move = function(pTarget) {
		this.velocity.add(this.force);
		this.position.add(this.velocity);
		this.calcForce();
		return this;
	};

	this.calcForce = function() {
		this.force = fMousePosition.clone().sub(this.position).normalize();
	}

	this.init = function() {
		this.position = Vector.randomVector(fMaxWidth, fMaxHeight);
		this.velocity = Vector.randomVector();
		return this;
	}

	this.show = function() {
		this.setColor();
		ellipse(this.position.x, this.position.y, this.size, this.size);
		return this;
	};

	this.setColor = function() {
		return this;
	}
};

Chaser.newChaser = function(pSize) {
	var velocity = Vector.randomVector().limit(random(7) + 10);
	return new Chaser(Vector.randomVector(fMaxWidth, fMaxHeight), velocity, pSize);
};
