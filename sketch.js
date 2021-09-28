var bg;
var spaceship, Spaceship;
var meteor, Meteor;


function preload(){
 bg = loadImage("background.png");
 spaceship = loadImage("spaceship.png");
 meteor = loadImage("meteor.png");
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  ground = createSprite(windowWidth/2,windowHeight/2,width*2,height*2);
  ground.addImage(bg);
  Spaceship = createSprite(width/2, height-250, 50, 60);
  Spaceship.addImage(spaceship);
  Spaceship.scale = 0.3;

  Meteor = createSprite(width/2, height-600, 50, 60);
  Meteor.addImage(meteor);
  Meteor.scale = 0.1;

}

function draw() {
  background("black"); 
  
  drawSprites();
}