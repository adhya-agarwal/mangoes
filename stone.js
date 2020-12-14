class Stone {
    constructor(x,y,r){
        var options= {
            //isStatic:true
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r/2, options);
        this.image=loadImage("sprites/stone-removebg-preview.png")
        World.add(world,this.body);
    }
    display(){

var stonepos=this.body.position;
push()
translate(stonepos.x,stonepos.y);
imageMode(CENTER);
strokeWeight(3);
stroke("magenta")
fill("lightpurple");
//ellipse(0,0,this.r,this.r);
image(this.image,0,0,this.r,this.r);
pop()
}
};
