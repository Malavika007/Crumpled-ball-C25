
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1000,650);
    paper1 = new Paper(150,160,70)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  Engine.update(engine);
  fill("brown")
 
  paper1.display();
  fill("white")
 
  imageMode(CENTER);
  

  groundObject.display();
  dustbinObj.display();

}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		var option = {
			x:130,
			y:-145
		}
	  Body.applyForce(paper1.body,paper1.body.position,option);  
	}
}

