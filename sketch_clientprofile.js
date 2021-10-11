//global var
var logo,menu,profile;
var medFont,regFont,semiFont,lightFont,extraFont;
var img1,img2,img3;

function preload(){
  img1 = loadImage('assets/img1.png');
  img2 = loadImage('assets/img2.png');
  img3 = loadImage('assets/img3.png');
  logo = loadImage('assets/Logo.png');
  menu = loadImage('assets/menu.png');
  profile = loadImage('assets/ViewProfile.png');
  regFont = loadFont('assets/Montserrat-Regular.ttf');
  semiFont = loadFont('assets/Montserrat-SemiBold.ttf');
  lightFont = loadFont('assets/Montserrat-Light.ttf');
  extraFont = loadFont('assets/Montserrat-ExtraBold.ttf');
}

function setup() {
  createCanvas(390,844);

  link = createA('newformulas.html', '');
  link2 = createA('myclients.html', '');
}

function draw() {
  background(255);
  image(logo,103,19,183,43);

  textSize(36)
  fill(206,138,146);
  textFont(extraFont);
  textAlign(CENTER);
  text('Alice', 58, 112,275,40);

  noStroke();
  fill(206,138,146,150);
  rect(0, 184, 390, 30);
  rect(0, 346, 390, 30);

  textSize(20);
  fill(255);
  textAlign(LEFT);
  text('Contact information', 20, 187,250,24);
  text('Hair Formulas', 20, 349,160,24);


  fill(135);
  textFont(semiFont);
  textSize(16);
  text('Mail :', 39, 234,53,20);
  text('Phone :', 20, 270,67,20);
  text('Birth :', 32, 306,55,20);

  textSize(12);
  text('alice1111@gmail.com', 92, 236,180,16);
  text('123-456-7890', 92, 274,200,16);
  text('Nov. 25', 92, 309,180,16);

  fill(206,138,146,100);
  rect(20, 396, 350, 140, 8);
  rect(20, 552, 350, 140, 8);
  rect(20, 708, 350, 140, 8);

  image(img1,20,396,140,140);
  image(img2,20,552,140,140);
  image(img3,20,708,140,140);

  fill(135);
  text('Nov. 25, 2020', 174, 408,78,16);
  text('Bolondor 30/v for 30 min.', 174, 436,200,16);
  text('Root lift at bowl 20v for 10 min.', 174, 460,180,16);
  text('Color num: 36.', 174, 484,180,16);

  text('Nov. 25, 2020', 174, 564,78,16);
  text('Bolondor 30/v for 30 min.', 174, 596,200,16);
  text('Root lift at bowl 20v for 10 min.', 174, 620,180,16);
  text('Color num: 36.', 174, 644,180,16);

  text('Nov. 25, 2020', 174, 720,78,16);
  text('Bolondor 30/v for 30 min.', 174, 752,200,16);
  text('Root lift at bowl 20v for 10 min.', 174, 776,180,16);
  text('Color num: 36.', 174, 800,180,16);





  img = createImg('assets/arrow.png').parent(link2);
  img.position(27, 28);
  img.size(30,30);

  img = createImg('assets/add.png').parent(link);
  img.position(310, 719);
  img.size(60,60);



}
