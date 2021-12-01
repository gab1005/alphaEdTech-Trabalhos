//pegar velocidade de forma aleatoria dos carros
const carrosVelocidade = {
    pedro() {
        let car01 = Math.random() * (230 - 150) + 150;    //velocidade random
        return car01 - (car01 * 0.03);                                  //menos a derrapagem
    },
    juca() {
        let car02 = Math.random() * (260 - 120) + 120;
        return car02 - (car02 * 0.05);
    },
    edna() {
        let car03 = Math.random() * (220 - 180) + 180;
        return car03 - (car03 * 0.01);
    }
};

//variaveis para guardar as vitorias dos carros  de cada volta
var pedroV = 0;
var jucaV = 0;
var ednaV = 0;

//funcao da corrida
function corrida(voltas) {
    //resetar contagem de vitorias para cada corrida
    pedroV = 0;
    jucaV = 0;
    ednaV = 0;
    //calcula quem ganhou as voltas
    for (var i = 0; i < voltas; i++) {
        //calcula quem ganhou a volta
        //pegando velocidades de ada volta, de cada carro
        var pedro = carrosVelocidade.pedro();
        var juca = carrosVelocidade.juca();
        var edna = carrosVelocidade.edna();

        if (pedro > juca && pedro > edna) {
            //adicionando vitorias ao pedro, 
            //que vai servir para saber quem ganhou a corrida
            pedroV++;
            //console.log("pedro " + pedroV);
        } else if (juca > pedro && juca > edna) {
            jucaV++;
            //console.log("juca " + jucaV);
        } else if (edna > pedro && edna > juca) {
            ednaV++;
            //console.log("edna " + ednaV);
        }
        //controle em caso de erro
        else {
            console.log("erro no calculo das voltas")
            console.log("velocidade dos carros = " + pedro, juca, edna);
        }
        console.log("contagem das voltas pedro, juca, edna =" + pedroV, jucaV, ednaV);
    }

    //calcular quem ganhou a corrida###########################

    //variavel que quarda o vencedor da corrida
    var vencedor = "";

    //caso de  empate, corrida de desempate
    if (pedroV == jucaV || pedroV == ednaV || jucaV == ednaV) {
        console.log("teve corrida de desenpate ")
        let pedroDesenpate = carrosVelocidade.pedro();
        let jucaDesenpate = carrosVelocidade.juca();
        let ednaDesenpate = carrosVelocidade.edna();

        if (pedroDesenpate > jucaDesenpate) {
            pedroV++
        } else if (jucaDesenpate > pedroDesenpate) {
            jucaV++
        } else {
            console.log("erro, empate de velocidade na corrida de desenpate")
        }

        if (pedroDesenpate > ednaDesenpate) {
            pedroV++
        } else if (ednaDesenpate > pedroDesenpate) {
            ednaV++
        } else {
            console.log("erro, empate de velocidade na corrida de desenpate")
        }

        if (jucaDesenpate > ednaDesenpate) {
            jucaV++
        } else if (ednaDesenpate > jucaDesenpate) {
            ednaV++
        } else {
            console.log("erro, empate de velocidade na corrida de desenpate")
        }

    }

    //contagem de quem foi o vencedor da corrida
    if (pedroV > jucaV && pedroV > ednaV) {
        vencedor = "pedro";
    } else if (jucaV > pedroV && jucaV > ednaV) {
        vencedor = "juca";
    } else if (ednaV > pedroV && ednaV > jucaV) {
        vencedor = "edna";
    } else {
        console.log("erro de quem  ganhou a corrida")
        console.log("pontuação de cada carro, pedro, juca, edna = " + pedroV, jucaV, ednaV);
    }

    //colocar resultado de quem ganhou a corrida  no html
    const testeResultado = document.querySelector(".resultado");
    const vitoriasPedro = document.querySelector(".vitorias-pedro");
    const vitoriasJuca = document.querySelector(".vitorias-Juca");
    const vitoriasEdna = document.querySelector(".vitorias-edna");

    testeResultado.textContent = vencedor;

    /**
    vitoriasPedro.textContent += pedroV;
    vitoriasJuca.textContent += jucaV;
    vitoriasEdna.textContent += ednaV;
     */

}







