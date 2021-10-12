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

  link = createA('myclient.html', '');
  link2 = createA('appointments_menu.html', '');
}

function draw() {
  background(255);
  image(logo,103,19,183,43);

  textSize(36)
  fill(206,138,146);
  textFont(extraFont);
  textAlign(CENTER);
  text('Appointments', 58, 112,275,40);

  noStroke();
  fill(206,138,146,150);
  rect(0, 184, 390, 30);
  rect(0, 542, 390, 30);

  ellipseMode(CORNER);
  ellipse(20,258,32,32);
  ellipse(20,362,32,32);
  ellipse(20,466,32,32);
  ellipse(20,616,32,32);
  ellipse(20,720,32,32);

  fill(196);
  rect(20,322,350,1);
  rect(20,426,350,1);
  rect(20,530,350,1);
  rect(20,680,350,1);
  rect(20,784,350,1);

  textSize(20);
  fill(255);
  textAlign(LEFT);
  text('Oct.', 20, 187,38,24);
  text('Nov.', 20, 545,38,24);
  text('20', 23, 262,26,24);
  text('21', 26, 366,20,24);
  text('29', 24, 470,25,24);
  text('01', 25, 620,22,24);
  text('01', 25, 724,22,24);

  fill(135);
  textFont(semiFont);
  textSize(16);
  text('Alice', 76, 234,53,20);
  text('Tim', 76, 338,31,20);
  text('James', 76, 442,40,20);
  text('Debby', 76, 592,54,20);
  text('Jimmy', 76, 696,55,20);

  textSize(12);
  text('Women’s Haircut | Women’s Color', 76, 266,180,16);
  text('1:30pm-3:30pm', 76, 294,91,16);

  text('Men’s Haircut | Men’s color', 76, 370,180,16);
  text('1:00pm-3:00pm', 76, 398,93,16);

  text('Men’s Haircut | Men’s color', 76, 474,210,16);
  text('10:00am-12:00pm', 76, 502,106,16);

  text('Women’s Color', 76, 624,91,16);
  text('11:00am-12:00pm', 76, 652,101,16);

  text('Men’s Haircut | Men’s color', 76, 728,180,16);
  text('1:30pm-3:30pm', 76, 756,91,16);

  image(profile,270,286,100,24);
  image(profile,270,390,100,24);
  image(profile,270,494,100,24);
  image(profile,270,644,100,24);
  image(profile,270,748,100,24);

  img = createImg('assets/ViewProfile.png').parent(link2);
  img.position(270, 286);
  img.size(100,24);

  img = createImg('assets/menu.png').parent(link2);
  img.position(27, 28);
  img.size(30,30);

}
