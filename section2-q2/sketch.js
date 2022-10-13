// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i+j)%2!=0){
       fill(100);
       rect(size*i,size*j,25,25);
       if(j<3){
        fill(255,0,0);
        circle(12.5+25*i,12.5+25*j,20);
      }
      else if(j>4){
        fill(0);
        circle(12.5+25*i,12.5+25*j,20);
      }
      }
      }
    }
  }
