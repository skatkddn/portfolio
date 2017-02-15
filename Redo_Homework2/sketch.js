/* Created by Sang Woo Nam 
   Last edited 2/14/2017
   Created a lego family
*/

var dir = 7; // sets moving speed
// value for father
var FatherX = 18; // father's top left corner x value 
var FatherY = 15; // father's top left corner y value
// value for mother
var MotherX = 18; // mother's top left corner x value
var MotherY = 787; // mother's top left corner y value
// value for son
var SonX = 926; // son's top left corner x value
var SonY = 66; // son's top left corner y value
// value for baby
var BabyX = 926; // baby's top left corner x value
var BabyY = 853; // baby's top left corner y value

function setup() {
  // set up Canvas Size 1000 * 1000 
  createCanvas(1000, 1000);
}

function draw() {
  // background color
  background(216, 255, 251);
  // father 
  // father's hair
  // no stroke 
  noStroke(); 
  // fill yellow color
  fill(228,255,0);  
  // sets father's hair position
  quad(FatherX, FatherY, FatherX+51, FatherY, FatherX+51, FatherY+36, FatherX, FatherY+36); 
  // father's face 
  // fill skin color 
  fill(245,204,160); 
  // sets father's face position
  quad(FatherX, FatherY+36, FatherX+51, FatherY+36, FatherX+51, FatherY+85, FatherX, FatherY+85); 
  // father's body 
  // fill green color 
  fill(0, 166, 81); 
  // sets father's body position
  quad(FatherX, FatherY+85, FatherX+51, FatherY+85, FatherX+51, FatherY+135, FatherX, FatherY+135); 
  // father's pants 
  // fill pink color
  fill(250, 110, 170);  
  // sets father's pants positon
  quad(FatherX, FatherY+135, FatherX+51, FatherY+135, FatherX+51, FatherY+175, FatherX, FatherY+175); 
  // father movement
  // sets father's speed on x axis
  FatherX = FatherX + dir; 
  // moving x direction until x == 294
  if (FatherX > 294) { 
    // sets max value of x position 294
    FatherX = max(0, 294); 
    // sets father's speed on y axis
    FatherY = FatherY + dir; 
    // moving y direction until y == 294
     if (FatherY > 364) { 
       // sets max value of y position 294
       FatherY = max(0, 364); 
      }
  }
  // mother 
  // mother's hair
  // no stroke
  noStroke();  
  // fill yellow color 
  fill(228,255,0); 
  // sets mother's hair position
  quad(MotherX, MotherY, MotherX+51, MotherY, MotherX+51, MotherY+24, MotherX, MotherY+24);  
  // mother's face 
  // fill skin color
  fill(245,204,160);  
  // sets mother's face position
  quad(MotherX, MotherY+24, MotherX+51, MotherY+24, MotherX+51, MotherY+75, MotherX, MotherY+75);   
  // mother's body 
  // fill cloth color
  fill(247,148,28);
  // sets mother's face position
  quad(MotherX, MotherY+75, MotherX+51, MotherY+75, MotherX+51, MotherY+162, MotherX, MotherY+162); 
  // mother's foot 
  // fill skin color 
  fill(245,204,160);  
  // sets mother's foot position
  quad(MotherX, MotherY+162, MotherX+51, MotherY+162, MotherX+51, MotherY+183, MotherX, MotherY+183);   
  // mother movement
  // sets mother's speed on x axis
  MotherX = MotherX + dir;
  // moving x direction until 400
  if (MotherX > 400) { 
    // sets max value of x position 400
    MotherX = max(0, 400); 
    // sets mother's speed on y axis
    MotherY = MotherY - dir; 
    // moving y direction until x == 358
     if (MotherY < 358) { 
       // sets min value of y position 358
       MotherY = min(358, 358); 
     }
  }
  // son 
  // son's hair
  // no stroke
  noStroke();  
  // fill yellow color
  fill(228,255,0);  
  // sets son's hair position
  quad(SonX, SonY, SonX+51, SonY, SonX+51, SonY+18, SonX, SonY+18);  
  // son's face 
  noStroke();
  // fill skin color
  fill(245,204,160);  
  // sets son's face position 
  quad(SonX, SonY+18, SonX+51, SonY+18, SonX+51, SonY+56, SonX, SonY+56);  
  // son's body 
  noStroke();  
  // fill cloth color 
  fill(239,76,20); 
  // sets son's cloth position
  quad(SonX, SonY+56, SonX+51, SonY+56, SonX+51, SonY+94, SonX, SonY+94); 
  // son's pants 
  noStroke();  
  // fill pants color
  fill(0,174,239);  
  // set son's foot position
  quad(SonX, SonY+94, SonX+51, SonY+94, SonX+51, SonY+136, SonX, SonY+136);   
  // sets son's speed on x axis
  SonX = SonX - dir;
  // moving x direction until 513
  if(SonX < 513) {
    // sets min value of x position 513
    SonX = min(513, 513);
    // sets son's speed on y axis
    SonY = SonY + dir;
    // moving y direction until x == 405
     if(SonY > 405) { 
       // sets max value of y position 513
       SonY = max(0, 405); 
     }
  }  
  // baby
  // baby's face 
  // noStroke
  noStroke();  
  // fill skin color
  fill(245,204,160);  
  // sets son's face position
  quad(BabyX, BabyY , BabyX+51, BabyY, BabyX+51, BabyY+37, BabyX, BabyY+37);   
  // baby's cloth 
  // fill cloth color 
  fill(0,174,239); 
  // sets son's cloth position
  quad(BabyX, BabyY+37, BabyX+51, BabyY+37, BabyX+51, BabyY+117, BabyX, BabyY+117); 
  // Baby's movement
  // sets Baby's speed on x axis
  BabyX = BabyX - dir;
  // moving x direction until 622
  if(BabyX < 622) { 
    // sets min value of x position 622
    BabyX = min(622, 622); 
    // sets Baby's speed on y axis
    BabyY = BabyY - dir;
    // moving y direction until x == 425
     if(BabyY < 425) { 
       // sets min value of y position 425
       BabyY = min(425, 425);
     }
  }
}