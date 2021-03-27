
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,paperImg;
var ground;
var block1,block2,block3,trashImg;

function preload(){

	trashImg = loadImage("Trash.png");
	paperImg = loadImage("Paper.png");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,700,800,30);
	paper = new Paper(100,690,40);

	block1 = new Trash();


	//paper.addImage("paper",paperImg);
	
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);

  background(255,255,255);

	ground.display();
	
	paper.display();
	
	block1.display();

	//keyPressed();

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.position,{x:150,y:-200});
	}
}

