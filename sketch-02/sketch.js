let grid = [];
let cellSize = 25;

function setup() {
  createCanvas(500, 500);
  frameRate(15); // Vitesse des transitions
  noStroke(); // Supprime les contours
  
  initializeGrid(); // Initialisation de la grille
}

function initializeGrid() {
  for (let x = 0; x < width / cellSize; x++) {
    grid[x] = [];
    for (let y = 0; y < height / cellSize; y++) {
      grid[x][y] = {
        size: random(cellSize * 8.2, cellSize * 0.3) 
      };
    }
  }
}

function draw() {
  background(255);
  fill(8,55); // Uniquement colorié avec du noir
  
  for (let x = 0; x < width / cellSize; x++) {
    for (let y = 0; y < height / cellSize; y++) {
      // Variation progressive de la taille
      grid[x][y].size = lerp(grid[x][y].size, random(cellSize * 0.2, cellSize * 3.8), 0.8);
      
      ellipse(
        x * cellSize + cellSize / 3, 
        y * cellSize + cellSize / 2, 
        grid[x][y].size, 
        grid[x][y].size
      );
    }
  }
}