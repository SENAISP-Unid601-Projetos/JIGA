function fim2(){
    if(pontos == 3){
        quizz.style.display = 'none';
        
        if(personagem === 'artemis'){
            tela = 'artemis missao 2';
            condicaoMissao = 'missao2';
            context.drawImage(artemisR, 0, 0, canvas.width, canvas.height)

        } else if(personagem === 'orion'){
            tela = 'orion missao 2';
            condicaoMissao = 'missao2';
            context.drawImage(orionR, 0, 0, canvas.width, canvas.height)

        }

    } else if(pontos < 3){
        tela = 'quizz2'

        context.drawImage(falhaQuizz, 0, 0, canvas.width, canvas.height)
        quizz.style.display = 'none';
    }
}

function quizz2(clickX, clickY){
    if(clickX > 668 && clickX < 747 && clickY > 546 && clickY < 628){
        perguntaAtual = 3;
        pontos = 0;
        
        context.drawImage(fundoP, 0, 0, canvas.width, canvas.height);
        quizz.style.display = 'block';
        perguntee();
        respostaCerta();
    }
} 


function voltaEscolha2 (clickX, clickY){
    if(clickX > 40 && clickX < 130 && clickY > 641 && clickY < 731){
       window.location.reload();
    } 
}

function terminei2 (clickX, clickY){
    if(clickX > 1127 && clickX < 1364 && clickY > 652 && clickY < 718){
        arrayRoupas1.length = 0;
        if(personagem === 'artemis'){
          verifica2();  
        } else if(personagem === 'orion'){
           verifica2O(); 
        }
     } 
}

//reinicia depois de falhar na escolha da roupa
function resetaFalha2(clickX, clickY){
    if(clickX > 386 && clickX < 504 && clickY > 575 && clickY < 690){
        window.location.reload();
     } 
 }


var feedbackNegativo2 = new Image();
feedbackNegativo2.src = 'IMG/feedbackNegativo2.png';
var feedbackPositivo2 = new Image();
feedbackPositivo2.src = 'IMG/feedbackPositivo2.png';
var feedbackPositivo2O = new Image();
feedbackPositivo2O.src = 'IMG/feedbackPositivo2O.png';

function verifica2(){
    arrayRoupas1.push(A1A);
    arrayRoupas1.push(B1A);
    arrayRoupas1.push(C1A);
    arrayRoupas1.push(S1A);

    if ((arrayRoupas1[1] === 7 || arrayRoupas1[1] === 1 || arrayRoupas1[1] === 3) && 
        (arrayRoupas1[2] === 7 || arrayRoupas1[2] === 1 || arrayRoupas1[2] === 3) && 
        (arrayRoupas1[0] === 7 || arrayRoupas1[0] === 1 || arrayRoupas1[0] === 3) && 
        (arrayRoupas1[3] != 0)) {
            
            tela = 'feedback bom1';

            context.clearRect(0,0,1000000000,1000000);
            context.drawImage(feedbackPositivo2, 0, 0, canvas.width, canvas.height); //preciso mudar a imagem :P

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
    
        tela = 'feedback ruim2';

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackNegativo2, 0, 0, canvas.width, canvas.height);

        BE.style.display = 'none';
        BD.style.display = 'none';
        CE.style.display = 'none';
        CD.style.display = 'none';
        SE.style.display = 'none';
        SD.style.display = 'none';
        AE.style.display = 'none';
        AD.style.display = 'none';

        carrossel.style.display = 'none'; 

    }
} 

function verifica2O(){
    arrayRoupas2.push(A1AO);
    arrayRoupas2.push(B1AO);
    arrayRoupas2.push(C1AO);
    arrayRoupas2.push(S1AO);

    if ((arrayRoupas2[1] === 7 || arrayRoupas2[1] === 1 || arrayRoupas2[1] === 3) && 
        (arrayRoupas2[2] === 7 || arrayRoupas2[2] === 1 || arrayRoupas2[2] === 3) && 
        (arrayRoupas2[0] === 7 || arrayRoupas2[0] === 1 || arrayRoupas2[0] === 3) && 
        (arrayRoupas2[3] != 0)) {
        
            tela = 'feedback bom1';

            context.clearRect(0,0,1000000000,1000000);
            context.drawImage(feedbackPositivo2O, 0, 0, canvas.width, canvas.height); 

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

        tela = 'feedback ruim2';

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackNegativo2, 0, 0, canvas.width, canvas.height);

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



