var bg1, form, system, code, security;
var bg2;
var score = 0;

function preload() {
  bg1 = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  // Adicione código para carregar imagem do plano de fundo do tesouro
}

function setup() {
  createCanvas(1000, 500);
  security = new Security();
  system = new System();
}

function draw() {
  background(bg1);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Pontuação: " + score, 450, 50);

  if (score === 3) {
    clear();
    background(bg2);
    // Adicione código para alterar o plano de fundo para o plano de fundo do tesouro

    fill("white");
    textSize(40);
    text("TESOURO ENCONTRADO", 500, 350)
    // Adicione código para exibir texto "TESOURO ENCONTRADO"
  }

  drawSprites();
}
