class Triangle {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.0,
        'friction':10.0,
        'density': 0.1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = loadImage("img/triangle.png");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    rectMode(CENTER);
    fill(255);

    fill("brown");
    image(this.image,0,this.y - this.height/2,this.width,this.height)
    pop();

  }
};
