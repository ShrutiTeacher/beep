function BounceOff(obj1,obj2)
{
    if((abs(obj1.x - obj2.x) < obj1.width/2 + obj2.width/2 &&abs(obj1.y - ball.y) < obj1.height/2 + obj2.height/2 )){
    //if(abs(obj1.x - obj2.x) < obj1.width/2 + obj2.width/2 )
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