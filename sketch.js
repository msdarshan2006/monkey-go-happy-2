var player_running;
var bananaImage,foodGroup;
var obstaclesImage,obstaclesGroup;
var score;
var bg;
var playerSprite;
var backgr;

function preload(){
  bg = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
   backgr=createSprite(0,0,800,400);
  backgr.addImage(bg);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  playerSprite = createSprite(50,180,20,50);
  playerSprite.addAnimation("running",player_running);
  playerSprite.scale=0.1;
  
  score= 0;
 

}

function draw() {
  background(220);
  switch(score){
    case 10:player.scale=0.12;
      break;
    case 20:player.scale=0.14;
      break;
    case 30:player.scale=0.16;
      break;
    case 40:player.scale=0.18;
      break;
      default:break;
          
  }
 
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
 
    drawSprites();
}