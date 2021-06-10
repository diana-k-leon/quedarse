
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
         "¿Dónde el cuerpo?",
         "¿adentro, está oscuro?",
         "¿Dónde quedaron los planes?",
         "¿Qué texturas te dan placer?",
         "¿Qué te da tranquilidad?",
         "¿Cuándo empieza el futuro?",
         "¿Cómo suena tu casa?",
         "¿Qué es habitar?",
         "¿Dónde no hay encierro?",
         "¿Cómo es tu territorio?",
         "¿Qué es estar presente?",
         "¿Qué colores nos habitan?"
        
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
    imagenes[5] = loadImage("pic_6.png" );
    imagenes[6] = loadImage("pic_7.png" );
    imagenes[7] = loadImage("pic_8.png" );
    imagenes[8] = loadImage("pic_9.png" ); 
    imagenes[9] = loadImage("pic_5.png" );
}

class BubbleText {
  
  constructor(t) {
    this.x = 0;
    this.y = random (150,700);
    this.text = t;
    this.tami=random(20,80);
    this.miLimite = random (200,1000);
  }
  move() {
    if(this.x <  this.miLimite )
       this.x = this.x + 2;
  }
  show() {
    noStroke();
    //fill(0,200);
    //rectMode(CENTER);
    //rect(this.x,this.y,width,this.tami*2);
    fill(255);
    textSize(this.tami);
    textFont(fontBold);
    text(this.text,this.x,this.y);
  }
}

