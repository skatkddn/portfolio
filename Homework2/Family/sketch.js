var dir = 7; // moving speed
// value for father
var a = 18; // father's top left corner x value 
var b = 15; // father's top left corner y value

// value for mother
var c = 18; // mother's top left corner x value
var d = 787; // mother's top left corner y value

// value for son
var e = 926; // son's top left corner x value
var f = 66; // son's top left corner y value

// value for baby
var g = 926; // baby's top left corner x value
var h = 853; // baby's top left corner y value



function setup() {
  
  // Canvas Size 
  createCanvas(1000, 1000);
  
}

function draw() {
  
  // background color
  background(216, 255, 251);
  
  // father 
  // father's hair
  noStroke(); // no stroke 
  fill(228,255,0); // fill yellow color 
  quad(a, b, a+51, b, a+51, b+36, a, b+36); // father's hair position
  
  // father's face 
  noStroke(); 
  fill(245,204,160); // fill skin color 
  quad(a, b+36, a+51, b+36, a+51, b+85, a, b+85); // father's face position
  
  // father's body 
  noStroke(); 
  fill(0, 166, 81); // fill green color 
  quad(a, b+85, a+51, b+85, a+51, b+135, a, b+135); // father's body position
  
  // father's pants 
  noStroke();
  fill(250, 110, 170); // fill pink color 
  quad(a, b+135, a+51, b+135, a+51, b+175, a, b+175); //father's pants positon
  
  // father movement
  a = a + dir; // dir adds to x every single time 
  
  if(a > 294) { // moving x direction until 294
    // directions
    a = max(294); // stop moving x direction at 294
    b = b + dir; // start moving y direction
     if(b > 364) { // moving y direction until 294
       b = max(364); // stop moving y direction at 364
     }
  }
  
  // mother 
  // mother's hair
  noStroke(); // no stroke 
  fill(228,255,0); // fill yellow color 
  quad(c, d, c+51, d, c+51, d+24, c, d+24); // mother's hair position 
  
  // mother's face 
  noStroke();  
  fill(245,204,160); // fill skin color 
  quad(c, d+24, c+51, d+24, c+51, d+75, c, d+75); // mother's face position  
  
  // mother's body 
  noStroke();  
  fill(247,148,28); // fill cloth color 
  quad(c, d+75, c+51, d+75, c+51, d+162, c, d+162); // mother's face position

  // mother's foot 
  noStroke();  
  fill(245,204,160); // fill skin color 
  quad(c, d+162, c+51, d+162, c+51, d+183, c, d+183); // mother's foot position  
  
  // mother movement
  c = c + dir; // dir adds to x every single time
  
  if(c > 400) { // moving x direction until 400
    // directions
    c = max(400); // stop moving x direction at 400
    d = d - dir; // start moving y direction
     if(d < 358) { // moving y direction until 358
       d = min(358); // stop moving y direction at 358
     }
  }
  
  // son 
  // son's hair
  noStroke(); // no stroke 
  fill(228,255,0); // fill yellow color 
  quad(e, f, e+51, f, e+51, f+18, e, f+18); // son's hair position 
  
  // son's face 
  noStroke();  
  fill(245,204,160); // fill skin color 
  quad(e, f+18, e+51, f+18, e+51, f+56, e, f+56); // son's face position  
  
  // son's body 
  noStroke();  
  fill(239,76,20); // fill cloth color 
  quad(e, f+56, e+51, f+56, e+51, f+94, e, f+94); // son's cloth position

  // son's pants 
  noStroke();  
  fill(0,174,239); // fill pants color 
  quad(e, f+94, e+51, f+94, e+51, f+136, e, f+136); // mother's foot position  
  
  // mother movement
  e = e - dir; // dir substract from x every single time
  
  if(e < 513) { // moving x direction until 513
    // directions
    e = min(513); // stop moving x direction at 513
    f = f + dir; // start moving y direction
     if(f > 405) { // moving y direction until 405
       f = max(405); // stop moving y direction at 405
     }
  }  
  
  // baby
  
  // baby's face 
  noStroke();  
  fill(245,204,160); // fill skin color 
  quad(g, h, g+51, h, g+51, h+37, g, h+37); // son's face position  
  
  // baby's cloth 
  noStroke();  
  fill(0,174,239); // fill cloth color 
  quad(g, h+37, g+51, h+37, g+51, h+117, g, h+117); // son's cloth position

  
  // mother movement
  g = g - dir; // dir substract from x every single time
  
  if(g < 622) { // moving x direction until 622
    // directions
    g = min(622); // stop moving x direction at 622
    h = h - dir; // start moving y direction
     if(h < 425) { // moving y direction until 425
       h = min(425); // stop moving y direction at 425
     }
  }
}