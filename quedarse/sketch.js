

//textFont(fontBold);

var index = 0;
let posx = 0;
let posy = 0;
let cantTextos = 2;
let b = ["¿Se deja el barrio alguna vez?",
         "¿Qué cambió para no cambiar jamás?",
         "¿Se puede enfrascar un sueño?",
         "¿Se deja el barrio alguna vez?",
         "¿Se puede enfrascar un sueño?",
         "¿Se deja el barrio alguna vez?",
         "¿Se deja el barrio alguna vez?",
         "¿Se puede enfrascar un sueño?",
        ];


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

function preload() {
  fontBold = loadFont('maquina.ttf');
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
 
