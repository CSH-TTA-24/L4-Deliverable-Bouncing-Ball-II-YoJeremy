let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;
let dvdImage;
let dvdSound;
function preload() {
  dvdImage = loadImage("Assets/DVD.png")
  dvdSound = loadSound("Assets/Ping.mp3")
}

function setup() {
  createCanvas(500, 500);
  background(0);
  xSpeed = random(-5, 5)
  ySpeed = random(-5, 5)
  imageMode(CENTER)
}

function draw() {
  background(0);

  fill(0, 255, 0);
  image(dvdImage, xPos, yPos, 50, 50);
  xPos += xSpeed * xDirection;
  yPos += ySpeed * yDirection;
  if (xPos < 25 || xPos > 475) {
    xDirection *= -1
 dvdSound.play()
  }
  if (yPos < 25 || yPos > 475) {
    yDirection *= -1
     dvdSound.play()
  }
}
