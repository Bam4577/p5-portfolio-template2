let video;
let cellSize = 6; 

function setup() {
  createCanvas(500, 500);
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();
}

function draw() {
  background(255);
  video.loadPixels();

  
  for (let x = 0; x < video.width; x += cellSize) {
    for (let y = 0; y < video.height; y += cellSize) {
      
     
      let index = (x + y * video.width) * 4;
      let r = video.pixels[index];
      let g = video.pixels[index + 1];
      let b = video.pixels[index + 2];
      
      let brightness = (r + g + b) / 3;

     
      let size = map(brightness, 0, 255, cellSize * 1.3, 0);

      if (size > 0.5) { 
        fill(0);
        noStroke();
        
       
        push();
        translate(x, y);
        
        ellipse(random(-1, 1), random(-1, 1), size, size + random(0, 2));
        pop();
      }
    }
  }
}