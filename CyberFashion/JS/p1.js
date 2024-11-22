var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var tela = 'inicio';
var condicaoMissao = 'nada';

var cutscene = document.getElementById('cutscene');
cutscene.style.display = 'none';
cutscene.pause();
var puland = document.getElementById('pula');
puland.style.display = 'none';

var musica = document.getElementById('musga');
musica.pause();
var botMusica = document.getElementById('botMusica');
var botSobre = document.getElementById('botSobre');

//Imagem de Inicio - 1º tela
var inicio = new Image();
inicio.src = 'IMG/Fundo.jpg';
//botao start
var comeco = new Image();
comeco.src = 'IMG/botao.png';

//desenha as imagens
const images = [
    { img: inicio, x: 0, y: 0, width:canvas.width, height:canvas.height },
    { img: comeco, x: 630, y: 420, width: 179, height: 231 },
];

function desenhaI() {
    if(tela == 'inicio'){
        context.drawImage(images[0].img, images[0].x, images[0].y, images[0].width, images[0].height);
        context.drawImage(images[1].img, images[1].x, images[1].y, images[1].width, images[1].height);
    }
};

setInterval(desenhaI,25);


//Evento de clique :)
canvas.addEventListener("click", (e) => {
    const elRect = e.target.getBoundingClientRect();
    var clickX = e.clientX - elRect.left;
    var clickY = e.clientY - elRect.top;

    if (tela === 'inicio'){
        inicia(clickX,clickY);
    } else if (tela === 'video'){
        pula(clickX,clickY);
    } else if (tela === 'interroga'){
        voltatela(clickX, clickY);
    } else if (tela === 'artemis missao 1' || tela === 'orion missao 1'){
        voltaEscolha(clickX,clickY);
        terminei(clickX, clickY);
    } else if (tela === 'feedback ruim1'){
        resetaFalha(clickX, clickY)
    } else if (tela === 'feedback bom1'){
        vaiFase2(clickX, clickY)
    } else if (tela === 'quizz'){
        quizz1(clickX, clickY)
    } else if (tela === 'quizz2'){
        quizz2(clickX, clickY)
    } else if (tela === 'feedback ruim2'){
        resetaFalha2(clickX, clickY)
    } else if (tela === 'artemis missao 2' || tela === 'orion missao 2'){
        voltaEscolha2(clickX,clickY);
        terminei2(clickX, clickY);
    } else if (tela === 'quizz3'){
        quizz3(clickX, clickY)
    } else if (tela === 'feedback ruim3'){
        resetaFalha3(clickX, clickY)
    } else if (tela === 'artemis missao 3' || tela === 'orion missao 3'){
        voltaEscolha3(clickX,clickY);
        terminei3(clickX, clickY);
    } else if (tela === 'feedback bom final'){
        JOGOACABOUbem (clickX, clickY);
        vaiSite(clickX, clickY);
    } else if (tela === 'feedback ruim3'){
        JOGOACABOUmal(clickX, clickY);
    } 
});

//troca pra tela do vídeo :) - 2º tela
function inicia(clickX, clickY) {
    if (clickX > 630 && clickX < 630 + 179 && clickY > 400 && clickY < 400 + 231) {
        tela = 'video'; // Muda o estado

        cutscene.style.display = 'block';
        cutscene.play();
        cutscene.volume = 0.5;

        musica.pause();
        musica.currentTime = 0;

        puland.style.display = 'block';
        botSobre.style.display = 'none';
        botMusica.style.display = 'none';

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(comeco, 1220, 580, 79, 100);
        console.log('mudou eu juro');
    }
}

var saibamais = new Image();
saibamais.src = 'IMG/telaSaibaMais.png';

//tela do sobre :) - 3º tela 
botSobre.onclick = function(){
    tela = 'interroga';

    botSobre.style.display = 'none';
    botMusica.style.display = 'none';
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(saibamais, 0, 0, canvas.width, canvas.height);
    console.log('interrogou?')
}

var musicaLigada = false;

botMusica.onclick = function(){
    if (musicaLigada) {
        musica.pause();
        musica.currentTime = 0;
        musica.volume = 0.5 
        botMusica.src = "IMG/botão_músicaOFF.png"; 

    } else {
        musica.play();
        botMusica.src = "IMG/botão_músicaON.png"; 
    }
    
    musicaLigada = !musicaLigada;
}

function voltatela (clickX, clickY){
    if (clickX > 42 && clickX < 122 && clickY > 40 && clickY < 120) {
        tela = 'inicio';
        botSobre.style.display = 'block';
        botMusica.style.display = 'block';
        
    }
}

//imagens escolha
var fundoE = new Image();
fundoE.src = 'IMG/fundoEscolha.png';

var Ia = document.getElementById('Ia');
var Io = document.getElementById('Io');
var quizz = document.getElementById('quizz');
quizz.style.display = 'none';

puland.onclick = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    console.log('pulei');
    tela = 'escolhe';

    cutscene.style.display = 'none';
    puland.style.display = 'none';
    cutscene.pause();
    cutscene.volume = 0;

    musica.play();
    musica.volume = 0.5;

    context.drawImage(fundoE, 0, 0, canvas.width, canvas.height);
    Ia.style.display = 'block';
    Io.style.display = 'block';
}

//imagem do quizz
var fundoP = new Image()
fundoP.src = 'IMG/fundoP.png';
var personagem = 'eu';

Ia.onclick = function(){
    personagem = 'artemis';

    context.clearRect(0, 0, canvas.width, canvas.height);
    Ia.style.display = 'none';
    Io.style.display = 'none';

    context.drawImage(fundoP, 0, 0, canvas.width, canvas.height);
    quizz.style.display = 'block';
}

Io.onclick = function(){
    personagem = 'orion'

    context.clearRect(0, 0, canvas.width, canvas.height);
    Io.style.display = 'none';
    Ia.style.display = 'none';

    context.drawImage(fundoP, 0, 0, canvas.width, canvas.height);
    quizz.style.display = 'block';
}








