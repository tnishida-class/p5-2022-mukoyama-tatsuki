function setup(){
  createCanvas(400, 400);
  background(240);
  for(let i=0;i<10;i++){
    line(0,i*40,400,i*40);
  }

  // 点数を乱数で用意する
  let scores = [];
  let sum = 0;
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
    scores[i] = Math.floor(scores[i]);
    sum += scores[i];
  }
 

  // 棒を描く
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;   // 棒の幅（固定）
    const h = height * scores[i] / 100; // 棒の高さ（点数に比例）
    if(scores[i]>=95){fill (255,0,0);}
    else if(scores[i]<=65){fill(0,0,255);}
    else{fill(128)};
    noStroke();
    rect(1+i * dx, height - h, dx-3, h);
  }
}