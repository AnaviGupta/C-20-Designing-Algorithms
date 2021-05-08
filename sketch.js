var fr, mr

function setup() {
  createCanvas(800,400);
  fr= createSprite(600, 200, 50, 50);
  fr.shapeColor= "pink"
  fr.debug=true  
  mr= createSprite(200, 200, 50, 50);
  mr.shapeColor="purple" 
  mr.debug=true
  mr.velocityX=3
  fr.velocityX=-3
}

function draw() {
  background("blue"); 
  //mr.y=World.mouseY 
  //mr.x=World.mouseX
  
  /* if(mr.x-fr.x < mr.width/2+fr.width/2 && fr.x-mr.x < mr.width/2+fr.width/2 && mr.y-fr.y < mr.height/2+fr.height/2 && fr.y-mr.y < mr.height/2+fr.height/2){
    mr.shapeColor="red"
    fr.shapeColor= "green"
  }
  else {
    fr.shapeColor= "pink"
    mr.shapeColor="purple" 
  }*/
   if(mr.x-fr.x < mr.width/2+fr.width/2 && fr.x-mr.x < mr.width/2+fr.width/2){
     mr.velocityX=mr.velocityX*(-1)
     fr.velocityX=fr.velocityX*(-1)
   }
  drawSprites();
}