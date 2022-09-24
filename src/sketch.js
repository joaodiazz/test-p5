let x = 100;
let y = 100;

function setup() {
  createCanvas(800, 500);
  stroke("#000");
}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, 70, 70);

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
