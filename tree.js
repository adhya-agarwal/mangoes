class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("sprites/tree-removebg-preview.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      imageMode(CENTER);
      //stroke("lightpink")
      //fill("lightpink");
     // rect(pos.x, pos.y, this.width, this.height);
     image(this.image,0,0,this.width,this.height);
     pop()
    }
  };