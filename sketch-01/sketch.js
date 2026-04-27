function setup() {
    createCanvas(600, 600);
    frameRate(7);
    noFill(0); 
    strokeWeight(60); 
    background(0);
  }
  
  function draw() {
    background(255);
    
    let cellSize = random(1, 500); // Taille aléatoire pour casser la régularité
    
    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        stroke(random(5), random(5), random(150)); // Couleur aléatoire pour plus de variation
        let angle = random(TWO_PI); // Angle totalement libre
        let len = random(cellSize * 1.5, cellSize * 10); // Longueur variable
        
        line(x, y, x + cos(angle) * len, y + sin(angle) * len); // Ligne dans une direction totalement aléatoire
      }
    }
  }