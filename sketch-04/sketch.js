
let time = 0; 

function setup() {
  createCanvas(500, 500);
  background(255); 
}

function draw() {

  background(255, 10); 
  
  stroke(0); 
  strokeWeight(20); 
  noFill();
  
  beginShape();
  
  for (let y = 0; y < height; y += 5) {
   
    let xOffset = noise(y * 0.01, time) * 100;
    
    let x = (width/2) + xOffset - 50; 
    vertex(x, y);
  }
  endShape();
  
  time += 0.02; 
}