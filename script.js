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

/*setTimeout(function() { definir a função }, tempo em milissegundos);*/



function susp1(/*palavra*/) {
    //if(palavra == 'JO')
        document.getElementById('res').innerHTML=`<h1>JO KEN PO!!!</h1>`;
        document.getElementById('jog').src='';
        document.getElementById('ia').src='';
    /*setInterval(function(){}, 1000);
    document.getElementById('res').innerHTML=`<h1>KEN</h1>`;
    setInterval(function(){}, 1000);
    document.getElementById('res').innerHTML=`<h1>PO!!!</h1>`;*/
    
  }
function susp2() {
    document.getElementById('res').innerHTML=`<h1>KEN</h1>`;
}
function susp3() {
    document.getElementById('res').innerHTML=`<h1>PO!!!</h1>`;
}


function jokenpo(jescolha){
    cescolha = 0;//computador();
   if (ganhador(jescolha,cescolha) == 1){
    susp1();
        //(function (jescolha) {
            //temp = setTimeout(susp1, 1000);
            /*clearTimeout(temp);
            temp=setTimeout(susp2, 1000);
            clearTimeout(temp);
            temp=setTimeout(susp3, 1000);
            clearTimeout(temp);*/
       // })(jescolha);
       // alert("jogador ganhou");
    }/*else if (ganhador(jescolha,cescolha) == -1){
        suspense();
        //alert("cpu ganhou");
    }else{
        suspense();
       // alert("empate");
    }
    //alert(cescolha);*/
}