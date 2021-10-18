//global var
var logo,menu,profile,close,camera;
var img5;
var medFont,regFont,semiFont,lightFont,extraFont;

function preload(){
  img5 = loadImage('assets/img5.png');
  camera = loadImage('assets/camera.png');
  close = loadImage('assets/close.png');
  logo = loadImage('assets/Logo.png');
  menu = loadImage('assets/menu.png');
  profile = loadImage('assets/ViewProfile.png');
  regFont = loadFont('assets/Montserrat-Regular.ttf');
  semiFont = loadFont('assets/Montserrat-SemiBold.ttf');
  lightFont = loadFont('assets/Montserrat-Light.ttf');
  extraFont = loadFont('assets/Montserrat-ExtraBold.ttf');
}

function setup() {
  createCanvas(390,780);
  link2 = createA('clientprofile.html', '');
}

function draw() {
  background(255);

  textSize(24)
  fill(206,138,146);
  textFont(extraFont);
  textAlign(LEFT);
  text('Oct. 10, 2021', 20, 16,300,40);


  fill(135);
  textFont(semiFont);
  textSize(12);
  text('Bolondor 30/v for 30 min.', 20, 76,151,16);
  text('Root lift at bowl 20v for 10 min.', 20, 100,183,16);
  text('Color num: 42.', 20, 124,86,16);

  image(img5,20,172,170,170);
  image(close,336,19,34,34);
  image(camera,286,19,34,34);


  img = createImg('assets/check.png').parent(link2);
  img.position(310, 605);
  img.size(60,60);

}
