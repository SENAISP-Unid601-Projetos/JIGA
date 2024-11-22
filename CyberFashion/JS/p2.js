var artemisR = new Image();
artemisR.src = 'IMG/artemisR.png'

var orionR = new Image();
orionR.src = 'IMG/orionR.png'

var falhaQuizz = new Image();
falhaQuizz.src = 'IMG/falhouQuizz.png';

function fim(){
    if(pontos == 3){
        quizz.style.display = 'none';
        
        if(personagem === 'artemis'){
            tela = 'artemis missao 1';
            condicaoMissao = 'missao1';
            context.drawImage(artemisR, 0, 0, canvas.width, canvas.height)

        } else if(personagem === 'orion'){
            tela = 'orion missao 1';
            condicaoMissao = 'missao1';
            context.drawImage(orionR, 0, 0, canvas.width, canvas.height)

        }

    } else if(pontos < 3){
        tela = 'quizz'

        context.drawImage(falhaQuizz, 0, 0, canvas.width, canvas.height)
        quizz.style.display = 'none';
    }
}

function quizz1(clickX, clickY){
    if(clickX > 668 && clickX < 747 && clickY > 546 && clickY < 628){
        perguntaAtual = 0;
        pontos = 0;
        
        context.drawImage(fundoP, 0, 0, canvas.width, canvas.height);
        quizz.style.display = 'block';
        perguntee();
        respostaCerta();
    }
} 

//FIM DO QUIZZ 

//botões de vai e volta
var BE = document.getElementById('BE');
var BD = document.getElementById('BD');
var CE = document.getElementById('CE');
var CD = document.getElementById('CD');
var SE = document.getElementById('SE');
var SD = document.getElementById('SD');
var AE = document.getElementById('AE');
var AD = document.getElementById('AD');

BE.style.display = 'none';
BD.style.display = 'none';
CE.style.display = 'none';
CD.style.display = 'none';
SE.style.display = 'none';
SD.style.display = 'none';
AE.style.display = 'none';
AD.style.display = 'none';

var BE2 = document.getElementById('BE2');
var BD2 = document.getElementById('BD2');
var CE2 = document.getElementById('CE2');
var CD2 = document.getElementById('CD2');
var SE2 = document.getElementById('SE2');
var SD2 = document.getElementById('SD2');
var AE2 = document.getElementById('AE2');
var AD2 = document.getElementById('AD2');

BE2.style.display = 'none';
BD2.style.display = 'none';
CE2.style.display = 'none';
CD2.style.display = 'none';
SE2.style.display = 'none';
SD2.style.display = 'none';
AE2.style.display = 'none';
AD2.style.display = 'none';

function desenhaP() {
    if(tela === 'artemis missao 1' || tela === 'artemis missao 2' || tela === 'artemis missao 3'){
        BE.style.display = 'block';
        BD.style.display = 'block';
        CE.style.display = 'block';
        CD.style.display = 'block';
        SE.style.display = 'block';
        SD.style.display = 'block';
        AE.style.display = 'block';
        AD.style.display = 'block';

    } else if (tela === 'orion missao 1' || tela === 'orion missao 2' || tela === 'orion missao 3'){
        BE2.style.display = 'block';
        BD2.style.display = 'block';
        CE2.style.display = 'block';
        CD2.style.display = 'block';
        SE2.style.display = 'block';
        SD2.style.display = 'block';
        AE2.style.display = 'block';
        AD2.style.display = 'block';
    }
};

setInterval(desenhaP,25);

var b1 = new Image();
b1.src = 'IMG/roupas/1blusa.png';
var b2 = new Image();
b2.src = 'IMG/roupas/2blusa.png';
var b3 = new Image();
b3.src = 'IMG/roupas/3blusa.png';
var b4 = new Image();
b4.src = 'IMG/roupas/4blusa.png';
var b5 = new Image();
b5.src = 'IMG/roupas/5blusa.png';
var b6 = new Image();
b6.src = 'IMG/roupas/6blusa.png';
var b7 = new Image();
b7.src = 'IMG/roupas/7blusa.png';
var b8 = new Image();
b8.src = 'IMG/roupas/8blusa.png';
var b9 = new Image();
b9.src = 'IMG/roupas/9blusa.png';
var b10 = 0;

const superiores = [
    b10,
    b1.src,  
    b2.src,
    b3.src,
    b4.src,
    b5.src,  
    b6.src,
    b7.src,
    b8.src,
    b9.src,

];

