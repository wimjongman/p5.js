/**
 * Image library
 */
function Image(pURL) {

	this.image = new Image();
	this.image.src = pUrl;

	/**
	 * This function processes the pixels in this image to return an array of pixels that do not match the filter.
	 */
	this.getPixels = function(pFilter) {
		this.x += pVector.x;
		this.y += pVector.y;
		var mag = this.mag();
		if (this.limit > 0 && mag > this.limit) {
			this.div(mag / this.limit);
		}
		return this;
	};

	this.clone = function(pVector) {
		if (pVector === undefined) {
			return new Vector(this.x, this.y);
		}
		return new Vector(pVector.x, pVector.y);
	};

	this.toString = function() {
		return "x:" + this.x + " y:" + this.y + " mag:" + this.mag();
	};

	this.sub = function(pVector) {
		this.x -= pVector.x;
		this.y -= pVector.y;
		return this;
	};

	this.limit = function(pLimit) {
		this.limit = pLimit || 0;
		return this;
	};

	this.scale = function(pScalar) {
		this.x *= pScalar;
		this.y *= pScalar;
		return this;
	};

	this.mag = function() {
		return Math.sqrt(Math.abs(this.x * this.x) + Math.abs(this.y * this.y));
	};

	this.normalize = function() {
		this.div(this.mag());
		return this;
	};

	this.div = function(pDiv) {
		if (pDiv === 0 || pDiv === undefined) {
			return this;
		}
		this.x /= pDiv;
		this.y /= pDiv;
		return this;
	};
}

Vector.randomVector = function(pXRange, pYRange) {
	var xRange = pXRange || 1;
	var yRange = pYRange || 1;
	var dice = Math.round(Math.random());
	var x = Math.random(xRange);
	if (dice === -1) {
		x = -x;
	}
	dice = Math.round(Math.random());
	var y = random(yRange);
	if (dice == -1) {
		y = -y;
	}

	return new Vector(x, y);
};

Vector.clone = function(pVector) {
	return new Vector(pVector.x, pVector.y);
};

if (typeof module != 'undefined') {
	module.exports = Vector;
}