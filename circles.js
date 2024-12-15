// recursive drawing of squares along both x and y axes
// base case: Stop recursion when the circle's radius is below a certain size
// recursive case: draw smaller squares at specific offsets from the current square

function setup() {
  createCanvas(400, 400); // Set up the canvas size
  noFill();  // don't fill in the shapes 
  noLoop(); // making sure the drawing only happens once
}

function draw() {
  background(220); // background color
  rSquare(width / 2, height / 2, width / 4); // Start recursion with the initial square
}

function rSquare(x, y, size) {
  if (size < 4) { // base case:recursive code (stopping when squares get too small)
    return;
  }

  // drawing first square
  square(x - size / 2, y - size / 2, size);

  // draw smaller squares
  const newSize = size / 2;

  // recursive case: recursive formula for each corner of the squares
  rSquare(x - newSize, y - newSize, newSize); // Top-left
  rSquare(x + newSize, y - newSize, newSize); // Top-right
  rSquare(x - newSize, y + newSize, newSize); // Bottom-left
  rSquare(x + newSize, y + newSize, newSize); // Bottom-right
}
