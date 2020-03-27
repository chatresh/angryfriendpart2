class Freind extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/freind.jpg");
    this.visibility = 255;
  }
display(){
  if(this.body.speed<3){
    super.display();
    
  }else{
    World.remove(world,this.body);
    push();
    this.visibility = this.visibility-5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
  if(this.body.visibility<0 && this.body.visibility>-1111){
    score = score+10;
  }
  
}

};