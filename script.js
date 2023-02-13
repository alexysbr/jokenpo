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
    if player == cpu
        return 0;
    else if player == 0{
        if cpu == 1
            return -1;
        else
            return 1;
    }else if player == 1{
        if cpu == 0
            return 1;
        else 
            return -1;
    }else if player == 2{
        if cpu == 0
            return -1;
        else
            return 1;
    }
}

function jokenpo(jescolha){
    cescolha = computador();

    alert(jescolha);
}