class Stone {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.3,
          'density':3.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("white")
      strokeWeight(3)
      fill("black");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };