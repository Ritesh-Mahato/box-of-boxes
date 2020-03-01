
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine=Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boxes = [];
var gSlider,ground,c=0,i=1;
 //var rand1=random(5,30);
 //var rand2=random(5,30);
 var rand1,rand2;

function setup() {
    createCanvas(400, 400);
    rand1=random(5,30);
    rand2=random(5,30);
    // Create an instance of Engine, World
     engine=Engine.create();
     world=engine.world;
    // A slider is already created for you here. This slider will dictate the gravity of the world
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
     ground= new Ground(200,350,400,5);
     

}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.

        boxes[i]= new Box(mouseX,mouseY,rand1,rand2);
        c=c+1;
        i=i+1;

    }
}
 
function draw() {
    // Draw all the elements including the slider that 

    background(0);
    Engine.update(engine);
    // This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    

 
    // Use a for loop to show all the boxes
    for(i=1;i<=c;i++){
        boxes[i].display();
        boxes[i].velocityY=fVal;
    }
    ground.display();

    

}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.

 

    // Create a show method which will draw the box every time it is called inside the draw method.
    // remember to push and pop.
 