
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)) { 
    background("lightblue"); } 
    if (keyIsDown(DOWN_ARROW)) { 
      background("violet"); } drawSprites(); 
      if (keyIsDown(LEFT_ARROW)) { 
        background("red"); } 
        if (keyIsDown(RIGHT_ARROW)) { 
          background("pink"); } 
}




