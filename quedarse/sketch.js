var index =0;
let tam = 10;
let posx = 400;
let posy = 200;

let b = ["Yo no sé de pájaros,no conozco la historia del fuego. Pero creo que mi soledad debería tener alas. AP","es demasiado tarde y no hay nada peor que un demasiado tarde CB","¿Qué más quiere, qué más quiere? Átelo pronto a su muñeca, déjelo latir en libertad, imítelo anhelante."];

var fontBold;//name of the font

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
 
  fill(255);
  textFont(fontBold);
 
  textSize(tam);
  text(b[index], posx, posy ,170, 180);
}
function mousePressed() {
	index++;
	if (index >= b.length) {
		index = 0;
        
	}
    tam = random(10,100);
    posx = random(10,width/2);
    posy = random(10,height/2);

}
function preload() {
  fontBold = loadFont('maquina.ttf');
}
