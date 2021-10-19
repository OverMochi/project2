//global var
var logo,menu,profile,close,keyboard,check;
var medFont,regFont,semiFont,lightFont,extraFont;

function preload(){
  check = loadImage('assets/check.png');
  keyboard = loadImage('assets/Keyboard.png');
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
  link2 = createA('camera.html', '');
}

function draw() {
  background(255);

  textSize(36)
  fill(206,138,146);
  textFont(extraFont);
  textAlign(LEFT);
  text('Oct. 10, 2021', 20, 16,152,40);


  fill(206,138,146,100);
  textFont(semiFont);
  textSize(12);
  text('Enter new formula', 20, 76,120,16);

  fill(28,74,238);
  rect(20,76,1,16,2);

  image(close,336,19,34,34);
  image(keyboard,0,390,390,303);
  image(check,310,311,60,60);

  img = createImg('assets/camera.png').parent(link2);
  img.position(286, 19);
  img.size(34,34);



}
