var bola; 
function setup() {
  bola =createSprite (100, 100, 20, 20);
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyDown ("up_arrow") ){
    bola.setVelocity (0,-3);
  }
  if (keyDown ("down_arrow") ){
    bola.setVelocity (0,3);
  }
  if (keyDown ("left_arrow") ){
    bola.setVelocity (-3,0);
  }
  if (keyDown ("right_arrow") ){
    bola.setVelocity (3,0);
  }
drawSprites();
}




