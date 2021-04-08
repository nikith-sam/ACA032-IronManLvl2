var ironman, ironmancollided;
var bg, backgroundImg;
var stoneImg, bricksGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironman= loadImage("images/iron.png");
  stoneImg= loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;

  iron = createSprite(200,505,20,50);
  iron.addImage(ironman);
  iron.scale =0.3;
  iron.setCollider("rectangle",0,0,800,800);
  //iron.debug=true;

  ground = createSprite(200,585,2000,10);
 
  ground.visible = false; 

  bricksGroup= new Group();
}

function draw() {

  bg.velocityY=4;

  if (bg.y > 600){
    bg.y=bg.width/4;
  }

  if (iron.y< 50){
    iron.y=50;
  }
  
  if(iron.x<50){
    iron.x=50;
  }

  if (iron.x > 900){
    iron.x = 900;
  }
  
  if(keyDown("up") ) {
    iron.velocityY = -16;
  }
  if(keyDown("down") ) {
    iron.velocityY = +16;
  }
  if(keyDown("left") ) {
    iron.velocityX = -16;
  }
  if(keyDown("right") ) {
    iron.velocityX = +16;

  }

  generateBricks();

  for(var i = 0 ; i< (bricksGroup).length ;i++){
    var temp = (bricksGroup).get(i) ;
    
    if (temp.isTouching(iron)) {
       iron.collide(temp);
      }
        
    }

  iron.velocityY = iron.velocityY + 0.5;
  iron.collide(ground);

  
drawSprites();
   
}


  function generateBricks() {
    if (frameCount % 70 === 0) {
      var brick = createSprite(600,0,40,10);
      brick.x = random(100,900);
      //brick.y= random(100,300)
      brick.addImage(stoneImg);
      brick.scale = 0.5;
      brick.velocityY = 5;
      
      brick.lifetime =250;
      bricksGroup.add(brick);
    }
  }