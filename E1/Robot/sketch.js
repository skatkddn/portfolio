function setup() {
  createCanvas(1000,1000); //create canvas size 
  smooth(); 
  strokeWeight(2); //define strokes' thickness 
}

function draw(){
  background(255); //gray background //if this is not existed the robot would be drawn overlapped
  translate(mouseX,mouseY); // the image follows mouse XY position

fill(0); //fill black color
ellipse(300,300,200,200); //The biggist ellipse
fill(255);//white color on rectangle hiding half of the biggest ellipse 
noStroke(0); //no stroke on rectangle
rect(100,200,200,200); //The white rectangle( x,y position & size)
fill(0); //black color on the second biggest ellipse placed at the bottom of the biggist ellipse 
ellipse(300,350,100,100); //the second biggest ellipse (x,y position & size)
fill(255); //white color on the second biggest ellipse placed at the top of the biggist ellipse 
ellipse(300,250,100,100);//the second biggest ellipse (x,y position & size)
fill(255); //while color on the smallest ellipse placed in the second black ellipse
ellipse(300,350,30,30); //the smallest ellipse (x,y position & size)
fill(0); //black color on the smallest ellipse placed in the second white ellipse
ellipse(300,250,30,30); //the smallest ellipse (x,y position & size)
stroke(0); //ellipse stroke color (black)
noFill(); //no fill on the ellipse 
strokeWeight(2); // stroke thickness
ellipse(300,300,200,200); // ellipse size 

  
}
