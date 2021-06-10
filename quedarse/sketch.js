
//
//textFont(fontBold);

 

var index = 0;
let posx = 0;
let posy = 0;

let b = ["¿Se deja el barrio alguna vez?",
         "¿Qué cambió para no cambiar jamás?",
         "¿Se puede enfrascar un sueño?",
         "¿una pregunta es para siempre?",
         "¿qué forma tiene el límite? ",
         "¿Y los pájaros?",
         "¿Hacia dónde?",
         "¿Me dejarán pasar?",
         "¿a qué intensidades viviste?",
         "¿Se puede bucear la risa?"
        ];


var fontBold;//name of the font

let textos = [];
let imagenes = [];
let imgN = 0;
let cantTextos = 1;

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
  
  image(imagenes[imgN],0,0,width,height);
   
  for (let i=0; i < cantTextos; i++) {
     textos[i].move();
     textos[i].show();
  }
  
}
function mousePressed() {
  if (cantTextos < b.length) 
      cantTextos++;
  
  if (imgN < 5 ) 
         imgN++;
  else
         imgN = 0;
}

function preload() {
    fontBold = loadFont('maquina.ttf');
    imagenes[0] = loadImage("pic_1.png" );
    imagenes[1] = loadImage("pic_2.png" );
    imagenes[2] = loadImage("pic_3.png" );
    imagenes[3] = loadImage("pic_4.png" ); 
    imagenes[4] = loadImage("pic_5.png" );
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
       this.x = this.x + 2;
  }
  show() {
    noStroke();
    fill(255);
    textSize(this.tami);
    textFont(fontBold);
    text(this.text,this.x,this.y);
  }
}

