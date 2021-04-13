var canvas;
var music;

var r1,r2,r3,r4,r5,r6,r7;
var o1,o2,o3,o4,o5,o6;
var y1,y2,y3,y4,y5;
var g1,g2,g3,g4;
var b1,b2,b3;
var i1,i2;
var v1;

var bouncer;
var ball;
var edge;

function preload()
{
    music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(1093,542);
    
    edge=createEdgeSprites();

    //create 4 different surfaces
    r1 = createSprite(100, 50, 130, 10);
    r1.shapeColor = "#F61C1C";
    r2 = createSprite(250, 50, 130, 10);
    r2.shapeColor = "#F61C1C";
    r3 = createSprite(400, 50, 130, 10);
    r3.shapeColor = "#F61C1C";
    r4 = createSprite(550, 50, 130, 10);
    r4.shapeColor = "#F61C1C";
    r5 = createSprite(700, 50, 130, 10);
    r5.shapeColor = "#F61C1C";
    r6 = createSprite(850, 50, 130, 10);
    r6.shapeColor = "#F61C1C";
    r7 = createSprite(1000, 50, 130, 10);
    r7.shapeColor = "#F61C1C";

    o1 = createSprite(150, 75, 130, 10);
    o1.shapeColor = "#F77B16";
    o2 = createSprite(300, 75, 130, 10);
    o2.shapeColor = "#F77B16";
    o3 = createSprite(450, 75, 130, 10);
    o3.shapeColor = "#F77B16";
    o4 = createSprite(600, 75, 130, 10);
    o4.shapeColor = "#F77B16";
    o5 = createSprite(750, 75, 130, 10);
    o5.shapeColor = "#F77B16";
    o6 = createSprite(900, 75, 130, 10);
    o6.shapeColor = "#F77B16";

    y1 = createSprite(250, 100, 130, 10);
    y1.shapeColor = "#F7E116";
    y2 = createSprite(400, 100, 130, 10);
    y2.shapeColor = "#F7E116";
    y3 = createSprite(550, 100, 130, 10);
    y3.shapeColor = "#F7E116";
    y4 = createSprite(700, 100, 130, 10);
    y4.shapeColor = "#F7E116";
    y5 = createSprite(850, 100, 130, 10);
    y5.shapeColor = "#F7E116";

    g1 = createSprite(300, 125, 130, 10);
    g1.shapeColor = "#5DF716";
    g2 = createSprite(450, 125, 130, 10);
    g2.shapeColor = "#5DF716";
    g3 = createSprite(600, 125, 130, 10);
    g3.shapeColor = "#5DF716";
    g4 = createSprite(750, 125, 130, 10);
    g4.shapeColor = "#5DF716";

    b1 = createSprite(400, 150, 130, 10);
    b1.shapeColor = "#164BF7";
    b2 = createSprite(550, 150, 130, 10);
    b2.shapeColor = "#164BF7";
    b3 = createSprite(700, 150, 130, 10);
    b3.shapeColor = "#164BF7";

    i1 = createSprite(450, 175, 130, 10);
    i1.shapeColor = "#4B0082";
    i2 = createSprite(600, 175, 130, 10);
    i2.shapeColor = "#4B0082";

    v1 = createSprite(547, 200, 130, 10);
    v1.shapeColor = "#7f00ff";

    ball  = createSprite(547,40,25,25);
    ball.shapeColor = "#DA95E8";
    ball.velocityY = 3;
    ball.velocityX= 3;
    bouncer = createSprite(547,520,150,10);
    bouncer.shapeColor = "#aaa9ad";
    
   
    //bottomEdge = createSprite(546.5,544,10,542);

    //create box sprite and give velocity

}

function draw() 
{
    background("white");
    bouncer.x = mouseX;
  
  
    
   
    BounceOff(bouncer,ball);
    BounceOff(edge[2],ball)  
    BounceOff(edge[0],ball)
    BounceOff(edge[1],ball)       
    





    drawSprites();
    //add condition to check if box touching surface and make it box
}
y
function BounceOff(obj1,obj2)
{
    if((abs(obj1.x - obj2.x) < obj1.width/2 + obj2.width/2 &&abs(obj1.y - ball.y) < obj1.height/2 + obj2.height/2 )){
   // if(abs(obj1.x - obj2.x) < obj1.width/2 + obj2.width/2 )
       {
        console.log("not happening");
        obj2.velocityX = (-1) * obj2.velocityX;
    
       }
  //  if(abs(obj1.y - ball.y) < obj1.height/2 + obj2.height/2 )
       {
        console.log("happening");
        obj2.velocityY = (-1) * obj2.velocityY ;
       
       }
    }
        
}
