
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground;
var stone;
var boy, boyImage;
var tree,treeIMG;
var mango;

function preload()
{
  treeIMG=loadImage('tree.png')
  tree=createSprite(600,500,10,10);
  tree.addImage(treeIMG);
  tree.scale=0.3;
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground=new Ground(400,680,800,30);
	//Create the Bodies Here.
    stone=new Stone(200,400,30,30)
    boy=new Boy(stone.body,{x:170,y:580})
  Engine.run(engine);
  boyImage=new BoyBody(200,625,120,200);
  
  mango=new Mango(400,530,20);


  
}



function draw() {
  rectMode(CENTER);
  background(255);

   detectCollision(stone,mango);
  stone.display();
  ground.display();
  boy.display();
  boyImage.display();
  mango.display();
 
  drawSprites();
 
}
function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
	  Matter.Body.setStatic(lmango.body, false);
  }
  

}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  boy.fly();
}
function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
		boy.attach(stone.body);
	}
}




