function setup() {
  createCanvas(720,480); //create canvas size 
  smooth(); 
  strokeWeight(2); //define strokes' thickness 
}

function draw(){
  background(205); //gray background //if this is not existed the robot would be drawn overlapped
  translate(mouseX, mouseY); //Mouse tracking
  
  //Neck 
  stroke(102); //type of stroke 
  line (266, 257, 266, 162); //The first line of neck 
  line (276, 257, 276, 162); //The second line of neck 
  line (286, 257, 286, 162); //The third line of neck 
  
  
  //Antennae
  line (276, 155, 246, 112); //The first line of Antennae 
  line (276, 155, 306, 56); //The second line of Antennae 
  line (276, 155, 347, 170); //The third line of Antennae 
  
  
  //Body 
  noStroke();
  fill(102); // Gray Color on ellipse
  ellipse(264,377,66,66); // ellipse is placed at the bottom 
  fill(0); //Black color on black rectangle body
  rect(219,257,90,120); // Black rectangle body 
  fill(102); //Gray Color on rectangle
  rect(219, 274, 90, 6) // Gray line on the black rectangle body 
  
  
  //Head 
  fill(0); //Black color on head ellipse 
  ellipse(276,155,90,90); // The biggest ellipse on head 
  fill(255); // White color 
  ellipse(288, 150, 28, 28); //The while ellipse on head 
  fill(0); // Black color
  ellipse(288,150,6,6);  // The black dot in white ellipse 
  fill (153); //Gray Color
  ellipse(263,148,10,10); // One of the three dots on head 
  ellipse(296,130,8,8); // One of the three dots on head 
  ellipse(305,162,6,6); // One of the three dots on head 
  
  
  
  
  

  
}
