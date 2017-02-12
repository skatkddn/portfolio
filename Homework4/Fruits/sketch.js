/* Written by Sang Woo Nam 
   Last edited 02/11/2017
   Created a tree making fruits
*/

var bubbles = []; // sets arrays in value (bubbles) 
var fruits = [];  // sets arrays in value (fruits)

//preload 10 fruits images from images folder
function preload() {
  for (var i = 0; i < 10; i++) {
    fruits[i] = loadImage('images/fruit' + i + '.png');
  }
}

function setup() {
  createCanvas(1000, 600); // sets the canvas to 1000, 600
}

// sets mousePressed events
function mousePressed() {
  // sets random value fruitsWidth (fruit images' width) between 20 to 150
  var fruitsWidth = random(20, 150);       
  // sets value fruitsHeight same as fruitsWidth
  var fruitsHeight = fruitsWidth;           
  // sets random value r between 0 to 9
  var r = floor(random(0, fruits.length));  
  // create new array element to array(bubbles) by mousePressed  
  // once mouse pressed, a random fruit will be place in mouseX, mouseY position with random width and height between 20 to 150  
  bubbles.push(new Bubble(mouseX, mouseY, fruits[r], fruitsWidth, fruitsHeight)); 
}

function draw() {
  // green color stands for a tree
  background(156, 233, 32);
  // bubbles [0] to bubbles [9] are randomly displayed on canvas 
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
  }
}

// sets what Bubble function does
function Bubble(x, y, img, width, height) {
  // define new Bubble's x position
  this.x = x;
  // define new Bubble's Y position
  this.y = y;
  // define random image is displayed once new Bubble is created
  this.img = img;
  // define random width of image
  this.width = width;
  // define random height of image
  this.height = height;
  // sets display function
  this.display = function() {
    //image's anchor point is moved to center of the image
    imageMode(CENTER);  
    image(this.img, this.x, this.y, width, height);
  }
}
