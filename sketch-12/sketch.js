function setup() {
    createCanvas(500, 500);
    background(255);
  }
  
  function draw() {
  
    copy(0, 0, width, height, 0, 1, width, height);
    
    if (frameCount % 10 == 0) {
      background(255, 1);
    }
  }
  
  function mousePressed() {
   
    fill(0);
    noStroke();
    
    let particles = random(10, 30);
    for (let i = 0; i < particles; i++) {
      let r = random(20, 80);

      ellipse(
        mouseX + random(-30, 30), 
        mouseY + random(-30, 30), 
        r, 
        r * random(0.5, 2)
      );
    }
  }