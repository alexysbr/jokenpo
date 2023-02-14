/* 0 = pedra, 1 = papel, 2 = tesoura*/

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
  
function computador(){
    return getRandomInt(0, 3);
}

/* 1 jogador ganha, -1 cpu ganha, 0 empate*/
function ganhador(player, cpu){
    if (player == cpu){
        return 0;
    }else if (player == 0){
        if (cpu == 1){
            return -1;
        }else{
            return 1;
        }
    }else if (player == 1){
        if (cpu == 0){ 
            return 1;
        }else{ 
            return -1;
        }
    }else if (player == 2){
        if (cpu == 0){
            return -1;
        }else{
            return 1;
        }
    }
}

function tela(jog1 ,ia1,) {
    if(jog1 == 0){
        document.getElementById('jog').src='pedra.png';         
    }else if(jog1 == 1){
        document.getElementById('jog').src='papel.png';
    }else if(jog1 == 2){
        document.getElementById('jog').src='tesoura.png';
    }
    if(ia1 == 0){
        document.getElementById('ia').src='pedra.png';
    }else if(ia1 == 1){
        document.getElementById('ia').src='papel.png';
    }else if(ia1 == 2){
        document.getElementById('ia').src='tesoura.png';
    }        
  }

function jokenpo(jescolha){
    cescolha = computador();
   if (ganhador(jescolha, cescolha) == 1){
        tela(jescolha, cescolha);
        document.getElementById('res').innerHTML=`<h1>==JOGADOR==</h1><br><h1>&emsp;GANHOU!!!</h1>`;
    }else if (ganhador(jescolha, cescolha) == -1){
        tela(jescolha, cescolha);
        document.getElementById('res').innerHTML=`<h1>COMPUTADOR</h1><br><h1>&nbsp;TE &nbsp;VENCEU!!!</h1>`;
    }else{
        tela(jescolha, cescolha);
        document.getElementById('res').innerHTML=`<h1>JO KEN PO!!!</h1><br><h1>&nbsp;EMPATOU!!!</h1>`;
    }
}