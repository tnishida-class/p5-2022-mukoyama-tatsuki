// 小手調べ
function setup(){
  createCanvas(200,200);
  background(255);
 noFill();
 for(let i=0; i<10; i++){
  if(i<5){
   stroke(0,0,255);
  }
  else{
   stroke(255,0,0);
  }
  ellipse(100,100,10+i*10);
  }
 }

