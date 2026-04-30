let time = 0;

function setup() {
  //3D : ajouter WEBGL
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(255);
  
  
  fill(0, 100); 
  stroke(0); 
  strokeWeight(2); 
  rotateX(time * 0.2);
  rotateY(time * 0.3);
  rotateZ(time * 0.1);

  for(let i = 0; i < 5; i++){
    push();
    let deformX = random(0.9, 1.1);
    let deformY = random(0.9, 1.1);
    let deformZ = random(0.9, 1.1);
    
    scale(deformX, deformY, deformZ); 
    box(150);
    pop();
  }

  time += 0.05;
}