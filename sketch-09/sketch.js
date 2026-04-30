let video;

function setup() {
  createCanvas(500, 500);
  video = createCapture(VIDEO);
  video.size(500, 500);
  video.hide();
  
  background(255); 
}

function draw() {
  
  
  video.loadPixels();
  
  
  for (let i = 0; i < 1000; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let index = (x + y * video.width) * 4;
    let r = video.pixels[index];
    let g = video.pixels[index + 1];
    let b = video.pixels[index + 2];
    
    let brightness = (r + g + b) / 3;

    if (brightness < 100) {
      fill(0, 10); 
      noStroke();
      rect(x, y, random(2, 8), random(2, 8));
    }
  }
}
function keyPressed() {
  background(255);
}