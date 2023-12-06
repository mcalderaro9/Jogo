//inicializa as casas com nove para sabermos que nõ foi clicado
var casas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
//indica a vez do jogador - (1) xis (-1) bola
var vez = 1;
//conta quantos cliques foram dados durante o jogo 
var contaclique = 0;
//Placar
var iPontosX = 0;
var iPontosO = 0;
var iPontosV = 0;
var sResposta = "";

//Função que verifica as jogadas 
function verifica(casa) {
//verifica se a casa não foi clicada.
if(casas[casa]== 9){
//Modifica de 9 para o valor do jogador da vez 
casas [casa]=vez; 
//se o jogador da vez for 1, coloca o desenho do xis
if(vez==1){
document.getElementById("img"+casa).src="imagens/claveDeSol.jpg"; //se o jogador for -1, coloca o desenho da bola
}else{
document.getElementById("img"+casa).src="imagens/claveDeFá.jpg";
} 
//inverte o jogador da vez
vez*=-1;
contaclique++; 
//confere se houve vencedor
confere();
    }
}

//Função que testa se houve vencedor 
function confere() {
    var i;
    //Variável que marca se houve ganhador
    var lGanhou = false;
    //Variável que marca se o jogo acabou (todas casas clicadas)
    var lAcabou = true;
    //percorre todas as casas para verificar se ainda existe alguma não clicada
    for (i=0; i<casas.length; i++) {
    if(casas [i] == 9){ 
    //se houver, sabemos que ainda não deu velha
    lAcabou=false;
        }
    }
    //se a quantidade de cliques forem 9, o jogo acabou
    if(contaclique==9){
    lAcabou=true;
    }
    //Realiza a soma de cada coluna, Linha e diagonal e coloca o valor num vetor
    var Soma = [];
    Soma [0]=casas [0]+casas [1]+casas [2]; //tinha 1
    Soma [1]=casas [3]+casas [4]+casas [5]; //Linha 2
    Soma [2]=casas [6]+casas [7]+casas [8]; //linha 3 
    Soma [3]=casas [0]+casas [3]+casas [6]; //coluna 1
    Soma [4]=casas [1]+casas [4]+casas [7]; //coluna 2
    Soma [5]=casas [2]+casas [5]+casas [8]; //coluna 3 
    Soma [6]=casas [0]+casas [4]+casas [8]; //diagonal 1
    Soma [7]=casas [2]+casas [4]+casas [6]; //diagonal 2
    //percorre todos os valores de soma
    for (i=0; i<Soma.length; i++){
    //se achou uma soma (-3) é porque a bola ganhou 1Ganhou= true; iPontos0++;
    if(Soma [i]==-3){
    lGanhou= true;
    sResposta = "Vitória Clave de Fá";
    iPontosO++;
    document.getElementById("bola").innerHTML = "Clave de Fá: " + iPontosO;
    break;

    //se achou uma soma (3) é porque o xis ganhou
    }else if(Soma[i] == 3){
        lGanhou = true;
        sResposta = "Vitória Clave de Sol!";
        iPontosX++;
    document.getElementById("xis").innerHTML = "Clave de Sol: " + iPontosX;
    }
}
//se a bola e nem xis ganharam, mas o jogo acabou, é porquê deu velha
if(lGanhou == false && lAcabou == true) {   
        sResposta = "Deu VELHA!!!";
        iPontosV++
        document.getElementById("velha").innerHTML = "VELHA: " + iPontosV;
}
//se alguêm ganhou ou o jogo acabou
if(lGanhou || lAcabou) {
    //desabilita todas as casas para não serem mais clicadas
    for(i = 0; i < casas.length; i++) {
        document.getElementById("casa" + i).disable = true;
        casas[i] = 0;
    }
    //exibe o resultado
    document.getElementById("resposta").innerHTML = sResposta;
    //muda cor da letra
    document.getElementById("resposta").style.color = "#fff";
    //muda o tamanho do texto
    document.getElementById("resposta").style.fontSize = "xx-large";
    //window.confirm(sResposta)
    }
}

/****************************************************************/
//Função que recomeça todo o jogo
function recomeca() {
    for(i = 0; i < casas.length; i++) {
        //não permite arrastar a imagem
        document.getElementById("img" + i).ondragstart = function() {return false; };
        //habilita as casas
        document.getElementById("casa" + i).disable = false;
        //remove as imagens
        document.getElementById("img" + i).src = "";
        //volta configuração original
        document.getElementById("resposta").innerHTML = "RESULTADO:"
        document.getElementById("resposta").style.color = "#fff";
        document.getElementById("resposta").style.fontSize = "20px";
        //restaura os 9 das casas
        casas[i] = 9;
        lGanhou = false;
        lAcabou = true;
        contaclique = 0;
        vez = 1;
    }
}