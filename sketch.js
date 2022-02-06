var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(40,100);
}


function draw() 
{
  background("green");
if (keyIsDown(DOWN_ARROW)) {
box.velocityY=1
}
if (keyIsDown(UP_ARROW)) {
  box.velocityY=-1
  }
  if (keyIsDown(RIGHT_ARROW)) {
    box.velocityX=1
    }
    if (keyIsDown(LEFT_ARROW)) {
      box.velocityX=-1
      }
drawSprites();
}



/*

1. declare
2. define
3. use

nowhere - nowHereIsOver


*/
