var pergunta = document.getElementById("enunciado");
var resposta1 = document.getElementById("p1");
var resposta2 = document.getElementById("p2");
var resposta3 = document.getElementById("p3");
var resposta12 = document.getElementById("p12");
var resposta22 = document.getElementById("p22");
var resposta32 = document.getElementById("p32");
var resposta13 = document.getElementById("p13");
var resposta23 = document.getElementById("p23");
var resposta33 = document.getElementById("p33");

var resposta14 = document.getElementById("p14");
var resposta24 = document.getElementById("p24");
var resposta34 = document.getElementById("p34");
var resposta15 = document.getElementById("p15");
var resposta25 = document.getElementById("p25");
var resposta35 = document.getElementById("p35");
var resposta16 = document.getElementById("p16");
var resposta26 = document.getElementById("p26");
var resposta36 = document.getElementById("p36");
var grupoPerguntas4 = document.getElementById("perguntas4");
var grupoPerguntas5 = document.getElementById("perguntas5");
var grupoPerguntas6 = document.getElementById("perguntas6");

var resposta17 = document.getElementById("p17");
var resposta27 = document.getElementById("p27");
var resposta37 = document.getElementById("p37");
var resposta18 = document.getElementById("p18");
var resposta28 = document.getElementById("p28");
var resposta38 = document.getElementById("p38");
var resposta19 = document.getElementById("p19");
var resposta29 = document.getElementById("p29");
var resposta39 = document.getElementById("p39");
var grupoPerguntas7 = document.getElementById("perguntas7");
var grupoPerguntas8 = document.getElementById("perguntas8");
var grupoPerguntas9 = document.getElementById("perguntas9");

var quizzMissao1 = document.getElementById('missao1');
var quizzMissao2 = document.getElementById('missao2');
var quizzMissao3 = document.getElementById('missao3');


let enunciados = 
[ 'A primeira missão leva os agentes ao luxuoso Skydome, uma estrutura flutuante que orbita a Terra e serve como palco para um festa repleto de elites e figuras poderosas. Para se infiltrarem sem serem notados, os agentes precisam usar trajes:', 
    'Um traje errado pode levantar suspeitas ou impedir o acesso aos círculos mais importantes. Para uma festa noturna no Skydome, as vestimentas precisam ser:', 
    'Esta missão é essencial para o reconhecimento visual dos investigados, captando seus rostos e vozes. Um bom acessório que complementa o look dos agentes seria:',

    'Agora os agentes mergulham nas profundezas do submundo, onde um leilão clandestino de tecnologias proibidas está prestes a acontecer. Qual traje você escolheria para se infiltrar, exalando poder e perigo entre os criminosos e mercenários, sem levantar suspeitas?',
    'O local é um ambiente hostil, repleto de traficantes de tecnologia e mercenários ricos, incluindo pesquisadores da Aurora Corp. Para se misturar, os looks podem apresentar:',
    'Para esta missão, uma equipe por trás dos agentes precisa acompanhar em tempo real os sons de diálogos suspeitos e conversas entre os investigados com muita cautela. Um bom acessório seria:',

    'A última e mais perigosa etapa os leva ao coração da Aurora Corp: a Torre da Aurora, um arranha-céu ultramoderno protegido por camadas de segurança de alta tecnologia. Para entrar, a melhor escolha é se infiltrar como:',
    'Artemis e Órion precisam se disfarçar de funcionários de alto escalão para ter acesso à sala de controle central. Para não desencadear um alarme e ativar sistemas de segurança que comprometeriam toda a operação, os disfarces devem ser:',
    'Sendo a missão mais perigosa de todo o plano, para obter o máximo de informações possíveis sobre a torre e seus funcionários, os agentes devem usar:'
];

var perguntaAtual = 0;
var pontos = 0;

function perguntee(){
    pergunta.innerHTML = enunciados[perguntaAtual];
    respostaCerta();
}

function esconde1(){
    resposta12.style.display = 'none';
    resposta22.style.display = 'none';
    resposta32.style.display = 'none';
    resposta13.style.display = 'none';
    resposta23.style.display = 'none';
    resposta33.style.display = 'none';
    resposta1.style.display = 'block';
    resposta2.style.display = 'block';
    resposta3.style.display = 'block';

    quizzMissao2.style.display = 'none';
    quizzMissao3.style.display = 'none';
}

