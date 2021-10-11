//global var
var turn,img4;
var medFont,regFont,semiFont,lightFont,extraFont;

function preload(){
  img4 = loadImage('assets/img4.png')
  turn = loadImage('assets/turn.png');
  regFont = loadFont('assets/Montserrat-Regular.ttf');
  semiFont = loadFont('assets/Montserrat-SemiBold.ttf');
  lightFont = loadFont('assets/Montserrat-Light.ttf');
  extraFont = loadFont('assets/Montserrat-ExtraBold.ttf');
}

function setup() {
  createCanvas(390,780);
  link2 = createA('newformulas_edited.html', '');
}

function draw() {
  background(206,138,146);

  image(img4,8,16,374,637);
  image(turn,318,698,48,48);


  img = createImg('assets/shoot.png').parent(link2);
  img.position(162, 689);
  img.size(66,66);

}
