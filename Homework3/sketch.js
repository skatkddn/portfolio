/*  This monster is created by Sang Woo Nam
    Last edited (2/4/2017)
    Program that draw a robot having moving eyes and jumping 
    Uses functions and parameters with mouse events 
*/
var page = 0;             // this is the value for switching monster's action (eye movement, jumping)
var eyeDirection = 1;     // eyeDirection represents the speed and direction monster's eyes' moving
var jumpDir = 2;          // jumpDir represents the speed and direction monster is moving
var jumpValue = 0;        // the value is adding to the y position of monster
var backgroundColor = 249 // value of the background color 


function setup() {
  createCanvas(800, 1000); // creates a vertical rectangle canvas 
  background(249);         // sets the background color to light gray 
  rectMode(CENTER);        // sets rects to be drawn from the center 
}

function draw() {
  background(backgroundColor);
  monster(400, 200 + jumpValue);            // draws the monster at 400, 200 + jumpValue
  if (page == 0) {                          // if var page = 0, the eyes move left or right fllowed by mouse X position
    if (mouseX < 400) {                     // the value 400 is the x position that divides left and right of the monster's x position. If mouseX is smaller than 400, monster's eyes move left.  
      eyeDirection = eyeDirection * -1      // change eye direction 
      eyeDirection = max(-20, mouseX - 400);// this code prevents eyes to leave monster's face
    } else if (mouseX >= 400) {             // If mouseX is greater than 400, monster's eyes move right.
      eyeDirection = eyeDirection * -1      // change eyes' direction
      eyeDirection = min(20, mouseX - 400); // this code prevents eyes to leave monster's face
    }
  } else {                                      // if the page value is not 0, monster moves up and down. 
    if (jumpValue > 200 || jumpValue < -100) {  // if jumpValue is greater than 200 or less than -100, monster changes y direction  
      jumpDir = jumpDir * -1;                   // change monster's y direction
    }
    jumpValue = jumpValue + jumpDir;            // put the value of jumpValue + jumpDir to jumpValue
  }
}

// page switch 0 to 1 by mousePressed 
function mousePressed() {
  if (page ==0) {
    page = 1 - page;                      // switch page 0 to 1
    eyeDirection = 1;                     // move the eyes to middle
    backgroundColor = 150                 // change background color
  } else {
    page = 1 - page;                      // switch page 1 to 0                     
    jumpValue = 0;                        // move the monster's y value to default value 0 
    backgroundColor = 249                 // change background color
  }
}
  
// draws a monster at the x,y position passed 
// this monster includes head, a body, hands, legs 
function monster(x, y) {
  head(x, y);
  legs(x, y + 500);
  body(x, y + 322);
  hands(x, y + 250);
  
}

// draw the head of the monster at the x, y location
// this monster's head includes antenas, eyes, mouth, ears
function head(x, y) {
  ears(x, y);
  antenas(x, y);
  neck(x, y);
  // head green ellipse
  noStroke();
  fill(133, 221, 217);
  ellipse(x, y + 50, 280, 280);
  // head dark green line
  noFill()
  stroke(94, 156, 153);
  strokeWeight(3);
  ellipse(x, y + 50, 267, 267);
  eyes(x, y)
  eyesMove(x + eyeDirection, y);
  mouth(x, y);
}

// draws the antenas at the x, y location 
function antenas(x, y) {
  // antena
  // antena stick
  stroke(163, 211, 156);
  strokeWeight(10);
  line(x, y + 20, x - 133, y - 105);
  line(x, y + 20, x + 133, y - 105);
  // antena blue ellipse
  noStroke();
  fill(63, 49, 191);
  ellipse(x - 127, y - 100, 25, 25);
  ellipse(x + 127, y - 100, 25, 25);
  // antena gray ellipse
  noStroke();
  fill(235);
  ellipse(x - 130, y - 105, 13, 13);
  ellipse(x + 130, y - 105, 13, 13);
}

// draws the neck at the x, y location 
function neck(x, y) { 
  noFill();
  stroke(94, 156, 153);
  strokeWeight(5);
  ellipse(x, y + 190, 100, 18);
  ellipse(x, y + 210, 100, 18);
}

// draws the eyes at the x, y location 
function eyes(x, y) {
  // outside part of eyes
  noStroke();
  fill(255);
  ellipse(x - 58, y + 43, 90, 90);
  ellipse(x + 58, y + 43, 90, 90);
  // outside blue line of eyes
  stroke(184, 232, 248);
  strokeWeight(2);
  noFill();
  ellipse(x - 58, y + 43, 85, 85);
  ellipse(x + 58, y + 43, 85, 85);
}

// draws the eyes that move followed by mouseX position
function eyesMove(x, y) {
  // middle part of eyes
  noStroke();
  fill(0, 74, 128);
  ellipse(x - 58, y + 43, 46, 46);
  ellipse(x + 58, y + 43, 46, 46);
  // inner part of eyes
  noStroke();
  fill(235);
  ellipse(x - 52, y + 35, 16, 16);
  ellipse(x + 64, y + 35, 16, 16);
}

