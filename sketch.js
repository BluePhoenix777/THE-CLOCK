var hr, mn, sc;
var hrangle, scangle, mnangle;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

scangle = map(sc,0,60,0,360);
mnangle = map(mn,0,60,0,360);
hrangle = map(hr%12,0,12,0,360);

push()
rotate(scangle);
stroke("blue");
strokeWeight(5);
line(0,0,100,0);
pop()

push()
rotate(mnangle);
stroke("red");
strokeWeight(5);
line(0,0,75,0);
pop()

push()
rotate(hrangle);
stroke("lime");
strokeWeight(5);
line(0,0,50,0);
pop()

stroke("grey");
point(0,0);
strokeWeight(5);
noFill();

stroke("blue");
arc(0,0,300,300,0,scangle);

stroke("red");
arc(0,0,280,280,0,mnangle);

stroke("lime");
arc(0,0,260,260,0,hrangle);

  drawSprites();
}