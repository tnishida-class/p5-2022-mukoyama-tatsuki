// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 150, 150, 20, 120,20,90, 4,230,70);
}

function balloon(t, a, b, c, d,e,f, g,j,k){
  let w = textWidth(t) + c ;
  let i = textAscent()
  let h = textAscent() + textDescent();
  stroke(g,j,k);
  fill(d,e,f);
  rect(a-c/2, b, w , h + i);
  noStroke();
  fill(g,j,k);
  text(t, a, h + a);
}
