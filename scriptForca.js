var sPerguntas = [["TAYLOR SWIFT", "CANTOR"], ["CARAMBOLA", "FRUTA"],
["JAMBO", "FRUTA"], ["CARAMBOLA", "FRUTA"],
["PITOMBA", "CIDADE"], ["FORTALEZA", "CIDADE"],
["HOLAMBRA", "CANTOR"], ["TERESÓPOLIS", "CANTOR"],
["HORTOLÂNDIA", "CANTOR"], ["CARAPICUIBA", "CANTOR"],
["ALICATE", "CANTOR"], ["MARTELO", "CANTOR"],
["SERRA TICO-TICO", "CANTOR"], ["FORMÃO", "CANTOR"],
["CHAVE DE FENDA", "CANTOR"], ["CARAMBOLA", "CANTOR"],
["JORNAL", "CANTOR"], ["ALMOFADA", "CANTOR"],
["PALITO DE DENTE", "OBJETO"], ["BOLSA", "OBJETO"],
["STROGONOFF", "COMIDA"], ["CHURRASQUEIRA", "OBJETO"],
["MACARRONADA", "COMIDA"], ["LASANHA", "COMIDA"],
["CANELONE", "COMIDA"], ["FRANGO XADREZ", "COMIDA"],
["SANTANA", "CARRO"], ["AEROWILLYS", "CARRO"],
["RENEGATE", "CARRO"], ["VARIANT", "CARRO"],
["ROSA", "FLOR"], ["VIRTUS", "CARRO"],
["CALANCHUÊ", "FLOR"], ["GÉRBERA", "FLOR"],
["LÍRIO", "FLOR"], ["ORQUÍDEA", "FLOR"],
["VIOLÃO", "INSTRUMENTO MUSICAL"],
["SAXOFONE", "INSTRUMENTO MUSICAL"],
["UKULELÊ", "INSTRUMENTO MUSICAL"],
["ESCALETA", "INSTRUMENTO MUSICAL"],
["TROMBONE", "INSTRUMENTO MUSICAL"],
["ADAM SANDLER", "ATOR"], ["WILL SMITH", "ATOR"],
["JOHNNY DEEP", "ATOR"], ["BRAD PITT", "ATOR"],
["DWAYNE JHONSON", "ATOR"], ["JULIA ROBERTS", "ATRIZ"],
["MERYL STREEP", "ATRIZ"], ["BRIE LARSON", "ATRIZ"],
["SCARLET JOHANSSON", "ATRIZ"], ["ZOE SALDANA", "ATRIZ"],
["PATO DONALD", "PERSONAGEM"], ["HOMEM DE FERRO", "PERSONAGEM"],
["CAPITÃO AMÉRICA", "PERSONAGEM"], ["CORINGA", "PERSONAGEM"],
["AQUAMAN", "PERSONAGEM"], ["SPACE INVADERS", "JOGOS"],
["PAC-MAN", "JOGOS"], ["HALF-LIFE", "JOGOS"],
["CALL OF DUTY", "JOGOS"], ["MINECRAFT", "JOGOS"]];


var iSorteados = [];

var iJogada = 0;

var sPalavraSorteada;

var iAcertos = 0;

var iErro = 0;

var cletraClicada = "";

var sLetras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']

var iCertas = 0, iErradas = 0;

function criaLetras(sPalavra) {
    var formula = document.getElementById("tenta");
    var j = 0;
    console.log('PALAVRA: ' + sPalavra);

    for (var i = 0; i < sPalavra.length; i++) {
        if (sPalavra[i].charCodeAt(0) != 32) {

            var letra = document.createElement('input');
            letra.setAttribute("type", "text");
            letra.setAttribute("name", "tenta" + j);
            letra.setAttribute("id", "tenta" + j);
            letra.setAttribute("maxlength", 1);
            letra.setAttribute("size", 1);
            letra.setAttribute("disabled", true);
            letra.setAttribute("class", "tentativa");
            formula.appendChild(letra);
            j++;
        } else {
            document.getElementById("tenta" + (j - 1)).style.margin = "0px 20px 0px 1px";
        }
    }

    sPalavraSorteada = limpa(sPalavra);
    document.getElementById('tema').innerHTML = sPerguntas[iSorteados[iJogada]][1] + " - " + sPalavraSorteada.length + " letras";
}

function sorteia () {
    for(var m = 1; m < sPerguntas.length; m++){
        iSorteados.push(m);
    }

    iSorteados = shuffleArray(iSorteados);
    criaLetras(sPerguntas[iSorteados[iJogada]][0]);
}

function Confere(cletra){
    cletraClicada = cletra;

    var lAchou = false;

    for(var i=0; i<sPalavraSorteada.length; i++){
        if(cletra == sPalavraSorteada.charAt(i)){
            document.getElementById("tenta" + i).value = cletra;

            iAcertos++;

            document.getElementById('acerto').innerHTML = "ACERTOS: " + iAcertos;

            lAchou = true;
        }
    }

    if(lAchou == false){
        iErro++;

        document.getElementById('imagem').src="Imagens/forca" + (iErro + 1) + ".png";
    }
}

function acabou () {
    var lAcabou = false;

    if(iAcertos == sPalavraSorteada.length){
        lAcabou = true;
        alert("Parabéns, você descobriu a palavra!!");
        iCertas++;
    } else if (iErro == 6){
        lAcabou = true;
        alert("Tente mais uma vez");
        iErradas++;
    }

    // Desabilitar entradas de letras
    if (lAcabou) {
        for(var i = 0; i < sLetras.length; i++){
            document.getElementById(sLetras[i]).disabled = true;
        }

        for(var i = 0; i < sPalavraSorteada.length; i++){
            document.getElementById("tenta"+i).remove();
        }

        iJogada++;

        document.getElementById("palcerta").innerHTML = "PALAVRAS CERTAS: " + iCertas + "<br> PALAVRAS ERRADAS: " + iErradas;

        criaLetras(sPerguntas[iSorteados[iJogada]][0]);

        iAcertos = 0;
        iErro = 0;
        document.getElementById("acerto").innerHTML = "ACERTOS: " + iAcertos;

        document.getElementById('imagem').src = "Imagens/forca" + (iErro + 1) + ".png"; 

        for(var i = 0; i < sLetras.length; i++){
            document.getElementById(sLetras[i]).disabled = false;
        }
    }
}


function shuffleArray (d) {
    for (var c = d.length - 1; c > 0; c--) {
        var b = Math.floor(Math.random() * (c + 1));
        var a = d[c];
        d[c] = d[b];
        d[b] = a;
    }
    return d;
}

function limpa (sItem) {
    var sResultado = sItem;
    //Retira todos os espaços
    sResultado = sResultado.replaceAll(" ", "")

    sResultado = sResultado.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    return sResultado;
}

function replaceAll (str, de, para){
    var pos = str.index0f(de);

    while (pos > -1){
        str = str.replace(de, para);

        pos = str.index0f(de);
    }
    return (str);
}

function shake (e, oncomplete, distance, time) {
    var time = 500;
    var distance = 5;

    var start = (new Date ()).getTime();
    animate();

    function animate() {
        var now = (new Date()).getTime();

        var elapsed = now - start;

        var fraction = elapsed / time;

        if (fraction < 1) {
            var x = distance * Math.sin(fraction * 4 * Math.PI);

            e.style.left = x + "px";

            setTimeout(animate, Math.min(25, time - elapsed));
        } else {
            if(oncomplete) oncomplete (e);
        }
    }
}

function shakeme(event1) {
    shake(event1.target);
}