var a1 = new Image();
a1.src = 'IMG/roupas/1acessorio.png';
var a2 = new Image();
a2.src = 'IMG/roupas/2acessorio.png';
var a3 = new Image();
a3.src = 'IMG/roupas/3acessorio.png';
var a4 = new Image();
a4.src = 'IMG/roupas/4acessorio.png';
var a5 = new Image();
a5.src = 'IMG/roupas/5acessorio.png';
var a6 = new Image();
a6.src = 'IMG/roupas/6acessorio.png';
var a7 = new Image();
a7.src = 'IMG/roupas/7acessorio.png';
var a8 = new Image();
a8.src = 'IMG/roupas/8acessorio.png';
var a9 = new Image();
a9.src = 'IMG/roupas/9acessorio.png';
var a10 = 0;

const cabeca = [
    a10,
    a1.src,
    a2.src,
    a3.src,
    a4.src,
    a5.src,
    a6.src,
    a7.src,
    a8.src,
    a9.src,
    
]

var c1 = new Image();
c1.src = 'IMG/roupas/1calca.png';
var c2 = new Image();
c2.src = 'IMG/roupas/2calca.png';
var c3 = new Image();
c3.src = 'IMG/roupas/3calca.png';
var c4 = new Image();
c4.src = 'IMG/roupas/4calca.png';
var c5 = new Image();
c5.src = 'IMG/roupas/5calca.png';
var c6 = new Image();
c6.src = 'IMG/roupas/6calca.png';
var c7 = new Image();
c7.src = 'IMG/roupas/7calca.png';
var c8 = new Image();
c8.src = 'IMG/roupas/8calca.png';
var c9 = new Image();
c9.src = 'IMG/roupas/9calca.png';
var c10 = 0;

const calca = [
    c10,
    c1.src,
    c2.src,
    c3.src,
    c4.src,
    c5.src,
    c6.src,
    c7.src,
    c8.src,
    c9.src
    
]

var s1 = new Image();
s1.src = 'IMG/roupas/1sapato.png';
var s2 = new Image();
s2.src = 'IMG/roupas/2sapato.png';
var s3 = new Image();
s3.src = 'IMG/roupas/3sapato.png';
var s4 = new Image();
s4.src = 'IMG/roupas/4sapato.png';
var s5 = new Image();
s5.src = 'IMG/roupas/5sapato.png';
var s6 = new Image();
s6.src = 'IMG/roupas/6sapato.png';
var s7 = new Image();
s7.src = 'IMG/roupas/7sapato.png';
var s8 = new Image();
s8.src = 'IMG/roupas/8sapato.png';
var s9 = new Image();
s9.src = 'IMG/roupas/9sapato.png';
var s10 = 0;

const bota = [
    s10,
    s1.src,
    s2.src,
    s3.src,
    s4.src,
    s5.src,
    s6.src,
    s7.src,
    s8.src,
    s9.src
]


//artemis
const carrossel = document.getElementById('carrossel');
const carrosselB = document.getElementById('carrosselB');
const carrosselA = document.getElementById('carrosselA');
const carrosselC= document.getElementById('carrosselC');
const carrosselS= document.getElementById('carrosselS');

const carrosselFeedback = document.getElementById('carrosselFeedback');
const carrosselBF = document.getElementById('carrosselBF');
const carrosselAF = document.getElementById('carrosselAF');
const carrosselCF = document.getElementById('carrosselCF');
const carrosselSF = document.getElementById('carrosselSF');

carrossel.style.display = 'none';
carrosselFeedback.style.display = 'none';

//orion
var b1O = new Image();
b1O.src = 'IMG/roupas/1blusaO.png';
var b2O = new Image();
b2O.src = 'IMG/roupas/2blusaO.png';
var b3O = new Image();
b3O.src = 'IMG/roupas/3blusaO.png';
var b4O = new Image();
b4O.src = 'IMG/roupas/4blusaO.png';
var b5O = new Image();
b5O.src = 'IMG/roupas/5blusaO.png';
var b6O = new Image();
b6O.src = 'IMG/roupas/6blusaO.png';
var b7O = new Image();
b7O.src = 'IMG/roupas/7blusaO.png';
var b8O = new Image();
b8O.src = 'IMG/roupas/8blusaO.png';
var b9O = new Image();
b9O.src = 'IMG/roupas/9blusaO.png';
var b10O = 0;

