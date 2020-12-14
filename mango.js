class Mango{
    constructor(x,y,r){
        var options= {
            isStatic:true
        }

        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.image=loadImage("sprites/mango2-removebg-preview.png")
        World.add(world,this.body);
    }
    display(){

var mangopos=this.body.position;
push()
translate(mangopos.x,mangopos.y);
imageMode(CENTER);
strokeWeight(3);
stroke("magenta")
fill("lightpurple");
//ellipse(0,0,this.r,this.r);
image(this.image,0,0,this.r,this.r);
pop()
}
};
