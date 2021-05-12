
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbin, ground, paper;
var world;

function setup() {
	createCanvas(1365, 620);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(width/2 ,600,width,20);
	dustbin = new Dustbin(1150,580);
	paper = new Paper(100,100,80);

	Engine.run(engine);
}


function draw() {

  rectMode(CENTER);
  background(230);
 
  ground.display();
  dustbin.display();
  paper.display();
}

function keyPressed() {
	if( keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:130, y:-130})
	}

	if( keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-130, y:-130})
	}
}

