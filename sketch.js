
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	H= new Hammer (100, 100)
	P= new Plane (400, 690, 800, 15)
	S= new Stone (200, 300, 70, 70)
	R= new Rubber (300, 200, 25)
	I= new IronBody (300, 300, 100, 60)
	S1 = new Sand (300, 200, 5)
	S2 = new Sand (300, 200, 5)
	S3 = new Sand (300, 200, 5)
	S4 = new Sand (300, 200, 5)
	S5 = new Sand (300, 200, 5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  

  background("lightblue");
  
H.display()
P.display()
S.display()
R.display()
I.display()
S1.display()
S2.display()
S3.display()
S4.display()
S5.display()

  drawSprites();
 
}



