var car,wall;
var speed, weight;
var deform;
function setup() {
  createCanvas(displayWidth,displayHeight);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car .shapeColor="white";
  car.debug=true;
  wall=createSprite(displayWidth-60,200,60,height/2);
  wall.shapeColor=rgb(80,80,80);
  wall.debug=true;
}
function draw() {
  background("black");  
  car.velocityX = speed;
  if(car.x-wall.x<car.width+wall.width && wall.x-car.x<car.width+wall.width){
    car.velocityX = 0;
    deform=(0.5*weight*speed*speed)/22500;
    if(deform<100){
      car.shapeColor=rgb(0,255,0)
    }
    else if(deform>=100 && deform<=180){
      car.shapeColor=rgb(230,230,0);
    }
    else if(deform>180){
      car.shapeColor=rgb(255,0,0);
    }
  }

  drawSprites();
}