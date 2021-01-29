const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var drops = [];
var bruce;
var maxDrops = 100;
var thunderframe = 0;
var thunder,img1,img2,img3,img4, b1,b2,b3,b4,b5,b6,b7,b8,b9;
function preload(){
  img1 = loadImage("thunderbolt/1.png");
  img2 = loadImage("thunderbolt/2.png");
  img3 = loadImage("thunderbolt/3.png");
  img4 = loadImage("thunderbolt/4.png");

  b1 = loadImage("Walking_frame/walking_1.png")
  b2 = loadImage("Walking_frame/walking_2.png");
  b3 = loadImage("Walking_frame/walking_3.png")
  b4 = loadImage("Walking_frame/walking_4.png");
  b5 = loadImage("Walking_frame/walking_5.png");
  b6 = loadImage("Walking_frame/walking_6.png");
  b7 = loadImage("Walking_frame/walking_7.png");
  b8 = loadImage("Walking_frame/walking_8.png");

}

function setup(){
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  bruce = new Umbrella(200,410);

  if(frameCount % 150 === 0){
      for(var i=0; i<maxDrops; i++){
           drops.push(new Drop(random(0,400),random(0,400)));
      }
  }
}

function draw(){
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  bruce.display();

var rand = Math.round(random(1,4));
if(frameCount % 50 === 0){
    thunderframe = frameCount;
    thunder = createSprite(random(0,400),random(0,60),10,10);
    switch(rand){
      case 1: thunder.addImage(img1);
      break;
      case 2: thunder.addImage(img2);
      break;
      case 3: thunder.addImage(img3);
      break;
      case 4: thunder.addImage(img4);
      break;
      default:break;
    }
    thunder.scale = random(0.5,1);
}
if(thunderframe + 15 === frameCount && thunder){
    thunder.destroy();
}

  for(var i = 0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update()
  }

  drawSprites();
}