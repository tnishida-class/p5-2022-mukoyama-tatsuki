let x, y; // ポイント1：関数の外で変数を宣言する

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255); // ポイント2: draw の最初に background を書く
  ellipse(x, y, 30);
  x += 2;
  y -= 2;
}