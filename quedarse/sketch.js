let b = ["Yo no sé de pájaros,no conozco la historia del fuego. Pero creo que mi soledad debería tener alas. AP","es demasiado tarde y no hay nada peor que un demasiado tarde CB","¿Qué más quiere, qué más quiere? Átelo pronto a su muñeca, déjelo latir en libertad, imítelo anhelante."];

function preload() {
  fontBold = loadFont('maquina.ttf');
}

//textFont(fontBold);

var index = 0;
let posx = 0;
let posy = 0;
let cantTextos = 2;
let b = ["DIana1","diana2","diana3","diana4","diana5","diana6","DIana 1","diana2","diana3","diana4","diana5","diana6"];

var fontBold;//name of the font

let textos = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  
  for (let i=0; i < b.length; i++) {
     textos[i] = new BubbleText(b[i]);
  }
  
}

function draw() {
  fill(255);
  background(0);
 
  for (let i=0; i < cantTextos; i++) {
     textos[i].move();
     textos[i].show();
  }
  
}
function mousePressed() {
  if (cantTextos < b.length) 
    cantTextos++;
}

class BubbleText {
  
  constructor(t) {
    this.x = 0;
    this.y = random (50,400);
    this.text = t;
    this.tami=random(10,40);
    this.miLimite = random (width);
  }
  move() {
    if(this.x <  this.miLimite )
       this.x = this.x + 1;
  }
  show() {
    noStroke();
    fill(255);
    textSize(this.tami);
    textFont(fontBold);
    text(this.text,this.x,this.y);
  }
}
 
