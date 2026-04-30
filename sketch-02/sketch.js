function setup() {
  createCanvas(500, 500);
  background(0); // Fond noir pour changer
}

function draw() {
  if (mouseIsPressed) {
    stroke(255, 150); // Blanc transparent
    
    // On dessine plein de petites lignes autour de la souris
    for (let i = 0; i < 20; i++) {
      let offsetX = random(-30, 30);
      let offsetY = random(-30, 30);
      strokeWeight(random(1, 4));
      point(mouseX + offsetX, mouseY + offsetY);
    }
  }
}