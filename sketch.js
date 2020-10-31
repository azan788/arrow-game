var backround, backroundImage;

var redBalloon, redBalloonImage, redGroup;
var greenBalloon, greenBalloonImage, greenGroup;
var blueBalloon, blueBalloonImage, blueGroup;
var pinkBalloon, pinkBalloonImage, pinkGroup;

var bow, bowImage
var arrow, arrowImage, arrowGroup;

var select_balloon;

var score=0;

function preload(){
  
  backroundImage = loadImage("background0.png");
  
  redBalloonImage = loadImage("red_balloon0.png");
  greenBalloonImage = loadImage("green_balloon0.png");
  blueBalloonImage = loadImage("blue_balloon0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");
  
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(400, 400);
  
  backround = createSprite(200,200,100,100);
  backround.addImage("background0.png", backroundImage);
  backround.x = backround.width /2
  backround.velocityX = -1.5;
  
  bow = createSprite(350,200,40,40);
  bow.addImage("bow0.png",bowImage);
  
  redGroup = new Group();
  greenGroup = new Group();
  blueGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  
}

function draw() {
  
  select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 80 === 0) {
    if (select_balloon === 1) {
      redBalloon();
    } else if (select_balloon === 2 ) {
      greenBalloon();
    }else if (select_balloon === 3) {
      blueBalloon();
    }else if (select_balloon === 4) {
      pinkBalloon();
    }
  }
  
  if (backround.x < 165){
    backround.x=200;
  }
  if (keyWentDown("space")) {
    createArrow();
  }
  bow.y = mouseY;
  
  
  
  if (backround.x < 0){
    backround.x = backround.width/2;
  }
  
  drawSprites();
  
  fill("red");
  textSize(20);
  text("Score : " + score, 155, 385);
  
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();    
    arrowGroup.destroyEach();
    score = score + 1;
  }
  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();    
    arrowGroup.destroyEach();
    score = score + 2;
  }
  if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();    
    arrowGroup.destroyEach();
    score = score + 3;
  }
  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();    
    arrowGroup.destroyEach();
    score = score + 4;
  }
}

function createArrow() {
  
  arrow = createSprite(350,200,40,40);
  arrow.addImage("arrow0.png",arrowImage)
  //arrow.scale = 0.25;
  arrow.velocityX = -3;
  arrow.lifetime = 120;
  arrow.y = bow.y;
  arrow.debug = false;
  arrow.setCollider("rectangle",0,0,300,90);
  arrowGroup.add(arrow);
  
  
}

function redBalloon() {
  var redBalloon = createSprite(0,Math.round(random(20,370)),10,10)
  redBalloon.addImage(redBalloonImage);
  redBalloon.velocityX = 3;
  redBalloon.lifetime = 110;
  redBalloon.scale = 0.06;
  redGroup.add(redBalloon);
}
function greenBalloon() {
  var greenBalloon = createSprite(0,Math.round(random(20,370)),10,10)
  greenBalloon.addImage(greenBalloonImage);
  greenBalloon.velocityX = 6;
  greenBalloon.lifetime = 55;
  greenBalloon.scale = 0.06;
  greenGroup.add(greenBalloon);
}
function blueBalloon() {
  var blueBalloon = createSprite(0,Math.round(random(20,370)),10,10)
  blueBalloon.addImage(blueBalloonImage);
  blueBalloon.velocityX = 9;
  blueBalloon.lifetime = 36;
  blueBalloon.scale = 0.07;
  blueGroup.add(blueBalloon);
}
function pinkBalloon() {
  var pinkBalloon = createSprite(0,Math.round(random(20,370)),10,10)
  pinkBalloon.addImage(pinkBalloonImage);
  pinkBalloon.velocityX = 12;
  pinkBalloon.lifetime = 27;
  pinkBalloon.scale = 0.75;
  pinkGroup.add(pinkBalloon);
}
