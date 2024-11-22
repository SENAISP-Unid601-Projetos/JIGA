function fim3(){
    if(pontos == 3){
        quizz.style.display = 'none';
        
        if(personagem === 'artemis'){
            tela = 'artemis missao 3';
            condicaoMissao = 'missao3';
            context.drawImage(artemisR, 0, 0, canvas.width, canvas.height)

        } else if(personagem === 'orion'){
            tela = 'orion missao 3';
            context.drawImage(orionR, 0, 0, canvas.width, canvas.height)
        }

    } else if(pontos < 3){
        tela = 'quizz3'

        context.drawImage(falhaQuizz, 0, 0, canvas.width, canvas.height)
        quizz.style.display = 'none';
    }
}

function quizz3(clickX, clickY){
    if(clickX > 668 && clickX < 747 && clickY > 546 && clickY < 628){
        perguntaAtual = 6;
        pontos = 0;
        
        context.drawImage(fundoP, 0, 0, canvas.width, canvas.height);
        quizz.style.display = 'block';
        perguntee();
        respostaCerta();
    }
} 


function voltaEscolha3 (clickX, clickY){
    if(clickX > 40 && clickX < 130 && clickY > 641 && clickY < 731){
       window.location.reload();
    } 
}

function terminei3 (clickX, clickY){
    if(clickX > 1127 && clickX < 1364 && clickY > 652 && clickY < 718){
        arrayRoupas1.length = 0;
        if(personagem === 'artemis'){
           verifica3(); 
        } else if(personagem === 'orion'){
           verifica3O(); 
        }
     } 
}

//reinicia depois de falhar na escolha da roupa
function resetaFalha3(clickX, clickY){
    if(clickX > 386 && clickX < 504 && clickY > 575 && clickY < 690){ // tenho que mudar o botao
        window.location.reload();
     } 
 };

var feedbackFinal = new Image();
feedbackFinal.src = 'IMG/feedbackPositivoFinal.png';
var feedbackNegativo3 = new Image();
feedbackNegativo3.src = 'IMG/feedbackNegativoFinal.png';

function verifica3(){
    arrayRoupas1.push(A1A);
    arrayRoupas1.push(B1A);
    arrayRoupas1.push(C1A);
    arrayRoupas1.push(S1A);

    if ((arrayRoupas1[1] === 5 || arrayRoupas1[1] === 2 || arrayRoupas1[1] === 8) && 
        (arrayRoupas1[2] === 5 || arrayRoupas1[2] === 2 || arrayRoupas1[2] === 8) && 
        (arrayRoupas1[0] === 5 || arrayRoupas1[0] === 2 || arrayRoupas1[0] === 8) && 
        (arrayRoupas1[3] === 5 || arrayRoupas1[3] === 2 || arrayRoupas1[3] === 8)) {
            
            tela = 'feedback bom final'; //precisa adicionar o p1

            context.clearRect(0,0,1000000000,1000000);
            context.drawImage(feedbackFinal, 0, 0, canvas.width, canvas.height); //preciso mudar a imagem :P

            BE.style.display = 'none';
            BD.style.display = 'none';
            CE.style.display = 'none';
            CD.style.display = 'none';
            SE.style.display = 'none';
            SD.style.display = 'none';
            AE.style.display = 'none';
            AD.style.display = 'none';

            carrossel.style.display = 'none'; 

    } else {
      
        tela = 'feedback ruim3'; // mudar a imagem

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackNegativo3, 0, 0, canvas.width, canvas.height);

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

function verifica3O(){
    arrayRoupas2.push(A1AO);
    arrayRoupas2.push(B1AO);
    arrayRoupas2.push(C1AO);
    arrayRoupas2.push(S1AO);

    if ((arrayRoupas2[1] === 5 || arrayRoupas2[1] === 2 || arrayRoupas2[1] === 8) && 
        (arrayRoupas2[2] === 5 || arrayRoupas2[2] === 2 || arrayRoupas2[2] === 8) && 
        (arrayRoupas2[0] === 5 || arrayRoupas2[0] === 2 || arrayRoupas2[0] === 8) && 
        (arrayRoupas2[3] === 5 || arrayRoupas2[3] === 2 || arrayRoupas2[3] === 8)) {
            
            tela = 'feedback bom final'; //precisa adicionar o p1

            context.clearRect(0,0,1000000000,1000000);
            context.drawImage(feedbackFinal, 0, 0, canvas.width, canvas.height); //preciso mudar a imagem :P

            BE2.style.display = 'none';
            BD2.style.display = 'none';
            CE2.style.display = 'none';
            CD2.style.display = 'none';
            SE2.style.display = 'none';
            SD2.style.display = 'none';
            AE2.style.display = 'none';
            AD2.style.display = 'none';

            carrosselO.style.display = 'none'; 

    } else {
      
        tela = 'feedback ruim3'; // mudar a imagem

        context.clearRect(0,0,1000000000,1000000);
        context.drawImage(feedbackNegativo3, 0, 0, canvas.width, canvas.height);

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

function JOGOACABOUbem (clickX, clickY){
    if(clickX > 170 && clickX < 250 && clickY > 600 && clickY < 680){
        window.location.reload();
        
    } else if (clickX > 260 && clickX < 460 && clickY > 600 && clickY < 670){
        //colocar coisa do site 
    }
}

function JOGOACABOUmal(clickX, clickY){       
    if(clickX > 100 && clickX < 400 && clickY > 550 && clickY < 720){
        window.location.reload();
    }
}

function vaiSite(clickX, clickY){       
    if(clickX > 305 && clickX < 505 && clickY > 600 && clickY < 800){
        window.location.href = "../index.html";
    }
}