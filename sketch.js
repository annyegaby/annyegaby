function setup() {
  createCanvas(400, 400);

}


    

function draw() {
  background('#FF5722');
  fill('#03A9F4');
  circle(200, 200, 300); // rosto
  fill('white');
  circle(150, 150, 50); // olho esquerdo
  circle(250, 150, 50); // olho direito
  line(150, 270, 250, 235); // boca
  fill('#3F51B5');
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123,115,178,113); // sobrancelha esquerda
  line(225,116,279,106); // sobrancelha direita
  circle(150, 150, 20); // pupila esquerda
  circle(250, 150, 20); // pupila direita
    
    if(mouseIsPressed){
        console.log(mouseX,mouseY);
      
    }
    
}
