
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

var boy;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stone;
var launcher;
var launchingforce=100;


function setup() {
	createCanvas(1600, 750);


	engine = Engine.create();
	world = engine.world;

	boy=new Boy(720,580,150,280);
  tree=new Tree(1300,350,500,700);
  mango1=new Mango(1300,100,100);
  mango2=new Mango(1180,150,140);
  mango3=new Mango(1450,190,100);
  mango4=new Mango(1310,260,150);
  mango5=new Mango(1310,430,100);
  mango6=new Mango(1150,300,130);
  mango7=new Mango(1500,300,170);
  mango8=new Mango(1190,450,140);
  mango9=new Mango(1430,450,120);
  mango10=new Mango(1410,330,150);
  stone=new Stone(780,300,40);
  //slingshot=new Chain(boy.body,stone.body)

 /* launcher=new (stone.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });*/


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
//  launcher.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  

  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcher.fly();
  
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcher.attach(stone.body);
	}
  }


  function detectollision(lstone,lmango){
    /*var collision = Matter.SAT.collides(lstone,lmango);
    if(collision.collided){
      console.log("collided");
      Matter.Body.setStatic(lmango,false);	
    }*/
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //console.log(distance)
   // console.log(lmango.r+lstone.r)
      if(distance<=lmango.r+lstone.r)
      {
        //console.log(distance);
        Matter.Body.setStatic(lmango.body,false);
      }
  
    }
  


