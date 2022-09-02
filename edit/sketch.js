let x = 100;
let y = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("#333");
  circle(x, y, 40);
  square(200, 200, 100);
  stroke("#f00");

  if (keyIsDown(LEFT_ARROW)) {
    x = x - 10;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x = x + 10;
  } else if (keyIsDown(UP_ARROW)) {
    y = y - 10;
  } else if (keyIsDown(DOWN_ARROW)) {
    y = y + 10;
  }
}