const superioresO = [
    b10O,
    b1O.src,  
    b2O.src,
    b3O.src,
    b4O.src,
    b5O.src,  
    b6O.src,
    b7O.src,
    b8O.src,
    b9O.src,

];

var a1O = new Image();
a1O.src = 'IMG/roupas/1acessorioO.png';
var a2O = new Image();
a2O.src = 'IMG/roupas/2acessorioO.png';
var a3O = new Image();
a3O.src = 'IMG/roupas/3acessorioO.png';
var a4O = new Image();
a4O.src = 'IMG/roupas/4acessorioO.png';
var a5O = new Image();
a5O.src = 'IMG/roupas/5acessorioO.png';
var a6O = new Image();
a6O.src = 'IMG/roupas/6acessorioO.png';
var a7O = new Image();
a7O.src = 'IMG/roupas/7acessorioO.png';
var a8O = new Image();
a8O.src = 'IMG/roupas/8acessorioO.png';
var a9O = new Image();
a9O.src = 'IMG/roupas/9acessorioO.png';
var a10O = 0;

const cabecaO = [
    a10O,
    a1O.src,
    a2O.src,
    a3O.src,
    a4O.src,
    a5O.src,
    a6O.src,
    a7O.src,
    a8O.src,
    a9O.src,
    
]

var c1O = new Image();
c1O.src = 'IMG/roupas/1calcaO.png';
var c2O = new Image();
c2O.src = 'IMG/roupas/2calcaO.png';
var c3O = new Image();
c3O.src = 'IMG/roupas/3calcaO.png';
var c4O = new Image();
c4O.src = 'IMG/roupas/4calcaO.png';
var c5O = new Image();
c5O.src = 'IMG/roupas/5calcaO.png';
var c6O = new Image();
c6O.src = 'IMG/roupas/6calcaO.png';
var c7O = new Image();
c7O.src = 'IMG/roupas/7calcaO.png';
var c8O = new Image();
c8O.src = 'IMG/roupas/8calcaO.png';
var c9O = new Image();
c9O.src = 'IMG/roupas/9calcaO.png';
var c10O = 0;

const calcaO = [
    c10O,
    c1O.src,
    c2O.src,
    c3O.src,
    c4O.src,
    c5O.src,
    c6O.src,
    c7O.src,
    c8O.src,
    c9O.src
    
]

var s1O = new Image();
s1O.src = 'IMG/roupas/1sapatoO.png';
var s2O = new Image();
s2O.src = 'IMG/roupas/2sapatoO.png';
var s3O = new Image();
s3O.src = 'IMG/roupas/3sapatoO.png';
var s4O = new Image();
s4O.src = 'IMG/roupas/4sapatoO.png';
var s5O = new Image();
s5O.src = 'IMG/roupas/5sapatoO.png';
var s6O = new Image();
s6O.src = 'IMG/roupas/6sapatoO.png';
var s7O = new Image();
s7O.src = 'IMG/roupas/7sapatoO.png';
var s8O = new Image();
s8O.src = 'IMG/roupas/8sapatoO.png';
var s9O = new Image();
s9O.src = 'IMG/roupas/9sapatoO.png';
var s10O = 0;

const botaO = [
    s10O,
    s1O.src,
    s2O.src,
    s3O.src,
    s4O.src,
    s5O.src,
    s6O.src,
    s7O.src,
    s8O.src,
    s9O.src
]

const carrosselO = document.getElementById('carrosselO');
const carrosselBO = document.getElementById('carrosselBO');
const carrosselAO = document.getElementById('carrosselAO');
const carrosselCO= document.getElementById('carrosselCO');
const carrosselSO= document.getElementById('carrosselSO');

const carrosselFeedbackO = document.getElementById('carrosselFeedbackO');
const carrosselBFO = document.getElementById('carrosselBFO');
const carrosselAFO = document.getElementById('carrosselAFO');
const carrosselCFO = document.getElementById('carrosselCFO');
const carrosselSFO = document.getElementById('carrosselSFO');

carrosselO.style.display = 'none';
carrosselFeedbackO.style.display = 'none';

//DESENHA A FASE + ROUPAS 
function desenhaI() {
    if(tela === 'artemis missao 1' || tela === 'artemis missao 2' || tela === 'artemis missao 3'){
        context.clearRect(0,0,100000,100000); 
        context.drawImage(artemisR, 0, 0, canvas.width, canvas.height)
        carrossel.style.display = 'block';

    } else if (tela === 'orion missao 1' || tela === 'orion missao 2' || tela === 'orion missao 3'){
        context.clearRect(0,0,100000,100000); 
        context.drawImage(orionR, 0, 0, canvas.width, canvas.height);
        carrosselO.style.display = 'block'; //alterar carrossel
    }
}

