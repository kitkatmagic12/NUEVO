var ground, invisibleGround, groundImage;
var botes, barco1;


function preload(){
  groundImage = loadImage("fondo.jpg");
  bote = loadAnimation("barco.png","barcos.png");
  
 
  
}

function setup() {

  createCanvas(600,300)
  
  
  ground = createSprite(400,150,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /1;
  ground.velocityX = -2;
  ground.scale =3
  
  barca = createSprite(200,100,20,50);
  barca.addAnimation("running",bote);
  barca.scale = 0.5;
  
  invisibleGround = createSprite(400,190,400,10);
  invisibleGround.visible = false;
  

}

function draw() {
  background(180);
  
  barca.velocityY = barca.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  barca.collide(invisibleGround);
  
  
  drawSprites();
}





