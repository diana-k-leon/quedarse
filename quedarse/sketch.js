
var index =0;
let b = ["quedarse", "quedarse sentado", "quedarse dormido", "quedarse a dormir", "quedarse plantado"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  /*
  for (let i = 0; i < b.length; i++) {
    text(b[i], 20, i * 20 + 20);
  }*/
  textSize(30);
  textAlign(CENTER);
  text(b[index], width / 2, height / 2);
}
function mousePressed() {
	index++;
	if (index >= b.length) {
		index = 0;
	}

}
