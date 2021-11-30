function escrever() {
    //importadno  os elementos HTMLs por meio do querySelector.
    const entradaLinhas = document.querySelector(".entrada-linhas");
    let escreverNoQuadro = document.querySelector(".escrever-quadro");
    const nQuadroApagado = document.querySelector(".n-apagado");
    const nLinhasEscritas = document.querySelector("n-linhas");

    //frase a ser  usada e contador.
    const fraseBart = "É injusto julgar um presidente nos primeiros 300 dias.";
    let contador = 0;

    //testes.......
    console.log("valor de entrada = " + entradaLinhas.value);
    console.log("contador usado no while = " + contador);

    //estrutura de repetição.
    while (contador < entradaLinhas.value) {
        escreverNoQuadro.innerHTML += fraseBart + "   ";
        contador += 1;
    }

    //quantas vezes o quadro foi apagado

    //quantas linhas foram escritas


    //teste.....
    console.log("contador usado no while depois da repetição = " + contador);
}