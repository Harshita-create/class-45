class Obstacle{
    constructor(x,y){
      this.xposition = x;
      this.yposition = y;
      this.width = 50;
      this.height = 50;
      this.obt = createSprite(this.xposition,this.yposition,this.width,this.height)
      this.image = loadImage("images/obstacle.png")
    }
    display(){
      image(this.image,this.xposition,this.yposition,80,50)
      console.log("in display of obstacle")
      //drawSprites()
    }
    /*spawnObstacles() {
        if(World.frameCount % 60 === 0) {
          var obstacle = createSprite(400,365,10,40);
          obstacle.velocityX = - (6 + 3*count/100);
          
          //generate random obstacles
          var rand = randomNumber(1,6);
          obstacle.setAnimation("images/obstacle.png" + rand);
          
          //assign scale and lifetime to the obstacle           
          obstacle.scale = 0.5;
          obstacle.lifetime = 70;
          //add each obstacle to the group
          ObstaclesGroup.add(obstacle);*/
        /*}
      }
      ObstaclesGroup.setLifetimeEach(-1);
      ObstaclesGroup.setVelocityXEach(0);
    if(ObstaclesGroup.isTouching(trex)){
     gameState = END;
      
    }*/



}