async function setup() {

  createCanvas(800, 784);

  background(245);


  // VERMELHO
  fill(230, 35, 25);
  noStroke();
  rect(0, 0, 366, 310);


  // AMARELO
  fill(248, 205, 0);
  rect(0, 518, 80, 266);


  // AZUL
  fill(45, 45, 140);
  rect(374, 518, 238, 228);


  // LINHAS PRETAS
  stroke(0);
  strokeWeight(14);


  // linha vertical do meio
  line(366, 0, 366, 784);


  // linha horizontal de cima
  line(0, 320, 800, 320);


  // linha horizontal do meio
  line(0, 510, 800, 510);


  // linha vertical do amarelo
  line(80, 510, 80, 784);


  // linha vertical da direita
  line(612, 510, 612, 784);


  // linha por baixo do azul
  line(366, 746, 612, 746);

}