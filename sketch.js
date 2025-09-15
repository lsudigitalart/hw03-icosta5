function setup() {
  createCanvas(1035, 1035);
}

function draw() {
 background(243, 224, 231);

 //variables
 let C = color(232, 91, 106);
 let spacing = 40;
 let diameter = 15;
 frameRate(1);

angleMode(DEGREES);

//original heart shapes
//fill(232, 91, 106);
//noStroke()
//triangle(15, 38, 29, 55, 43, 38)

//fill(232, 91, 106);
//noStroke()
//ellipse(22, 35, 15, 15)

//fill(232, 91, 106);
//noStroke()
//ellipse(36, 35, 15, 15)


// for clause for entire big heart shape
for (let xOffset = 0; xOffset < 1000; xOffset += spacing) {
    console.log(xOffset);
for (let yOffset = 0; yOffset < 1000; yOffset += spacing) {
    console.log(yOffset);
 let r = random(0, 255)
 let g = random(0, 255)
 let b = random(0, 255);
 fill(r, g, b);
 noStroke();

//ellipses loop 1
ellipse(22 + xOffset, 35 + yOffset, diameter, diameter);

 //ellipses loop 2
ellipse(36 + xOffset, 35 + yOffset, diameter, diameter);
  
 //original variable triangle coords
  let x1 = 15;
  let y1 = 38;
  let x2 = 29;
  let y2 = 55;
  let x3 = 43;
  let y3 = 38;
 triangle(x1 + xOffset, y1 + yOffset, x2 + xOffset, y2 + yOffset, x3 + xOffset, y3 + yOffset);
        }
     }

//smaller, upside down hearts in between big hearts
let halfSpacing = spacing / 2;
let halfDiameter = diameter / 2;
for (let xOffset = 0; xOffset < 1000; xOffset += spacing) {
    console.log(xOffset);
for (let yOffset = 0; yOffset < 1000; yOffset += spacing) {
    console.log(yOffset);
 let r = random(0, 255)
 let g = random(0, 255)
 let b = random(0, 255);
 fill(r, g, b);
 noStroke();

//small ellipses 
ellipse(22 + xOffset + halfSpacing + 1, 35 + yOffset + halfSpacing, halfDiameter + 2, halfDiameter + 2);
ellipse(36 + xOffset + halfSpacing - 1, 35 + yOffset + halfSpacing, halfDiameter + 2, halfDiameter + 2);
// changed the spacing slightly to match smaller triangle size

//small triangles (I played with the measurements from the originals until it looked good)
  let x1Small = 18;
  let y1Small = 35;
  let x2Small = 29;
  let y2Small = 18;
  let x3Small = 40;
  let y3Small = 35;
 triangle(x1Small + xOffset + halfSpacing, y1Small + yOffset + halfSpacing, x2Small + xOffset + halfSpacing, y2Small + yOffset + halfSpacing, x3Small + xOffset + halfSpacing, y3Small + yOffset + halfSpacing);


  }
 }
}
// pattern is inspired by colorful crochet blankets- with the heart shape representing stitch shapes