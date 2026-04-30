let grains = []; // Tableau pour stocker nos grains de suie
let numGrains = 500; // Nombre de grains

function setup() {
  createCanvas(500, 500, WEBGL);
  
  // On initialise les grains à des positions aléatoires
  for (let i = 0; i < numGrains; i++) {
    grains[i] = {
      x: random(-250, 250),
      y: random(-250, 250),
      z: random(-500, 0), // Plus ou moins loin en profondeur
      size: random(2, 8),
      speed: random(2, 5)
    };
  }
}

function draw() {
  background(0); // Fond noir pour changer
  noStroke();
  
  // On parcourt tous les grains
  for (let i = 0; i < numGrains; i++) {
    let g = grains[i];
    

    g.y += g.speed;
  
    let mx = mouseX - width/2;
    let my = mouseY - height/2;
    let d = dist(g.x, g.y, mx, my);
    
    if (d < 100) {
      g.x += random(-10, 10);
      g.y += random(-10, 10);
    }

    push();
    translate(g.x, g.y, g.z);
    fill(255, map(g.z, -500, 0, 50, 200)); 
    box(g.size);
    pop();
    
    if (g.y > 250) {
      g.y = -250;
      g.x = random(-250, 250);
    }
  }
}