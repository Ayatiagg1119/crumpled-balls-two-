
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var options ={
	isStatic: false, 
	restitution:0.3,
	friction:0.5,
	density:1.2
}


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground.Bodies.rectangle(200,300,ground_options);
	Matter.ground.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



