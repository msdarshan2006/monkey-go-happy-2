var player_running;
var banana,bananaImage,foodGroup;
var obstaclesImage,obstaclesGroup;
var score;
var bg;
var playerSprite;
var backgr;
var inviGround;

function preload(){
  bg = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstaclesImage = loadImage("stone.png");
}
function setup() {
  createCanvas(400, 400);
   backgr=createSprite(0,0,800,400);
  foodGroup = new Group();
  obstaclesGroup= new Group();
  
  backgr.addImage(bg);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  playerSprite = createSprite(50,180,20,50);
  playerSprite.addAnimation("running",player_running);
  playerSprite.scale=0.05;
  
  score= 0;
 inviGround = createSprite(200,200,400,10);
  inviGround.visible = false;
}

function draw() {
  background(220);
   if(backgr.x<100){ backgr.x=backgr.width/2; }
   if(keyDown("space")) {
    playerSprite.velocityY = -10;
     }
  playerSprite.velocityY = playerSprite.velocityY + 0.8
  if (playerSprite.isTouching(foodGroup)){
     switch(score){
      case 10:player_running.scale=0.2;
      break;
    case 20:player_running.scale=0.4;
      break;
    case 30:player_running.scale=0.6;
      break; 
    case 40:player_running.scale=0.8;
      break;
      default:break;
          
  }
  }
 
  spawnBanana();
  spawnObstacles();
 
  stroke("white");
  textSize(20);
  fill("white");
  text("score"+score,500,50);
 
  playerSprite.collide(inviGround);
 if (obstaclesGroup.isTouching(playerSprite)){
   playerSprite.scale= 0.2
 }
    drawSprites();
}
function spawnBanana(){
   
  if (frameCount % 60 === 0) {
    
     banana = createSprite (400,165,10,40);
    
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}
 
function spawnObstacles(){
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,200,10,40);
     obstacle.velocityX = - (6 + 3*score/100);
    obstacle.addImage(obstaclesImage);
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}   