function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
 
  fill(0, 20); // Noir très transparent
  noStroke();
  
  //cercles de tailles aléatoires 
  let x = random(width);
  let y = (frameCount * 5) % height; // Descend verticalement
  let size = random(20, 80);
  
  ellipse(x + random(-2, 2), y, size, size * 1.2);
}