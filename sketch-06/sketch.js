let cellSize = 50;

function setup() {
  createCanvas(500, 500);
  background(0); 
  frameRate(3); 
}

function draw() {
  
  background(0, 50); 
  
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      if (random() > 0.4) { 
        fill(255, random(100, 255)); 
        noStroke();
        
        
        push();
        translate(x + cellSize/2, y + cellSize/2);
        rotate(random(-0.1, 0.1)); 
        rectMode(CENTER);
        rect(0, 0, cellSize * random(1.1, 1.5), cellSize * random(0.2, 0.8));
        pop();
      }
    }
  }
}