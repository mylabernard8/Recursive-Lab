let n = 1; // Start with the 1st Fibonacci number
let fibs = [0, 1]; // store the first two Fibonacci numbers for memoization

function setup() {
  createCanvas(400, 400);//canvas
  noLoop();//ensuring code only runs once
  textAlign(CENTER, CENTER);//text align in center
}

function draw() {
  background(220);
  console.log(fibs); // logging numbers in console
  text(`${n}th Fibonacci number: ${fib(n)}`, width / 2, height / 2);//text
}

function fib(n) {
  if (n <= 0) return 0; // handle invalid input
  if (fibs[n] !== undefined) return fibs[n]; // return memoized result if there is one

  // calculate recursively and store the result
  fibs[n] = fib(n - 1) + fib(n - 2);
  return fibs[n];
}

function keyPressed() {
  if (key === " ") { // if space bar is pressed
    n++;//increases value by one
    redraw(); // redraw the canvas with the new Fibonacci number
  }
}

