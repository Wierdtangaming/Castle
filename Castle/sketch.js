const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20);
    wl1 = new Box(75,100,50,50);
    wl2 = new Box(75,150,50,50);
    wl3 = new Box(75,200,50,50);

    wr1 = new Box(325,100,50,50);
    wr2 = new Box(325,150,50,50);
    wr3 = new Box(325,200,50,50);

    gt1  =  new Box(125,100,25,25);
    gt2  =  new Box(125,125,25,25);
    gt3  =  new Box(125,150,25,25);
    gt4  =  new Box(125,175,25,25);
    gt5  =  new Box(125,200,25,25);
    gt6  =  new Box(125,225,25,25);

    gt7   =  new Box(175,100,25,25);
    gt8   =  new Box(175,125,25,25);
    gt9   =  new Box(175,150,25,25);
    gt10  =  new Box(175,175,25,25);
    gt11  =  new Box(175,200,25,25);
    gt12  =  new Box(175,225,25,25);

    gt13  =  new Box(225,100,25,25);
    gt14  =  new Box(225,125,25,25);
    gt15  =  new Box(225,150,25,25);
    gt16  =  new Box(225,175,25,25);
    gt17  =  new Box(225,200,25,25);
    gt18  =  new Box(225,225,25,25);

    
    gt19  =  new Box(275,100,25,25);
    gt20  =  new Box(275,125,25,25);
    gt21  =  new Box(275,150,25,25);
    gt22  =  new Box(275,175,25,25);
    gt23  =  new Box(275,200,25,25);
    gt24  =  new Box(275,225,25,25);

    top1 = new Box(200,75,300,20);
    top2 = new Top(200,50,300,20);

    tptr1 = new Triangle(300,0,50,50);
    tptr2 = new Triangle(60,0,50,50);
  //  Triangle1 = new Triangle(75,10,55,90);

}

function draw(){
    background(0);
    Engine.update(engine);

  // console.log(Triangle1);

    wl1.display();
    wl2.display();
    wl3.display();

    wr1.display();
    wr2.display();
    wr3.display();

    gt1.display();
    gt2.display();
    gt3.display();
    gt4.display();
    gt5.display();
    gt6.display();

    gt7.display();
    gt8.display();
    gt9.display();
    gt10.display();
    gt11.display();
    gt12.display();

    gt13.display();
    gt14.display();
    gt15.display();
    gt16.display();
    gt17.display();
    gt18.display();

    
    gt19.display();
    gt20.display();
    gt21.display();
    gt22.display();
    gt23.display();
    gt24.display();

    top1.display();
    top2.display();
    
    tptr2.display();
    tptr1.display();
    //Triangle1.display();
    ground.display();
    
   
}