setInterval(desenhaI,25);

var index1 = 0;
var index2 = 0;
var index3 = 0;
var index4 = 0;

var B1A = 0;
var C1A = 0;
var S1A = 0;
var A1A = 0;

var index1O = 0;
var index2O = 0;
var index3O = 0;
var index4O = 0;

var B1AO = 0;
var C1AO = 0;
var S1AO = 0;
var A1AO = 0;

var arrayRoupas1 = [];
var arrayRoupas2 = [];

// Função para atualizar a imagem do carrossel
function updateCarrossel() {
    carrosselB.style.backgroundImage = `url(${superiores[index1]})`;  
    carrosselA.style.backgroundImage = `url(${cabeca[index2]})`;
    carrosselC.style.backgroundImage = `url(${calca[index3]})`;
    carrosselS.style.backgroundImage = `url(${bota[index4]})`;

}

function updateCarrossel2() {
    carrosselBF.style.backgroundImage = `url(${superiores[index1]})`;  
    carrosselAF.style.backgroundImage = `url(${cabeca[index2]})`;
    carrosselCF.style.backgroundImage = `url(${calca[index3]})`;
    carrosselSF.style.backgroundImage = `url(${bota[index4]})`;

}

function updateCarrossel3() {
    carrosselBO.style.backgroundImage = `url(${superioresO[index1O]})`;  
    carrosselAO.style.backgroundImage = `url(${cabecaO[index2O]})`;
    carrosselCO.style.backgroundImage = `url(${calcaO[index3O]})`;
    carrosselSO.style.backgroundImage = `url(${botaO[index4O]})`;

}

function updateCarrossel4() {
    carrosselBFO.style.backgroundImage = `url(${superioresO[index1O]})`;  
    carrosselAFO.style.backgroundImage = `url(${cabecaO[index2O]})`;
    carrosselCFO.style.backgroundImage = `url(${calcaO[index3O]})`;
    carrosselSFO.style.backgroundImage = `url(${botaO[index4O]})`;

}

// Navegação no carrossel
BE.onclick = function(){
    index1 = (index1 > 0) ? index1 - 1 : superiores.length - 1;
    updateCarrossel(); 
    updateCarrossel2();

    if(B1A <= 9 && B1A > 0){
        B1A--;
    } else if (B1A <= 0){
        B1A = 9;
    }

    console.log('B ' + B1A);

};

BD.onclick = function(){
    index1 = (index1 < superiores.length - 1) ? index1 + 1 : 0;
    updateCarrossel();
    updateCarrossel2();

    if(B1A < 9){
        B1A++
    } else if (B1A = 9){
        B1A = 0;
    }

    console.log('B ' + B1A);
};

AE.onclick = function(){
    index2 = (index2 > 0) ? index2 - 1 : cabeca.length - 1;
    updateCarrossel();
    updateCarrossel2();

    if(A1A <= 9 && A1A > 0){
        A1A--;
    } else if (A1A <= 0){
        A1A = 9;
    }

    console.log('A ' + A1A);
};

AD.onclick = function(){
    index2 = (index2 < cabeca.length - 1) ? index2 + 1 : 0;
    updateCarrossel();
    updateCarrossel2();

    if(A1A < 9){
        A1A++
    } else if (A1A = 9){
        A1A = 0
    }

    console.log('A ' + A1A);
};

CE.onclick = function(){
    index3 = (index3 > 0) ? index3 - 1 : calca.length - 1;
    updateCarrossel();
    updateCarrossel2();

    if(C1A <= 9 && C1A > 0){
        C1A--;
    } else if (C1A <= 0){
        C1A = 9;
    }

    console.log('C ' + C1A);
};

CD.onclick = function(){
    index3 = (index3 < calca.length - 1) ? index3 + 1 : 0;
    updateCarrossel();
    updateCarrossel2();

    if(C1A < 9){
        C1A++
    } else if (C1A = 9){
        C1A = 0
    }

    console.log('C ' + C1A);
};

