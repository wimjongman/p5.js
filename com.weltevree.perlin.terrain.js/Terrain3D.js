//class Terrain3D {

//	constructor(){
this.xOffset = 0;
this.yOffset = 0.001;
this.x = 100;
this.y = 100;
// }

function draw() {

	for (var blockX = 0; blockX < myX; blockX++) {
		for (var blockY = 0; blockY < myY; blockY++) {
			rect(blockX, blockY, map(blockX, 0, myX, 0, width), map(blockY,
					0, myY, 0, height));
		}
	}
}
// }
