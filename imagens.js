// imagens e sons do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//Sons
let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagem/estrada.png");
  imagemDoAtor = loadImage("imagem/ator-1.png");
  imagemCarro = loadImage("imagem/carro-1.png");
  imagemCarro2 = loadImage("imagem/carro-2.png");
  imagemCarro3 = loadImage("imagem/carro-3.png"); 
  imagemCarro4 = loadImage("imagem/carro-4.png")
  imagemCarro5 = loadImage("imagem/carro-5.png")
  imagemCarro6 = loadImage("imagem/carro-6.png")
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6];
  
 somDaTrilha = loadSound("sons/trilha.mp3");
 somDaColisao = loadSound("sons/colidiu.mp3");
 somDoPonto= loadSound("sons/pontos.wav");
}


