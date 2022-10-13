// ダーツ

function setup() {
  const green = color(0, 255, 0);
  const red = color(255, 0, 0);
  const black = color(0);
  const cream = color(242, 212, 147);
  createCanvas(400, 400);
  background(255);
  stroke(255);
  strokeWeight(3);

  const cx = width / 2; // 中心は (cx, cy)
  const cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方

  drawCircle(black, maxR);
  drawArcs(green, red, maxR * 0.8);
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){
  fill(c);
  ellipse(cx, cy, r, r);
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {
    let start = TWO_PI / 20 * i;
    let stop = TWO_PI / 20 * (i + 1);
    fill(i % 2 == 0 ? c1 : c2);
    arc(cx, cy, r, r, start, stop, PIE);
  }
}
fill(255,0,0);
     circle(37.5,12.5,20);
     circle(87.5,12.5,20);
     circle(137.5,12.5,20);
     circle(187.5,12.5,20);
     circle(12.5,37.5,20);
     circle(62.5,37.5,20);
     circle(112.5,37.5,20);
     circle(162.5,37.5,20);
     circle(37.5,62.5,20);
     circle(87.5,62.5,20);
     circle(137.5,62.5,20);
     circle(187.5,62.5,20);

     fill(0);
     circle(12.5,137.5,20);
     circle(62.5,137.5,20);
     circle(112.5,137.5,20);
     circle(162.5,137.5,20);
     circle(37.5,162.5,20);
     circle(87.5,162.5,20);
     circle(137.5,162.5,20);
     circle(187.5,162.5,20);
     circle(12.5,187.5,20);
     circle(62.5,187.5,20);
     circle(112.5,187.5,20);
     circle(162.5,187.5,20);