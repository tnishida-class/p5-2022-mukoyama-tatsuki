// 最終課題を制作しよう

let x, y, a, b, c, d, vx1, vx2, vx3, vx4, vy, ax, bx, cx, dx;
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 10;
  y = height - 20;
  
  a = random(150, height - 450);
  b = random(250, height - 350);
  c = random(350, height - 250);
  d = random(450, height - 150);
  
  vx1 = 0; vx1<18; vx1+=18;
  vx2 = 0; vx2<12; vx2+=12;
  vx3 = 0; vx3<21; vx3+=21;
  vx4 = 0; vx4<15; vx4+=15;

  vy = 0;

  ax = width*1/5;
  bx = width*2/5;
  cx = width*3/5;
  dx = width*4/5;
  
}

  

function draw(){
  background(160, 192, 255);
  fill (255,0,0);
  ellipse(x, y, 20);

  vy += 1;
  y += 1 *vy;
 
  if(keyIsDown(LEFT_ARROW) &&  x > width/width+10){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW) && x < width-10){ x += 5; }

  fill(0);
 rect (ax, a, 40, 10);
 rect (bx, b, 40, 10);
 rect (cx, c, 40, 10);
 rect (dx, d, 40, 10);

 ax += vx1;
 if(ax < 0 || ax > width-40){ vx1 = -1 * vx1; }
 bx += vx2;
 if(bx < 0 || bx > width-40){ vx2 = -1 * vx2; }
 cx += vx3;
 if(cx < 0 || cx > width-40){ vx3 = -1 * vx3; }
 dx += vx4;
 if(dx < 0 || dx > width-40){ vx4 = -1 * vx4; } 

 if(x>ax && x<ax+80 && y>a-10 && y<a+20){x=width/10;y=height-20;}
 if(x>bx && x<bx+80 && y>b-10 && y<b+20){x=width/10;y=height-20;}
 if(x>cx && x<cx+80 && y>c-10 && y<c+20){x=width/10;y=height-20;}
 if(x>dx && x<dx+80 && y>d-10 && y<d+20){x=width/10;y=height-20;}
 if(y<0||y>height-20){x=width/10;y=height-20;}
 
 
 if(x>width/2-20 && x<width/2+20 && y>10 && y<50){
  x=width/2; y=30;

  fill(220,180,10);
  ellipse(width/2,30,40);

  textSize(100);
  text("GOAL", width/2-150, height/2);
 }
  
 line (width/10+50, height-10, width/10-50, height-10);

 fill(0,0,255);
 rect (width/2-10, 20, 20, 20);


 
 }

  function keyPressed(){
  if(key == " " ){vy = -15;}
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
 