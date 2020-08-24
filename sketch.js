const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var divisions = []
var plinkos = []
var particles = []
var divisionHeight =150;


function preload() {
  
}

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  plinko = new Plinko(240,400);
  //division = new Division(240,790,480,10);
  ground = new Ground(240,795,480,10);
for(var j = 40; j <=width; j=j+50){

  plinkos.push(new Plinko(j,75));
}
for(var j = 15; j <=width-10; j=j+50){

  plinkos.push(new Plinko(j,175));
}
for(var j = 40; j <=width; j=j+50){

  plinkos.push(new Plinko(j,275));
}
for(var j = 15; j <=width-10; j=j+50){

  plinkos.push(new Plinko(j,375));
}


  for(var k = 0; k <=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
  
  
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
  for(var i = 0; i <plinkos.length; i++){
    plinkos[i].display();
    }
 // division.display();
 // plinko.display();
if(frameCount%90 === 0){
particles.push(new Particle(random(width/2-20,width/2+20),10,7));
}
for(var j = 0; j <particles.length; j++){
  particles[j].display();
  }

 //console.log(divisions);
  for(var k = 0; k <divisions.length; k++){
  divisions[k].display();
  }


  
  
}