function esconde2(){
    resposta1.style.display = 'none';
    resposta2.style.display = 'none';
    resposta3.style.display = 'none';
    resposta13.style.display = 'none';
    resposta23.style.display = 'none';
    resposta33.style.display = 'none';
    resposta12.style.display = 'block';
    resposta22.style.display = 'block';
    resposta32.style.display = 'block';
}

function esconde3(){
    resposta1.style.display = 'none';
    resposta2.style.display = 'none';
    resposta3.style.display = 'none';
    resposta12.style.display = 'none';
    resposta22.style.display = 'none';
    resposta32.style.display = 'none';
    resposta13.style.display = 'block';
    resposta23.style.display = 'block';
    resposta33.style.display = 'block';
}

function esconde4(){
    quizzMissao1.style.display = 'none';
    quizzMissao2.style.display = 'block';
    quizzMissao3.style.display = 'none';

    grupoPerguntas4.style.display = 'block'
    grupoPerguntas5.style.display = 'none';
    grupoPerguntas6.style.display = 'none';
}

function esconde5(){
    grupoPerguntas4.style.display = 'none'
    grupoPerguntas5.style.display = 'block';
    grupoPerguntas6.style.display = 'none';
}

function esconde6(){
    grupoPerguntas4.style.display = 'none'
    grupoPerguntas5.style.display = 'none';
    grupoPerguntas6.style.display = 'block';
}

function esconde7(){
    quizzMissao1.style.display = 'none';
    quizzMissao2.style.display = 'none';
    quizzMissao3.style.display = 'block';

    grupoPerguntas7.style.display = 'block'
    grupoPerguntas8.style.display = 'none';
    grupoPerguntas9.style.display = 'none';
}

function esconde8(){
    grupoPerguntas7.style.display = 'none'
    grupoPerguntas8.style.display = 'block';
    grupoPerguntas9.style.display = 'none';
}

function esconde9(){
    grupoPerguntas7.style.display = 'none'
    grupoPerguntas8.style.display = 'none';
    grupoPerguntas9.style.display = 'block';
}

function respostaCerta() {

    if (perguntaAtual === 0) {
        esconde1();
        resposta1.onclick = function() {
            perguntaAtual++;
            pontos++;
            perguntee();
            esconde2();
        };
        resposta2.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde2();
        };
        resposta3.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde2();
        };

    } else if (perguntaAtual === 1) {
        resposta12.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde3();
        };
        resposta22.onclick = function() {
            perguntaAtual++;
             pontos++;
            perguntee();
            esconde3();
        };
        resposta32.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde3();
        };

    } else if (perguntaAtual === 2) {
        resposta13.onclick = function() {
            pontos++;
            console.log(pontos);
            fim(); //js - p2
        };
        resposta23.onclick = function() {
            console.log(pontos);
            fim();
        };
        resposta33.onclick = function() {
            console.log(pontos);
            fim();
        };

    //MISSAO 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    } else if (perguntaAtual === 3) {
        esconde4();

        resposta14.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde5();
        };
        resposta24.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde5();
        };
        resposta34.onclick = function() {
            perguntaAtual++;
            pontos++;
            perguntee();
            esconde5();
        };
        
    } else if (perguntaAtual === 4) {
        resposta15.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde6();
        };
        resposta25.onclick = function() {
            perguntaAtual++;
            pontos++;
            perguntee();
            esconde6();
        };
        resposta35.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde6();
        };
        
    } else if (perguntaAtual === 5) {
        resposta16.onclick = function() {
            pontos++;
            console.log(pontos);
            fim2(); //js - p3
        };
        resposta26.onclick = function() {
            console.log(pontos);
            fim2();
        };
        resposta36.onclick = function() {
            console.log(pontos);
            fim2();
        };

    //MISSAO 3!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    } else if (perguntaAtual === 6) {
        esconde7();

        resposta17.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde8();
        };
        resposta27.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde8();
        };
        resposta37.onclick = function() {
            perguntaAtual++;
            pontos++;
            perguntee();
            esconde8();
        };
        
    } else if (perguntaAtual === 7) {
        resposta18.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde9();
        };
        resposta28.onclick = function() {
            perguntaAtual++;
            perguntee();
            esconde9();
        };
        resposta38.onclick = function() {
            perguntaAtual++;
            pontos++;
            perguntee();
            esconde9();
        };
        
    } else if (perguntaAtual === 8) {
        resposta19.onclick = function() {
            console.log(pontos);
            fim3(); //js - p4
        };
        resposta29.onclick = function() {
            console.log(pontos);
            pontos++;
            fim3();
        };
        resposta39.onclick = function() {
            console.log(pontos);
            fim3();
        };

    }
}

perguntee();