// draws the ears at the x, y location 
function ears(x, y) {
  noStroke();
  fill(63, 49, 191)
  // left ear
  ellipse(x - 125, y + 45, 80, 80);
  // right ear
  ellipse(x + 125, y + 45, 80, 80);
}

// draws the mouth at the x, y location
function mouth(x, y) {
  // outside part of mouth
  noStroke();
  fill(243, 113, 73);
  rect(x, y + 135, 85, 45, 10);
  // inside part of mouth
  // the first line of rectangle
  noStroke();
  fill(183, 82, 52);
  rect(x, y + 125, 8, 8);
  rect(x - 10, y + 125, 8, 8);
  rect(x - 20, y + 125, 8, 8);
  rect(x - 30, y + 125, 8, 8);
  rect(x + 10, y + 125, 8, 8);
  rect(x + 20, y + 125, 8, 8);
  rect(x + 30, y + 125, 8, 8);
  // the second line of rectangle
  rect(x, y + 135, 8, 8);
  rect(x - 10, y + 135, 8, 8);
  rect(x - 20, y + 135, 8, 8);
  rect(x - 30, y + 135, 8, 8);
  rect(x + 10, y + 135, 8, 8);
  rect(x + 20, y + 135, 8, 8);
  rect(x + 30, y + 135, 8, 8);
  // the third line of rectangle
  rect(x, y + 145, 8, 8);
  rect(x - 10, y + 145, 8, 8);
  rect(x - 20, y + 145, 8, 8);
  rect(x - 30, y + 145, 8, 8);
  rect(x + 10, y + 145, 8, 8);
  rect(x + 20, y + 145, 8, 8);
  rect(x + 30, y + 145, 8, 8);
}

// draws the body at the x, y location 
function body(x, y) { 
  // draws the body at the x, y location 
  noStroke(); 
  fill(133, 221, 217);
  rect(x, y, 220, 200, 10);
  // draw red button at the x, y location
  noStroke();
  fill(250);
  ellipse(x - 60, y - 60, 35, 35);
  fill(255, 0, 0);
  ellipse(x - 60, y - 60, 30, 30);
  greenPlate(x, y);
}

// draws the green plate at the x, y location 
function greenPlate(x, y) {
  // draws the green plate body at the x, y location
  noStroke();
  fill(60, 100, 98);
  rect(x + 40, y, 80, 150, 10);
  // draws inside of the green plate at the x, y location 
  fill(234);
  rect(x + 40, y, 70, 8);
  rect(x + 40, y - 15, 70, 8);
  rect(x + 40, y - 30, 70, 8);
  rect(x + 40, y - 45, 70, 8);
  rect(x + 40, y - 60, 70, 8);
  rect(x + 40, y + 15, 70, 8);
  rect(x + 40, y + 30, 70, 8);
  rect(x + 40, y + 45, 70, 8);
  rect(x + 40, y + 60, 70, 8);
}

// draws the hands at the x, y location
function hands(x, y) {
  // draws arms at the x, y location 
  noStroke();
  fill(94, 156, 153);
  // left arm
  rect(x - 140, y, 60, 40);
  rect(x - 160, y + 50, 25, 135);
  // right arm
  rect(x + 140, y, 60, 40);
  rect(x + 160, y + 50, 25, 135);
  // draws joints at the x, y location 
  fill(63, 49, 191);
  // left shoulder joint 
  ellipse(x - 160, y, 70, 70);
  ellipse(x - 160, y + 75, 35, 35);
  // right shoulder joint
  ellipse(x + 160, y, 70, 70);
  ellipse(x + 160, y + 75, 35, 35);
  fill(44, 34, 131);
  // left elbow joint
  ellipse(x - 160, y, 50, 50);
  // right elbow joint
  ellipse(x + 160, y, 50, 50);
  // draws hands at the x, y location 
  // left hand
  fill(133, 221, 217);
  ellipse(x - 160, y + 150, 75, 75);
  fill(backgroundColor);
  rect(x - 160, y + 185, 75, 75);
  ellipse(x - 160, y + 150, 55, 55);
  // right hand
  fill(133, 221, 217);
  ellipse(x + 160, y + 150, 75, 75);
  fill(backgroundColor);
  rect(x + 160, y + 185, 75, 75);
  ellipse(x + 160, y + 150, 55, 55);
}

// draws the legs at the x, y locaton 
function legs(x, y) {
  // draw legs at the x, y location
  noStroke();
  fill(249, 173, 129); 
  // left leg
  rect(x - 50, y - 40, 20, 90);
  // right leg
  rect(x + 50, y - 40, 20, 90);
  // draw joints at the x, y location 
  // left joint
  fill(44, 34, 131);
  ellipse(x - 50, y - 40, 30, 30);
  // right joint
  ellipse(x + 50, y - 40, 30, 30);
  // left foot 
  rect(x - 75, y + 20, 100, 30, 5);
  fill(255, 245, 104);
  rect(x - 75, y + 20, 100, 10);
  // right foot
  fill(44, 34, 131);
  rect(x + 75, y + 20, 100, 30, 5);
  fill(255, 245, 104);
  rect(x + 75, y + 20, 100, 10);
}