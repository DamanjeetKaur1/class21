var fixedRect, movingRect ,rect1 , rect2 ,rect3 ,rect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  rect1 =createSprite(100,100,50,50);
  rect1.shapeColor ="green";
  rect2 =createSprite(200,100,50,50);
  rect2.shapeColor ="green";
  rect3 =createSprite(300,400,50,50);
  rect3.shapeColor ="green";
  rect4 =createSprite(400,400,50,50);
  rect4.shapeColor ="green";
rect1.velocityX =2;
rect2.velocityX =-2;
rect3.velocityX =2;
rect4.velocityX =-2;
}

function draw() {
  background(0,0,0);  

  bounceOff(rect1 ,rect2);
  bounceOff(rect3 , rect4);
  bounceOff(movingRect ,fixedRect);
  drawSprites();
}
function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 +object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
 object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object1.height/2 + object2.height/2
  && object2.y -object1.y < object1.height/2 + object2.height/2){
 object2.velocityY =object2.velocityY * (-1);
  object1.velocityY = object1.velocityY * (-1);
}
}