SE.onclick = function(){
    index4 = (index4 > 0) ? index4 - 1 : bota.length - 1;
    updateCarrossel();
    updateCarrossel2();

    if(S1A <= 9 && S1A > 0){
        S1A--;
    } else if (S1A <= 0){
        S1A = 9;
    }

    console.log('S ' + S1A);
};

SD.onclick = function(){
    index4 = (index4 < bota.length - 1) ? index4 + 1 : 0;
    updateCarrossel();
    updateCarrossel2();

    if(S1A < 9){
        S1A++
    } else if (S1A = 9){
        S1A = 0
    }

    console.log('S ' + S1A);
};

//ORION

BE2.onclick = function(){
    index1O = (index1O > 0) ? index1O - 1 : superioresO.length - 1;
    updateCarrossel3(); 
    updateCarrossel4();

    if(B1AO <= 9 && B1AO > 0){
        B1AO--;
    } else if (B1AO <= 0){
        B1AO = 9;
    }

    console.log('B ' + B1AO);

};

BD2.onclick = function(){
    index1O = (index1O < superioresO.length - 1) ? index1O + 1 : 0;
    updateCarrossel3(); 
    updateCarrossel4();

    if(B1AO < 9){
        B1AO++
    } else if (B1AO = 9){
        B1AO = 0;
    }

    console.log('B ' + B1AO);
};

AE2.onclick = function(){
    index2O = (index2O > 0) ? index2O - 1 : cabecaO.length - 1;
    updateCarrossel3(); 
    updateCarrossel4();

    if(A1AO <= 9 && A1AO > 0){
        A1AO--;
    } else if (A1AO <= 0){
        A1AO = 9;
    }

    console.log('A ' + A1AO);
};

AD2.onclick = function(){
    index2O = (index2O < cabecaO.length - 1) ? index2O + 1 : 0;
    updateCarrossel3(); 
    updateCarrossel4();

    if(A1AO < 9){
        A1AO++
    } else if (A1AO = 9){
        A1AO = 0
    }

    console.log('A ' + A1AO);
};

CE2.onclick = function(){
    index3O = (index3O > 0) ? index3O - 1 : calcaO.length - 1;
    updateCarrossel3(); 
    updateCarrossel4();

    if(C1AO <= 9 && C1AO > 0){
        C1AO--;
    } else if (C1AO <= 0){
        C1AO = 9;
    }

    console.log('C ' + C1AO);
};

CD2.onclick = function(){
    index3O = (index3O < calcaO.length - 1) ? index3O + 1 : 0;
    updateCarrossel3(); 
    updateCarrossel4();

    if(C1AO < 9){
        C1AO++;
    } else if (C1AO = 9){
        C1AO = 0
    }

    console.log('C ' + C1AO);
};

SE2.onclick = function(){
    index4O = (index4O > 0) ? index4O - 1 : botaO.length - 1;
    updateCarrossel3(); 
    updateCarrossel4();

    if(S1AO <= 9 && S1AO > 0){
        S1AO--;
    } else if (S1AO <= 0){
        S1AO = 9;
    }

    console.log('S ' + S1AO);
};

SD2.onclick = function(){
    index4O = (index4O < botaO.length - 1) ? index4O + 1 : 0;
    updateCarrossel3(); 
    updateCarrossel4();

    if(S1AO < 9){
        S1AO++
    } else if (S1AO = 9){
        S1AO = 0
    }

    console.log('S ' + S1AO);
};

// Inicializa o carrossel1
updateCarrossel();
updateCarrossel2();
updateCarrossel3(); 
updateCarrossel4();

function voltaEscolha (clickX, clickY){
    if(clickX > 40 && clickX < 130 && clickY > 641 && clickY < 731){
       window.location.reload();
    } 
}

function terminei (clickX, clickY){
    if(clickX > 1127 && clickX < 1364 && clickY > 652 && clickY < 718){
        arrayRoupas1.length = 0;
        if(personagem === 'artemis'){
            verifica1();  
          } else if(personagem === 'orion'){
             verifica1O(); 
          }
     } 
}

var feedbackPositivo1 = new Image();
feedbackPositivo1.src = 'IMG/feedbackPositivo1.png';
var feedbackPositivo1O = new Image();
feedbackPositivo1O.src = 'IMG/feedbackPositivo1O.png';
var feedbackNegativo1 = new Image();
feedbackNegativo1.src = 'IMG/feedbackNegativo1.png';

