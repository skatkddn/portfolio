/* Written by Sang Woo Nam 
   Last edited 02/11/2017
   Created a tree making fruits
*/

var cities = [];  // sets arrays in value (cities)
var number = 0;   // sets value (number) equal 0

// preload ten cities images from images folder
function preload() {
  for (var i = 0; i < 11; i++) {
    cities[i] = loadImage('images/chicago' + i + '.jpg')
  }
}

function setup() {
 createCanvas(1000,631);  // sets the canvas to 1000, 631
}

// sets key pressed events
function keyPressed() {
   if(keyCode == LEFT_ARROW) {
     // prevent the value number to less than 0
     if (number == 0) {
       number == 0;
     } else if (number > 0) {
        number = number - 1;
     }
    } else if (keyCode == RIGHT_ARROW) {
      // prevent the value number to greater than 10
        if (number == 10) {
          number == 10; 
        } else if (number < 10) {
            number = number + 1;
        } 
    }
  }

function draw() {
  // placed cities images at (0, 0) 1000 width 631 height
  image(cities[number], 0, 0, 1000, 631);
}



