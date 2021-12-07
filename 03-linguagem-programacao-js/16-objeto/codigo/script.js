//objeto carros, valores "cru"
const carros = {
    "prob": [parseFloat(60.0), parseFloat(35.0), parseFloat(5.0)],
    //"prob": parseFloat([5, 35, 60]),
    "popular": {
        "vMax": [180, 200],
        "vMin": [110, 130],
        "der": [0.03, 0.04]
    },
    "esporte": {
        "vMax": [195, 215],
        "vMin": [125, 145],
        "der": [0.02, 0.03]
    },
    "superEsporte": {
        "vMax": [210, 230],
        "vMin": [140, 160],
        "der": [0.01, 0.0175]
    },
};

//objeto carros, com valores medios, ja calculando a media de velocidade MAXIMA, velocidade MINIMA, e DERRAPAGEM
const carrosMedias = {
    "popular": {
        "vMax": Math.random() * (carros.popular.vMax[1] - carros.popular.vMax[0]) + carros.popular.vMax[0],
        "vMin": Math.random() * (carros.popular.vMin[1] - carros.popular.vMin[0]) + carros.popular.vMin[0],
        "der": Math.random() * (carros.popular.der[1] - carros.popular[0]) + carros.popular.der[0]
    },
    "esporte": {
        "vMax": Math.random() * (carros.esporte.vMax[1] - carros.esporte.vMax[0]) + carros.esporte.vMax[0],
        "vMin": Math.random() * (carros.esporte.vMin[1] - carros.esporte.vMin[0]) + carros.esporte.vMin[0],
        "der": Math.random() * (carros.esporte.der[1] - carros.esporte[0]) + carros.esporte.der[0]
    },
    "superEsporte": {
        "vMax": Math.random() * (carros.superEsporte.vMax[1] - carros.superEsporte.vMax[0]) + carros.superEsporte.vMax[0],
        "vMin": Math.random() * (carros.superEsporte.vMin[1] - carros.superEsporte.vMin[0]) + carros.superEsporte.vMin[0],
        "der": Math.random() * (carros.superEsporte.der[1] - carros.superEsporte[0]) + carros.superEsporte.der[0]
    }
}

//função para sortear carro de acordo com probabilidade, retornar carroSorteado
let carroSorteado = 0;
function selecionarCarro() {
    let prob = parseFloat(Math.random() * 100);
    console.log("valor de prob =", prob);
    let prob60 = carros.prob[0];     //60%
    let prob35 = carros.prob[1];     //35%
    let prob5 = carros.prob[2];     //5%

    if (parseFloat(0) <= prob && prob <= prob60) {
        carroSorteado = 1;
        console.log("carro escolhido ", carroSorteado)
    } else if (prob60 < prob && prob <= (prob60 + prob35)) {    //60 < prob <= 95; intervalo de que representa 35%
        carroSorteado = 2;
        console.log("carro escolhido ", carroSorteado)
    } else if ((prob60 + prob35) < prob && prob <= (prob60 + prob35 + prob5)) {
        carroSorteado = 3;
        console.log("carro escolhido ", carroSorteado)
    } else {
        console.log("err: nem um carro foi selecionado")
    }

    return carroSorteado;
}

//a partir do carro selecionado tem a velocidade do carro
function carroPedro() {
    numeroCarro = selecionarCarro();
    let vMax;
    let vMin;
    let der;
    let vMedia;
    let velocidadeFinal;

    if (numeroCarro == 1) {
        vMax = carrosMedias.popular.vMax;
        vMin = carrosMedias.popular.vMin;
        der = carrosMedias.popular.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    } else if (numeroCarro == 2) {
        vMax = carrosMedias.esporte.vMax;
        vMin = carrosMedias.esporte.vMin;
        der = carrosMedias.esporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    } else if (numeroCarro == 3) {
        vMax = carrosMedias.superEsporte.vMax;
        vMin = carrosMedias.superEsporte.vMin;
        der = carrosMedias.superEsporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    }
    console.log("carrosPedro funciona", velocidadeFinal);
}

function carroJuca() {
    numeroCarro = selecionarCarro();
    let vMax;
    let vMin;
    let der;
    let vMedia;
    let velocidadeFinal;

    if (numeroCarro == 1) {
        vMax = carrosMedias.popular.vMax;
        vMin = carrosMedias.popular.vMin;
        der = carrosMedias.popular.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    } else if (numeroCarro == 2) {
        vMax = carrosMedias.esporte.vMax;
        vMin = carrosMedias.esporte.vMin;
        der = carrosMedias.esporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    } else if (numeroCarro == 3) {
        vMax = carrosMedias.superEsporte.vMax;
        vMin = carrosMedias.superEsporte.vMin;
        der = carrosMedias.superEsporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    }
    console.log("carrosJuca funciona", velocidadeFinal);
}

function carroEdnas() {
    numeroCarro = selecionarCarro();
    let vMax;
    let vMin;
    let der;
    let vMedia;
    let velocidadeFinal;

    if (numeroCarro == 1) {
        vMax = carrosMedias.popular.vMax;
        vMin = carrosMedias.popular.vMin;
        der = carrosMedias.popular.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    } else if (numeroCarro == 2) {
        vMax = carrosMedias.esporte.vMax;
        vMin = carrosMedias.esporte.vMin;
        der = carrosMedias.esporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    } else if (numeroCarro == 3) {
        vMax = carrosMedias.superEsporte.vMax;
        vMin = carrosMedias.superEsporte.vMin;
        der = carrosMedias.superEsporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - der;

        return velocidadeFinal;
    }
    console.log("carrosEdna funciona", velocidadeFinal);
}

//esse obj carrosVeocidades retorna a veolocidade de cada corredor, em cada volta
const carrosVelocidade = {
    pedro() {
        let resultado = carrosPedro();

        console.log("carrosVelocidade pedro");
        return resultado;
    },
    juca() {
        let resultado = carrosPedro();

        console.log("carrosVelocidade pedro");
        return resultado;
    },
    edna() {
        let resultado = carrosPedro();

        console.log("carrosVelocidade pedro");
        return resultado;
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