function verifica1(){
    arrayRoupas1.push(A1A);
    arrayRoupas1.push(B1A);
    arrayRoupas1.push(C1A);
    arrayRoupas1.push(S1A);

    if ((arrayRoupas1[1] === 4 || arrayRoupas1[1] === 6 || arrayRoupas1[1] === 9) && 
        (arrayRoupas1[2] === 4 || arrayRoupas1[2] === 6 || arrayRoupas1[2] === 9) && 
        (arrayRoupas1[0] != 0) && (arrayRoupas1[3] != 0)) {
            tela = 'feedback bom1';

            context.clearRect(0,0,1000000000,1000000);
            context.drawImage(feedbackPositivo1, 0, 0, canvas.width, canvas.height);

            BE.style.display = 'none';
            BD.style.display = 'none';
            CE.style.display = 'none';
            CD.style.display = 'none';
            SE.style.display = 'none';
            SD.style.display = 'none';
            AE.style.display = 'none';
            AD.style.display = 'none';

            carrossel.style.display = 'none';
            carrosselFeedback.style.display = 'block';

    } else {
        tela = 'feedback ruim1';

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackNegativo1, 0, 0, canvas.width, canvas.height);

        BE.style.display = 'none';
        BD.style.display = 'none';
        CE.style.display = 'none';
        CD.style.display = 'none';
        SE.style.display = 'none';
        SD.style.display = 'none';
        AE.style.display = 'none';
        AD.style.display = 'none';

        carrossel.style.display = 'none';
        carrosselFeedback.style.display = 'none';

    }
} 

function verifica1O(){
    arrayRoupas2.push(A1AO);
    arrayRoupas2.push(B1AO);
    arrayRoupas2.push(C1AO);
    arrayRoupas2.push(S1AO); 

    if ((arrayRoupas2[1] === 4 || arrayRoupas2[1] === 6 || arrayRoupas2[1] === 9) && 
    (arrayRoupas2[2] === 4 || arrayRoupas2[2] === 6 || arrayRoupas2[2] === 9) && 
    (arrayRoupas2[0] != 0) && (arrayRoupas2[3] != 0)){
        tela = 'feedback bom1';

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackPositivo1O, 0, 0, canvas.width, canvas.height);

        BE2.style.display = 'none';
        BD2.style.display = 'none';
        CE2.style.display = 'none';
        CD2.style.display = 'none';
        SE2.style.display = 'none';
        SD2.style.display = 'none';
        AE2.style.display = 'none';
        AD2.style.display = 'none';

        carrosselO.style.display = 'none';
        carrosselFeedbackO.style.display = 'block';

    } else {
        tela = 'feedback ruim1';

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackNegativo1, 0, 0, canvas.width, canvas.height);

        BE2.style.display = 'none';
        BD2.style.display = 'none';
        CE2.style.display = 'none';
        CD2.style.display = 'none';
        SE2.style.display = 'none';
        SD2.style.display = 'none';
        AE2.style.display = 'none';
        AD2.style.display = 'none';

        carrosselO.style.display = 'none';
    }
}

//reinicia depois de falhar na escolha da roupa
function resetaFalha(clickX, clickY){
    if(clickX > 386 && clickX < 504 && clickY > 575 && clickY < 690){
        window.location.reload();
     } 
 }

function vaiFase2(clickX, clickY){
    if(clickX > 442 && clickX < 512 && clickY > 600 && clickY < 670){
        arrayRoupas1.length = 0;
        index1 = 0;
        index2 = 0;
        index3 = 0;
        index4 = 0;
        updateCarrossel(); 

        arrayRoupas2.length = 0;
        index1O = 0;
        index2O = 0;
        index3O = 0;
        index4O = 0;
        updateCarrossel3();

        B1AO = 0;
        C1AO = 0;
        S1AO = 0;
        A1AO = 0;

        B1A = 0;
        C1A = 0;
        S1A = 0;
        A1A = 0;

        context.drawImage(fundoP, 0, 0, canvas.width, canvas.height);
        quizz.style.display = 'block';
        carrosselFeedback.style.display = 'none';
        carrosselFeedbackO.style.display = 'none';

        if (condicaoMissao === 'missao1'){
            perguntaAtual = 3;
            pontos = 0;
            perguntee();
            respostaCerta(); 
        } else if (condicaoMissao === 'missao2'){
            perguntaAtual = 6;
            pontos = 0;
            perguntee();
            respostaCerta(); 
        }
     } 
}

/* context.fillStyle = "green";
context.fillRect(386, 575, 118, 115);*/




