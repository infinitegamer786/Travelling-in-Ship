var sea,ship;
var seaImg,shipImg;

function preload(){
  //uncomment the code to add animation to ship 

  
  ship-Img1 ; loadAnimation("ship-1.png");
  ship-Img1 ; loadAnimation("ship-1.png");
  ship-Img1 ; loadAnimation("ship-1");
  ship-Img1 ; loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  ship-Img1 ; loadAnimation("ship-1","ship-2","ship-1","ship-2");
 
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",ship-Img1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
    sea.y = height;
  
    

 
  drawSprites();
}