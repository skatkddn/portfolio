function setup() {
 createCanvas(1000,1054);
 
 //triangle 
 noStroke(0); //no stroke
 fill(159,182,46); // fill green color 
 triangle(79,354,79,378,100,367); //triangle position 

 //Green line 
 stroke(171,214,170);//green color RGB
 strokeWeight(2); // line thickness 
 line(39, 410, 283,284); //line postion 
 
 //circle 
 noStroke(0); //no stroke 
 fill(0,91,172); //fill blue color 
 ellipse(39,410,20,20);// ellipse position and size 
 
 //circle 
 noStroke(0); //no stroke 
 fill(51,175,68); //fill green color 
 ellipse(283,284,20,20);// ellipse position and size
 
 //green circle pulse 
 //smallest 
 stroke(186,226,246); //green color RGB
 noFill(); //noFill
 ellipse(119,426,10,10); //ellipse position and size
 
 //second smallest 
 stroke(186,226,246); //green color RGB
 noFill(); //noFill
 ellipse(119,426,20,20); //ellipse position and size
 
 //third smallest 
 stroke(186,226,246); //green color RGB
 noFill(); //noFill
 ellipse(119,426,30,30); //ellipse position and size
 
 //Forth smallest 
 stroke(186,226,246); //green color RGB
 noFill(); //noFill
 ellipse(119,426,40,40); //ellipse position and size
 
 
 //yellow circle with white stripes 
 noStroke(); //no stroke
 fill(251,184,56); //fill yellow RGB
 ellipse(208,370,75,75); //ellipse position and size
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,383,245,347) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,373,245,337) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,363,245,327) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,353,245,317) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,393,245,357) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,403,245,367) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,413,245,377) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,423,245,387) //line position 
 
 //white stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(170,433,245,397) //line position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(9,143,166); // fill dark green color 
 triangle(3,529,100,582,3,635); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(9,143,166); // fill dark green color 
 triangle(3,529,100,582,3,635); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(237,222,166); // fill yellow RGB color 
 triangle(3,529,100,582,100,476); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(237,222,166); // fill yellow RGB color 
 triangle(3,529,100,582,100,476); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(233,233,236); // fill gray RGB color 
 triangle(204,536,100,582,100,476); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(19,162,187); // fill green RGB color 
 triangle(204,536,100,582,204,635); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(19,162,187); // fill green RGB color 
 triangle(100,686,100,582,3,635); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(55,503,55,530,79,517); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(27,571,50,583,27,596); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(195,218,55); // fill green RGB color 
 triangle(203,424,302,371,302,476); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(253,394,253,419,274,407); //triangle position 

 //rectangle
 noStroke(0); //no stroke
 fill(250,177,30); // fill Orange RGB color 
 triangle(301,371,301,476,400,420); //triangle position  
 
 //rectangle
 noStroke(0); //no stroke
 fill(250,177,30); // fill Orange RGB color 
 triangle(401,530,302,476,401,420); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(333,392,333,423,305,406); //triangle position 
 
 //triangle 
 noStroke(0); //no stroke
 fill(203,213,48); // fill green RGB color 
 triangle(322,445,322,457,330,451); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(179,122,179); // fill purple RGB color 
 triangle(354,395,354,500,453,448); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(201,34,83); // fill red RGB color 
 triangle(354,395,455,340,453,448); //triangle position
 
 //quad
 noStroke(0); //no stroke
 fill(141,95,149); // fill dark purple RGB color 
 quad(355,426,355,455,410,425,385,411); //quad position
 
 //quad
 noStroke(0); //no stroke
 fill(171,34,75); // fill dark red RGB color 
 quad(410,425,385,411,454,377,454,402); //quad position
 
 //circle 
 noStroke(0); //no stroke 
 fill(255); //fill white color 
 ellipse(372,410,20,20);// ellipse position and size 
 
 //circle 
 noStroke(0); //no stroke 
 fill(255); //fill white color 
 ellipse(381,469,15,15);// ellipse position and size 
 
 //quad 
 noStroke(0); //no stroke 
 fill(229,219,69); //fill green color 
 quad(301,371,400,320,423,330,324,383); //quad position
 
 //quad 
 noStroke(0); //no stroke 
 fill(165,187,60); //fill green color 
 quad(377,279,377,307,420,324,447,308); //quad position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(4); //stroke thinkness
 line(400,271,400,355); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(4); //stroke thinkness
 line(412,271,412,355); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(4); //stroke thinkness
 line(424,271,424,368); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(4); //stroke thinkness
 line(436,271,436,375); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(4); //stroke thinkness
 line(448,271,448,382); //line position
 
 //triangle 
 noStroke(0); //no stroke
 fill(203,213,48); // fill green RGB color 
 triangle(276,300,276,313,287,306); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(162,188,69); // fill red RGB color 
 triangle(553,395,455,340,453,448); //triangle position
 
 //quad
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 quad(497,425,525,414,454,377,454,402); //quad position
 
 //triangle 
 noStroke(0); //no stroke
 fill(244,118,51); // fill orange RGB color 
 triangle(553,395,553,500,453,448); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(252,178,31); // fill yellow RGB color 
 triangle(497,425,497,471,453,448); //triangle position
 
 //quad
 noStroke(0); //no stroke
 fill(229,229,231); // fill gray RGB color 
 quad(497,424,497,471,522,484,522,411);//quad position
 
 //quad
 noStroke(0); //no stroke
 fill(224,225,170); // fill yellow RGB color 
 quad(400,476,400,530,454,501,454,447);//quad position
 
 //triangle 
 noStroke(0); //no stroke
 fill(201,35,84); // fill red RGB color 
 triangle(400,530,501,582,501,474); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(19,172,154); // fill green RGB color 
 triangle(454,449,452,552,553,500); //triangle position
 
 //quad
 noStroke(0); //no stroke
 fill(8,147,132); // fill dark green RGB color 
 quad(499,472,499,527,522,517,522,483);//quad position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(460,476,475,468,475,486); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(460,498,475,490,475,508); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(460,520,475,512,475,530); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(482,488,497,479,497,497); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(482,510,497,501,497,519); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(502,498,519,488,519,507); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(466,532,466,556,485,544); //triangle position

 //quad
 noStroke(0); //no stroke
 fill(165,187,59); // fill green RGB color 
 quad(501,526,548,502,599,531,501,582);//quad position

 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(407,493,407,512,422,503); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(179,122,179); // fill purple RGB color 
 triangle(501,581,400,634,400,530); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(125,199,174); // fill green RGB color 
 triangle(501,581,400,634,501,685); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(14,174,155); // fill dark green RGB color 
 triangle(501,581,501,620,537,602); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(14,174,155); // fill dark green RGB color 
 triangle(501,638,501,686,548,662); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(501,620,501,638,484,628); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(455,581,455,628,497,604); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(493,638,506,630,506,645); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(493,655,506,647,506,662); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(493,672,506,664,506,679); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(511,647,524,639,524,654); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(511,664,524,656,524,671); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(235,168,42); // fill orange RGB color 
 triangle(528,654,541,647,541,662); //triangle position
 
 //circle 
 noStroke(0); //no stroke 
 fill(255,241,36); //fill yellow color 
 ellipse(502,582,20,20);// ellipse position and size 
 
 //circle 
 noStroke(0); //no stroke 
 fill(181,121,180); //fill purple color 
 ellipse(525,554,15,15);// ellipse position and size
 
 //circle no fill
 stroke(89,193,92); // green RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(545,560,20,20);// ellipse position and size
 
 //circle no fill
 stroke(190,36,96); // red RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(455,580,25,25);// ellipse position and size
 
 //circle no fill
 stroke(190,36,96); // red RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(455,615,25,25);// ellipse position and size
 
 //circle no fill
 stroke(59,54,204); // blue RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(437,598,25,25);// ellipse position and size
 
 //circle no fill
 stroke(59,54,204); // blue RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(471,598,25,25);// ellipse position and size
 
 //circle 
 noStroke(0); //no stroke 
 fill(255); //fill white color 
 ellipse(428,646,20,20);// ellipse position and size
 
 //circle 
 noStroke(0); //no stroke 
 fill(251,162,4); //fill orange color 
 ellipse(428,646,15,15);// ellipse position and size
 
 //circle 
 noStroke(0); //no stroke 
 fill(11,100,192); //fill blue color 
 ellipse(443,662,20,20);// ellipse position and size
 
 //stripe
 stroke(79,200,226); //green color 
 strokeWeight(5); //stroke thinkness
 line(458,662,458,735); //line position
 
 //stripe
 stroke(79,200,226); //green color 
 strokeWeight(5); //stroke thinkness
 line(472,670,472,743); //line position
 
 //stripe
 stroke(79,200,226); //green color 
 strokeWeight(5); //stroke thinkness
 line(486,678,486,750); //line position
 
 //stripe
 stroke(79,200,226); //green color 
 strokeWeight(5); //stroke thinkness
 line(500,686,500,758); //line position

 //triangle 
 noStroke(0); //no stroke
 fill(242,221,171); // fill yellow RGB color 
 triangle(402,529,402,634,303,582); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(248,176,28); // fill orange RGB color 
 triangle(303,689,402,634,303,582); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(228,234,238); // fill gray RGB color 
 triangle(303,689,202,634,303,582); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(242,221,161); // fill yellow RGB color 
 triangle(212,560,226,553,226,568); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(242,221,161); // fill yellow RGB color 
 triangle(212,578,226,571,226,586); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(242,221,161); // fill yellow RGB color 
 triangle(212,596,226,589,226,604); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(242,221,161); // fill yellow RGB color 
 triangle(230,570,243,562,243,577); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(242,221,161); // fill yellow RGB color 
 triangle(230,588,243,580,243,595); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(242,221,161); // fill yellow RGB color 
 triangle(245,579,258,570,258,587); //triangle position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,631,303,579); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,620,303,568); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,609,303,557); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,598,303,546); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,587,303,535); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,576,303,524); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,565,303,513); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,554,303,502); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(3); //stroke thinkness
 line(400,543,303,491); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(5); //stroke thinkness
 line(225,668,225,609); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(5); //stroke thinkness
 line(240,668,240,609); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(5); //stroke thinkness
 line(255,668,255,600); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(5); //stroke thinkness
 line(270,668,270,600); //line position
 
 //stripe
 stroke(255); //white color 
 strokeWeight(5); //stroke thinkness
 line(285,680,285,600); //line position
 
 //triangle 
 noStroke(0); //no stroke
 fill(228,234,238); // fill gray RGB color 
 triangle(303,689,263,666,303,645); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(228,234,238); // fill gray RGB color 
 triangle(303,654,231,619,303,581); //triangle position
 
 //triangle 
 noStroke(0); //no stroke
 fill(255); // fill white RGB color 
 triangle(323,572,323,591,303,581); //triangle position

 //quad
 noStroke(0); //no stroke
 fill(16,144,164); // fill green RGB color 
 quad(232,619,260,634,303,612,303,581);//quad position
 
 //quad
 noStroke(0); //no stroke
 fill(251,177,33); // fill orange RGB color 
 quad(296,512,296,541,336,563,365,548);//quad position
 
 




 //Green line 
 stroke(171,214,170);//green color RGB
 strokeWeight(2); // line thickness 
 line(17, 554, 262,428); //line postion 
 
 //circle 
 noStroke(0); //no stroke 
 fill(0,91,172); //fill blue color 
 ellipse(17,554,20,20);// ellipse position and size  
 
 //circle 
 noStroke(0); //no stroke 
 fill(51,175,68); //fill green color 
 ellipse(262,428,20,20);// ellipse position and size
 
 //circle 
 noStroke(0); //no stroke 
 fill(255); //fill green color 
 ellipse(140,532,15,15);// ellipse position and size
 
 //circle 
 noStroke(0); //no stroke 
 fill(255); //fill green color 
 arc(153,555,70,70,PI+PI/2,PI+PI*3/2);// arc position and size

 //stripe
 stroke(18,164,185); //green color 
 strokeWeight(3); //stroke thinkness
 line(153,565,188,550); //line position
 
 //stripe
 stroke(18,164,185); //green color 
 strokeWeight(3); //stroke thinkness
 line(153,575,188,560); //line position
 
 //stripe
 stroke(18,164,185); //green color 
 strokeWeight(3); //stroke thinkness
 line(153,585,188,570); //line position
 
 //stripe
 stroke(229,233,232); //gray color 
 strokeWeight(3); //stroke thinkness
 line(153,555,188,540); //line position
 
 //stripe
 stroke(229,233,232); //gray color 
 strokeWeight(3); //stroke thinkness
 line(153,545,188,530); //line position
 
 //stripe
 stroke(229,233,232); //gray color 
 strokeWeight(3); //stroke thinkness
 line(153,535,180,523); //line position

 //triangle 
 noStroke(0); //no stroke
 fill(147,206,171); // fill green RGB color 
 triangle(173,596,173,611,186,603); //triangle position 
 
 //circle no fill
 stroke(30,191,217); // green RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(184,524,15,15);// ellipse position and size
 
 //circle no fill
 stroke(30,191,217); // green RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(259,453,15,15);// ellipse position and size
 
 //circle no fill
 stroke(44,206,58); // green RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(68,704,15,15);// ellipse position and size
 
 //circle no fill
 stroke(44,206,58); // green RGB stroke
 strokeWeight(1); // stroke
 noFill(); //fill no color 
 ellipse(434,513,15,15);// ellipse position and size
 
 //circle
 noStroke(); // nostroke
 fill(44,206,58); //fill green RGB color 
 ellipse(184,753,15,15);// ellipse position and size
 
 //stripe
 stroke(30,191,217); //green color 
 strokeWeight(1); //stroke thinkness
 line(192,526,402,634); //line position
 
 //stripe
 stroke(30,191,217); //green color 
 strokeWeight(1); //stroke thinkness
 line(265,457,402,529); //line position
 
 //stripe
 stroke(44,206,58); //green color 
 strokeWeight(1); //stroke thinkness
 line(76,700,426,515); //line position
 
 //stripe
 stroke(44,206,58); //green color 
 strokeWeight(1); //stroke thinkness
 line(187,750,402,634); //line position
 
 //circle no fill
 stroke(224,105,32); // red RGB stroke
 strokeWeight(2); // stroke
 noFill(); //fill no color 
 ellipse(316,659,15,15);// ellipse position and size
 
 //circle no fill
 stroke(224,105,32); // red RGB stroke
 strokeWeight(2); // stroke
 noFill(); //fill no color 
 ellipse(316,659,25,25);// ellipse position and size
 
 //circle no fill
 stroke(224,105,32); // red RGB stroke
 strokeWeight(2); // stroke
 noFill(); //fill no color 
 ellipse(316,659,35,35);// ellipse position and size
 
 //circle no fill
 stroke(224,105,32); // red RGB stroke
 strokeWeight(2); // stroke
 noFill(); //fill no color 
 ellipse(316,659,45,45);// ellipse position and size
 
 
 
}

