// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255);
  if(count>90){
    count = count - 25
  }
  if(keyIsDown(UP_ARROW)){
    count = count + 3
    }
  else{
    count = count + 1
   }
  size=count;
  ellipse(width / 2, height / 2, size);
}