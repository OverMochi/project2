//global var
var logo,menu,profile;
var medFont,regFont,semiFont,lightFont,extraFont;

function preload(){
logo = loadImage('assets/Logo.png');
menu = loadImage('assets/menu.png');
profile = loadImage('assets/ViewProfile.png');
medFont = loadFont('assets/Montserrat-Medium.ttf');
regFont = loadFont('assets/Montserrat-Regular.ttf');
semiFont = loadFont('assets/Montserrat-SemiBold.ttf');
lightFont = loadFont('assets/Montserrat-Light.ttf');
extraFont = loadFont('assets/Montserrat-ExtraBold.ttf');
}

function setup() {
  createCanvas(390,844);

  link = createA('myclientprofile.html', '');
  link2 = createA('myclients.html', '');
}

function draw() {
  background(255);
  image(logo,103,19,183,43);

  textSize(36)
  fill(206,138,146);
  textFont(extraFont);
  textAlign(CENTER);
  text('My Clients', 58, 112,275,40);

  noStroke();
  fill(206,138,146,150);
  rect(0, 184, 390, 30);
  rect(0, 438, 390, 30);
  rect(0, 692, 390, 30);

  fill(196);
  rect(20,322,350,1);
  rect(20,426,350,1);
  rect(20,576,350,1);
  rect(20,680,350,1);
  rect(20,830,350,1);

  textSize(20);
  fill(255);
  textAlign(LEFT);
  text('A', 20, 187,38,24);
  text('B', 20, 441,38,24);
  text('B', 20, 695,38,24);


  fill(135);
  textFont(semiFont);
  textSize(16);
  text('Alice', 20, 234,53,20);
  text('Ann', 20, 338,31,20);
  text('Betty', 20, 488,40,20);
  text('Bruce', 20, 592,54,20);
  text('Debby', 20, 742,55,20);

  textSize(12);
  text('11 appointments', 20, 266,180,16);
  text('Last appointment: Oct.29', 20, 294,200,16);

  text('8 appointments', 20, 370,180,16);
  text('Last appointment: Sep.20', 20, 398,200,16);

  text('4 appointments', 20, 520,210,16);
  text('Last appointment: Sep.11', 20, 548,200,16);

  text('5 appointments', 20, 624,91,16);
  text('Last appointment: Sep.16', 20, 652,200,16);

  text('6 appointments', 20, 774,180,16);
  text('Last appointment: Sep.16', 20, 802,200,16);

  image(profile,270,286,100,24);
  image(profile,270,390,100,24);
  image(profile,270,540,100,24);
  image(profile,270,644,100,24);
  image(profile,270,794,100,24);

  fill(0,0,0,150);
  rect(0,0,390,844);

  fill(255);
  rect(0,0,247,844);

  fill(206,138,146);
  textSize(25);
  textFont(medFont);
  text("Appointments", 31,164,185,30);
  text("My Clients", 31,203,190,30);

  img = createImg('assets/WorkSettings.png').parent(link);
  img.position(31, 242);
  img.size(175,30);


  img = createImg('assets/close.png').parent(link2);
  img.position(25, 37);
  img.size(34,34);

}
