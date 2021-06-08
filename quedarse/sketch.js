var index =0;
let tam = 10;
let b = ["Yo no sé de pájaros,no conozco la historia del fuego. Pero creo que mi soledad debería tener alas. AP","es demasiado tarde y no hay nada peor que un demasiado tarde CB","¿Qué más quiere, qué más quiere? Átelo pronto a su muñeca, déjelo latir en libertad, imítelo anhelante."];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  /*
  for (let i = 0; i < b.length; i++) {
    text(b[i], 20, i * 20 + 20);
  }*/
  fill(255);
  
  textSize(tam);
  textAlign(CENTER);
  text(b[index], width / 2, height / 2 ,170, 180);
}
function mousePressed() {
	index++;
	if (index >= b.length) {
		index = 0;
        tam = random(20);
	}

}
