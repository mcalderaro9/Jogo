function DadosPersonagem(posicao){

    console.log(posicao)

    fetch("http://localhost:3000/Personagem").then(response => {
        return response.json()
    }).then(Personagem => {

        console.log(Personagem)  

        document.getElementById("conteudo").innerHTML = " "
        document.getElementById("conteudo-img").innerHTML = " "


        document.getElementById("conteudo-img").innerHTML +=  "<p> <b> </b></b> "+ Personagem[posicao].img +"<p>"

        document.getElementById("conteudo").innerHTML += 
        "<b>Nome do Personagem:</b> " + Personagem[posicao].nome +
        "<p> "+ Personagem[posicao].imagem +"<p>"  +
        "<p> <b>Data de nascimento: </b> "+ Personagem[posicao].datanasc +"<p>" +
        "<p> <b>Genero: </b>" + Personagem[posicao].genero + "<p>"
     
    });
}