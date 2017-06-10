/**
 * Branch object
 */
function Branch (pMaxIterations, pIteration) {
	var maxIterations = pMaxIterations;
	var currentIteration;
	var branch1, branch2;
	if (pIteration === undefined) {
		currentIteration = 1;
	} else {
		currentIteration = pIteration;
	}

	var x = (Math.random() * 200);
	var y = (Math.random() * 200);
    var vector = new Vector(x / currentIteration, y / currentIteration);

	if (currentIteration < maxIterations) {
		branch1 = new Branch(maxIterations, currentIteration + 1);
		branch1.getVector().x *= -1;
		branch2 = new Branch(maxIterations, currentIteration + 1);
	}

	if (currentIteration == 1) {
		vector.x = 0;
	}

	this.draw = function(x, y) {
		var x2 = x - vector.x;
		var y2 = y - vector.y;
		strokeWeight(maxIterations - currentIteration + 1);
		line(x, y, x2, y2);
		if (branch1 !== undefined) {
			branch1.draw(x2, y2);
			branch2.draw(x2, y2);
		} else {
			fill(random(255))//, random(255), random(255));
			ellipse(x2, y2, 8);
		}
	};
	
	this.getVector = function(){
		return vector;
	};
}