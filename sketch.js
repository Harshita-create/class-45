var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var obstacles = []

function preload(){
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  for(var initialPosition = (displayHeight*5)-500;initialPosition>0;initialPosition = initialPosition-500){
  obstacle1 = new Obstacle(displayWidth/2+100,initialPosition)
  obstacles.push(obstacle1)
  console.log("in forloop "+initialPosition)
  }
}


function draw(){
background(rgb(232, 249, 254))
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
    
  }
  if(gameState === 2){
    game.end();
  }
}
