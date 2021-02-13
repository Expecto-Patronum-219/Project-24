class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':3.0
      }
      this.body = Bodies.circle(x, y, radius);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      stroke("white")
      strokeWeight(3)
      fill("red");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
