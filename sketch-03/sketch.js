let cellSize = 50;

function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(5);
}

function draw() {
 
  background(255, 20); 
  
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      if (random() > 0.5) {
        fill(0);
        noStroke();
       
        rect(x, y, cellSize * random(1, 2), cellSize * random(0.1, 0.5));
      } else {
        stroke(0);
        strokeWeight(random(5, 15));
        line(x, y, x + cellSize, y + cellSize);
      }
    }
  }
}