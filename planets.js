class Planet {

  // set variables for the position, size, and color of planets
  constructor(x, y, size, color1, color2, color3) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color1 = color1;
    this.color2 = color2;
    this.color3 = color3;


  }

  // display planets 

  show() {

    noStroke();
    fill(this.color1,this.color2,this.color3);
    ellipse(this.x, this.y, this.size);

  }
}
