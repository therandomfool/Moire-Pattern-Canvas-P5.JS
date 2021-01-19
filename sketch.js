let x = 0

function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(220);
  for (let i = 0; i < 1000; i += 10) {
    noFill()
    stroke('purple')
    strokeWeight(4)
    ellipse(350, 250, i, i)

    stroke('red')
    strokeWeight(3)
    ellipse(x, 250, 500 - i, 500 - i)
  }
  if (x > width) {
    x = 0
  } else {
    x = x + 3
  }
}
