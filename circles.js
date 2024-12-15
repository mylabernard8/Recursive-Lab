// Recursive drawing of circles along both x and y axes
// Base case: Stop recursion when the circle's radius is below a certain size
// Recursive case: Draw smaller circles at specific offsets from the current circle

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

  // drawing recursive squares (I still need to flush out and implement the recursive case)
}
