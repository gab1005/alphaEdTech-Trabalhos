const corredores = [
    {
        pedro: {
            carro: {
                velMax: "",
                velMin: "",
                skid: ""
            },
            "xp": "0",
            level: ""
        }
    },

    {
        juca: {
            carro: {
                velMax: "",
                velMin: "",
                skid: ""
            },
            "xp": "0",
            level: ""
        }
    },

    {
        edna: {
            carro: {
                velMax: "",
                velMin: "",
                skid: ""
            },
            "xp": "0",
            level: ""
        }
    },
]

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


let pedroValores = { velocidade: 0, level: parseInt(0), xp: parseInt(0) };
let jucaValores = { velocidade: 0, level: parseInt(0), xp: parseInt(0) };
let ednaValores = { velocidade: 0, level: parseInt(0), xp: parseInt(0) };

//array quer  sera chamado pelo metodo forEach().
let podio = [pedroValores, jucaValores, ednaValores];

//Os objetos pedroValores, jucaValores, ednaValores  recebem velocidade final, ja calculada
pedroValores.velocidade = carrosPedro();
jucaValores.velocidade = carrosJuca();
ednaValores.velocidade = carrosEdnas();

function levelUp(item) {
    if (item.xp >= 450) {
        item.level += parseInt(1);
        item.xp -= parseInt(450);
    }
    if (item.level >= 10) {
        item.level = 10;
    }
}

podio.forEach(levelUp);

function modificarVelocidade(item) {
    item.velocidade = item.velocidade + ((item.velocidade / 100.0) * item.level);
}

podio.forEach(modificarVelocidade);

console.log(podio);
