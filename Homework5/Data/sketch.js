/*  Created by Sang Woo Nam
    Last edited 02/26/2017
    This program displays a visualizations of population 
    in United States
*/

// array of states' images
var state = [];

// array of states' population in 2017
var populationRank= [
  326474013, 39849872, 28449186, 21002678, 19889657, 12819975, 12815607, 11646273, 10450316, 10247632, 9935116, 8996351, 8492783, 7384721,
  7026629, 6873018, 6705339, 6663280, 6123362, 6068511, 5795147, 5658546, 5554532, 5030118, 4884115, 4714192, 4450042, 4144527,
  3974794, 3583134, 3152735, 3098761, 3000942, 2995973, 2990113, 2929909, 2084193, 1922610, 1834882, 1695178, 1335832, 1327472,
  1059080, 1052343, 965866, 868799, 790701, 697012, 624592
  ];

// array of states' names
var stateName = [
  "United States","California",	"Texas", "Florida", "New York", "Pennsylvania", "Illinois", "Ohio", "Georgia", "North Carolina", "Michigan",
  "New Jersey", "Virginia", "Washington", "Arizona", "Massachusetts", "Tennessee", "Indiana", "Missouri", "Maryland", "Wisconsin", "Colorado",
  "Minnesota", "South Carolina", "Alabama", "Louisiana", "Kentucky", "Oregon", "Oklahoma", "Connecticut", "Iowa", "Utah", "Arkansas", "Nevada",
  "Mississippi","Kansas", "New Mexico", "Nebraska", "West Virginia", "Idaho", "New Hampshire", "Maine", "Rhode Island", "Montana",
  "Delaware", "South Dakota", "North Dakota", "Vermont", "Wyoming"
  ];

// preload forty nine images in img folder
function preload() {
  for (var i = 0; i < 50; i++) {
    state[i] = loadImage('img/state' + i + '.png');
  }
}

function setup() {
  // sets the canvas size to 2000 * 800
  createCanvas(2000,800); 
}

function draw() {
  // clears the background with white color
  background(255);
  // define text size 20
  textSize(14);
  // text color
  color(100);
  // draws a paragraph 900, 100 
  text("Reference Data From: http://worldpopulationreview.com/states/", 900, 230);
  // draws gradient img
  image(state[49], 900, 150, 370, 40);
  // draws text
  text("More Population", 1164, 130);
  // draws text
  text("Less Population", 900, 130);
  // draws the states' images on the left side
  drawLabels();
  // draws the states' images, green outlines and texts on the right side
  TextImage();
}

// draws the states' images on the left side
function drawLabels() {
  for (i = 0; i < 49; i++) {
    image(state[i], (i % 7 * 100), floor(i / 7) * 100, 100, 100);
  }
}

// draws the states' images, green outlines  and texts on the right side
function TextImage() { 
  for (i = 0; i < 49; i++) {
    if (mouseX >= (i % 7 * 100) && mouseX < ((i % 7 * 100) + 100) && mouseY >= floor(i / 7) * 100 && mouseY < (floor(i / 7) * 100) + 100) {
      // sets text size
      textSize(20);
      // sets text for states' names 
      text(stateName[i], 1080, 300);
      // sets text "Population"
      text("Population:", 1080, 330);
      // sets text for numbers of population
      text(populationRank[i], 1185, 330);
      // sets images of states
      image(state[i], 900, 250, 120, 120);
      // draws green strokes
      stroke(0, 255, 0);
      // sets strokes' weight
      strokeWeight(2);
      noFill();
      // sets the green strokes location and size
      rect((i % 7 * 100), floor(i / 7) * 100, 100, 100, 10);
    }
  }
}
