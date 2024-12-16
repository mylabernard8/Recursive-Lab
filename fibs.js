let n = 1; // Start with the 1st Fibonacci number

function setup() {
  createCanvas(400, 400);//canvas
  noLoop();//ensuring code only runs once
  textAlign(CENTER, CENTER);//text align in center
}

function draw() {
  background(220);
  text(`${n}th Fibonacci number: ${fib(n)}`, width / 2, height / 2);//text
}

function fib(n) {
  if (n <= 0) return 0; // handling invalid input
  if (n === 1 || n === 2) return 1; // base cases
  return fib(n - 1) + fib(n - 2);   // recursive calculation
}

