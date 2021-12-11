//objeto carros, valores "cru"
const carros = {
    "prob": [parseFloat(60.0), parseFloat(35.0), parseFloat(5.0)],
    //"prob": parseFloat([5, 35, 60]),
    "popular": {
        "vMax": [180, 200],
        "vMin": [110, 130],
        "der": [parseFloat(0.03), parseFloat(0.04)],
    },
    "esporte": {
        "vMax": [195, 215],
        "vMin": [125, 145],
        "der": [parseFloat(0.02), parseFloat(0.03)],
    },
    "superEsporte": {
        "vMax": [210, 230],
        "vMin": [140, 160],
        "der": [parseFloat(0.01), parseFloat(0.0175)],
    },
};

//objeto carros, com valores medios, ja calculando a media de velocidade MAXIMA, velocidade MINIMA, e DERRAPAGEM
const carrosMedias = {
    "popular": {
        "vMax": Math.random() * (carros.popular.vMax[1] - carros.popular.vMax[0]) + carros.popular.vMax[0],
        "vMin": Math.random() * (carros.popular.vMin[1] - carros.popular.vMin[0]) + carros.popular.vMin[0],
        "der": Math.random() * (carros.popular.der[1] - carros.popular.der[0]) + carros.popular.der[0],
    },
    "esporte": {
        "vMax": Math.random() * (carros.esporte.vMax[1] - carros.esporte.vMax[0]) + carros.esporte.vMax[0],
        "vMin": Math.random() * (carros.esporte.vMin[1] - carros.esporte.vMin[0]) + carros.esporte.vMin[0],
        "der": Math.random() * (carros.esporte.der[1] - carros.esporte.der[0]) + carros.esporte.der[0],
    },
    "superEsporte": {
        "vMax": Math.random() * (carros.superEsporte.vMax[1] - carros.superEsporte.vMax[0]) + carros.superEsporte.vMax[0],
        "vMin": Math.random() * (carros.superEsporte.vMin[1] - carros.superEsporte.vMin[0]) + carros.superEsporte.vMin[0],
        "der": Math.random() * (carros.superEsporte.der[1] - carros.superEsporte.der[0]) + carros.superEsporte.der[0],
    }
};

/**
 * console.log(carros);
console.log(carrosMedias);
console.log(carrosMedias.popular.der);
 */

//sorteia os carros, retorna um numero (1,2,3) 
let carroSorteado = 0;
function selecionarCarro() {
    let prob = parseFloat(Math.random() * 100);
    let prob60 = carros.prob[0];     //60%
    let prob35 = carros.prob[1];     //35%
    let prob5 = carros.prob[2];     //5%

    if (parseFloat(0) <= prob && prob <= prob60) {
        carroSorteado = 1;
    } else if (prob60 < prob && prob <= (prob60 + prob35)) {    //60 < prob <= 95; intervalo de que representa 35%
        carroSorteado = 2;
    } else if ((prob60 + prob35) < prob && prob <= (prob60 + prob35 + prob5)) {     //95 < prob <= 100; representa o intervalo de 5%
        carroSorteado = 3;
    } else {
        console.log("erro: nem um carro foi escolhido");
    }
    return carroSorteado;
}

//(selecionarCarro() + carrosMedias) => velocidade dos corredores
function carrosPedro() {
    numeroCarro = selecionarCarro();
    let vMax;
    let vMin;
    let der;
    let vMedia;
    let velocidadeFinal;

    if (numeroCarro == 1) {
        vMax = carrosMedias.popular.vMax;       //ja pega  o valor random  da velocidade MAXIMA, de acordo com o objeto  "carrosMedias"
        vMin = carrosMedias.popular.vMin;        //ja pega  o valor random  da velocidade MINIMA, de acordo com o objeto  "carrosMedias"
        der = carrosMedias.popular.der;               //ja pega  o valor random  da DERRAPAPGEM, de acordo com o objeto  "carrosMedias"

        vMedia = Math.random() * (vMax - vMin) + vMin;  //valor random da velocidade, calculada de acordo com o intervalo entre vMaxima e v Minima
        velocidadeFinal = vMedia - (vMedia * der);              //calcula velocidade menos derrapagem

    } else if (numeroCarro == 2) {
        vMax = carrosMedias.esporte.vMax;
        vMin = carrosMedias.esporte.vMin;
        der = carrosMedias.esporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - (vMedia * der);

    } else if (numeroCarro == 3) {
        vMax = carrosMedias.superEsporte.vMax;
        vMin = carrosMedias.superEsporte.vMin;
        der = carrosMedias.superEsporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - (vMedia * der);

    }
    return parseFloat(velocidadeFinal);
}

function carrosJuca() {
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
        velocidadeFinal = vMedia - (vMedia * der);

        return parseFloat(velocidadeFinal);
    } else if (numeroCarro == 2) {
        vMax = carrosMedias.esporte.vMax;
        vMin = carrosMedias.esporte.vMin;
        der = carrosMedias.esporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - (vMedia * der);

        return parseFloat(velocidadeFinal);
    } else if (numeroCarro == 3) {
        vMax = carrosMedias.superEsporte.vMax;
        vMin = carrosMedias.superEsporte.vMin;
        der = carrosMedias.superEsporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - (vMedia * der);

        return parseFloat(velocidadeFinal);
    }
}

function carrosEdnas() {
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
        velocidadeFinal = vMedia - (vMedia * der);

        return parseFloat(velocidadeFinal);
    } else if (numeroCarro == 2) {
        vMax = carrosMedias.esporte.vMax;
        vMin = carrosMedias.esporte.vMin;
        der = carrosMedias.esporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - (vMedia * der);

        return parseFloat(velocidadeFinal);
    } else if (numeroCarro == 3) {
        vMax = carrosMedias.superEsporte.vMax;
        vMin = carrosMedias.superEsporte.vMin;
        der = carrosMedias.superEsporte.der;

        vMedia = Math.random() * (vMax - vMin) + vMin;
        velocidadeFinal = vMedia - (vMedia * der);

        return parseFloat(velocidadeFinal);
    }
    console.log("carrosEdna funciona", velocidadeFinal);
}

//RECEBE: (carrosPedro, ...Juca, ...Ednas) => RETORNA: velocidade dos corredores
const carrosVelocidade = {
    pedro() {
        let resultado = 0;
        resultado = carrosPedro();
        return parseFloat(resultado);
    },
    juca() {
        let resultado = 0;
        resultado = carrosJuca();
        return parseFloat(resultado);
    },
    edna() {
        let resultado = 0;
        resultado = carrosEdnas();
        return parseFloat(resultado);
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
        let pedro = carrosVelocidade.pedro();
        let juca = carrosVelocidade.juca();
        let edna = carrosVelocidade.edna();

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
            console.log("velocidade dos carros = ", pedro, juca, edna);
        }
        console.log("contagem das voltas pedro, juca, edna = ", pedroV, jucaV, ednaV);
        console.log("velocidade dos carros = ", pedro, juca, edna);
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

    //contagem de quem foi o vencedor da corrida**********************
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
    testeResultado.textContent = vencedor;

    /** adicionar vitorias dos corredores, deu erro
    const vitoriasPedro = document.querySelector(".vitorias-pedro");
    const vitoriasJuca = document.querySelector(".vitorias-Juca");
    const vitoriasEdna = document.querySelector(".vitorias-edna");
     */
    /**
    vitoriasPedro.textContent += pedroV;
    vitoriasJuca.textContent += jucaV;
    vitoriasEdna.textContent += ednaV;
     */
}
