function setup(){
  // general
  createCanvas(920, 440);
  background(237, 218, 224);
}

function draw(){
  // large quad w/ different color
  fill(254, 252, 215);
  quad(577, 0, 920, 0, 920, 440, 699, 440);
  
  // line splitting big triangle
  strokeWeight(8);
  line(572, 0, 694, 440);
  
  // large circle
  strokeWeight(10);
  stroke(213, 105, 100);
  fill(244, 237, 218);
  ellipse(765, 216, 277, 277);
  // medium circle
  strokeWeight(10);
  stroke(241, 223, 85);
  fill(210, 212, 235);
  ellipse(765, 216, 182, 182);
  
  // big triangle
  strokeWeight(1);
  stroke(0);
  fill(178, 156, 71);
  triangle(0, 440, 578, 42, 689, 440);
  fill(12, 63, 45);
  quad(588, 37, 633, 5, 914, 440, 699, 440);
  
  // big circle inside triangle
  strokeWeight(6);
  fill(73, 64, 174);
  ellipse(550, 224, 253, 253);
  // medium circle inside big circle
  strokeWeight(3);
  fill(229, 219, 217);
  ellipse(550, 224, 198, 198);
  // small circle inside medium circle
  strokeWeight(4);
  stroke(241, 231, 207);
  fill(2, 2, 2);
  ellipse(569, 218, 44, 44);
  
  // 3 smaller carrot looking triangles
  fill(196, 14, 0);
  noStroke();
  triangle(309, 92, 294, 137, 532, 199);
  triangle(700, 37, 721, 50, 591, 174);
  triangle(762, 415, 740, 432, 605, 252);
  
  // small circle
  strokeWeight(4);
  stroke(0);
  fill(255);
  ellipse(765, 216, 87, 87);
  
  // line & quad in bottom left corner
  strokeWeight(6);
  stroke(0);
  line(0, 311, 145, 440);
  fill(0);
  quad(328, 406, 335, 425, 274, 440, 145, 440);
  
  // line on the left half towards the top
  strokeWeight(6);
  stroke(0);
  line(146, 202, 360, 0);
  
  // black and yellow lines stuck together
  strokeWeight(8);
  stroke(0);
  line(385, 54, 453, 0);
  strokeWeight(6);
  stroke(237, 230, 123);
  line(389, 59, 462, 0);
  
  // line/quad in bottom right
  strokeWeight(5);
  stroke(0);
  fill(193, 1, 0);
  quad(740, 440, 920, 300, 920, 337, 788, 440);
  
  // green and black lines stuck together (with the black block on it)
  strokeWeight(8);
  stroke(104, 140, 76);
  line(712, 0, 885, 101);
  strokeWeight(8);
  stroke(0);
  line(728, 0, 868, 84);
  fill(0);
  quad(719, 19, 731, 0, 763, 0, 737, 33);
  
  // lines in the top left corner
  strokeWeight(10);
  stroke(0);
  line(0, 55, 41, 0);
  strokeWeight(5);
  stroke(90, 127, 81);
  line(50, 0, 0, 65);
  
  // little green triangle bottom left corner
  noStroke();
  fill(201, 212, 206);
  triangle(0, 440, 0, 315, 80, 385);
  
  // triangle in top right corner
  fill(0);
  triangle(920, 0, 920, 85, 866, 0);
  
  // arc
  noFill();
  strokeWeight(10);
  stroke(228, 110, 105);
  arc(261, 127, 225, 225, -PI-QUARTER_PI, -PI/4, OPEN);
}