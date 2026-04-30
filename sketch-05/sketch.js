function setup() {
    createCanvas(500, 500);
    background(255);
  }
  
  function draw() {
    
  }
  
  function mouseDragged() {
    // la souris en cliquant
    stroke(0, 150); // Noir transparent
    
    // des petits points 
    let density = 25; 
    let area = 30;
    
    for (let i = 0; i < density; i++) {
      let offsetX = random(-area, area);
      let offsetY = random(-area, area);
      strokeWeight(random(1, 3)); // Grains variées
      point(mouseX + offsetX, mouseY + offsetY);
    }
  }