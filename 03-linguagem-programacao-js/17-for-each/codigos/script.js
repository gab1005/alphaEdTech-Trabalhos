//objeto de acordo com o que o professor Leo mandou.
const corredores = [
    {
        pedro: {
            carro: {
                velMax: "",
                velMin: "",
                skid: ""
            },
            pontos: "",
            nivel: ""
        }
    },

    {
        juca: {
            carro: {
                velMax: "",
                velMin: "",
                skid: ""
            },
            pontos: "",
            nivel: ""
        }
    },

    {
        edna: {
            carro: {
                velMax: "",
                velMin: "",
                skid: ""
            },
            pontos: "",
            nivel: ""
        }
    },
]
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

let pedroValores = { velocidade: 0, level: parseInt(0), xp: parseInt(0) };
let jucaValores = { velocidade: 0, level: parseInt(0), xp: parseInt(0) };
let ednaValores = { velocidade: 0, level: parseInt(0), xp: parseInt(0) };

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


//RECEBE: (carrosPedro, ...Juca, ...Ednas) => RETORNA: velocidade dos corredores
const carrosVelocidade = {
    pedro() {
        let resultado = 0;
        resultado = carrosPedro();
        resultado = resultado + ((resultado / 100.0) * pedroValores.level);
        return parseFloat(resultado);
    },
    juca() {
        let resultado = 0;
        resultado = carrosJuca();
        resultado = resultado + ((resultado / 100.0) * jucaValores.level);
        return parseFloat(resultado);
    },
    edna() {
        let resultado = 0;
        resultado = carrosEdnas();
        resultado = resultado + ((resultado / 100.0) * ednaValores.level);
        return parseFloat(resultado);
    }
};

pedroValores.velocidade = carrosVelocidade.pedro();
jucaValores.velocidade = carrosVelocidade.juca();
ednaValores.velocidade = carrosVelocidade.edna();

//variaveis para guardar as vitorias dos carros  de CADA VOLTA
var pedroV = 0;
var jucaV = 0;
var ednaV = 0;

//soma das vitorias
let totalpv = 0;
let totaljv = 0;
let totalev = 0;

//funcao da corrida
function corrida(voltas) {
    //resetar contagem de vitorias para cada corrida
    pedroV = 0;
    jucaV = 0;
    ednaV = 0;

    //calcula quem ganhou as voltas
    for (var i = 0; i < voltas; i++) {
        //calcula quem ganhou a volta
        //pegando velocidades da volta, de cada carro
        var pedro = carrosVelocidade.pedro();
        var juca = carrosVelocidade.juca();
        var edna = carrosVelocidade.edna();

        if (pedro > juca && pedro > edna) {
            //adicionando vitorias ao pedro, 
            //que vai servir para saber quem ganhou a corrida
            pedroV++;
        } else if (juca > pedro && juca > edna) {
            jucaV++;
        } else if (edna > pedro && edna > juca) {
            ednaV++;
        }
        //controle em caso de erro
        else {
            console.log("erro no calculo das voltas")
            console.log("velocidade dos carros = ", pedro, juca, edna);
        }
    }

    //calcular quem ganhou a corrida###########################

    //corrida de desempate
    while (pedroV == jucaV || pedroV == ednaV || jucaV == ednaV) {
        console.log("teve corrida de desenpate ")
        let pedroDesenpate = carrosVelocidade.pedro();
        let jucaDesenpate = carrosVelocidade.juca();
        let ednaDesenpate = carrosVelocidade.edna();

        //caso dos 3 empatarem
        if (pedroV == jucaV && pedroV == ednaV & jucaV == ednaV) {
            pedroDesenpate = carrosVelocidade.pedro();
            jucaDesenpate = carrosVelocidade.juca();
            ednaDesenpate = carrosVelocidade.edna();

            if (pedroDesenpate > jucaDesenpate && pedroDesenpate > ednaDesenpate) {
                //adicionando vitorias ao pedro, 
                //que vai servir para saber quem ganhou a corrida
                pedroV++;
            } else if (jucaDesenpate > pedroDesenpate && jucaDesenpate > ednaDesenpate) {
                jucaV++;
            } else if (ednaDesenpate > pedroDesenpate && ednaDesenpate > jucaDesenpate) {
                ednaV++;
            }
            else {
                console.log("erro, na corrida de 3 empatados")
                console.log("velocidade dos carros = ", pedro, juca, edna);
            }
        }
        else {
            if (pedroV == jucaV) {
                pedroDesenpate = carrosVelocidade.pedro();
                jucaDesenpate = carrosVelocidade.juca();

                if (pedroDesenpate > jucaDesenpate) {
                    pedroV++
                } else if (jucaDesenpate > pedroDesenpate) {
                    jucaV++
                } else {
                    console.log("erro, corrida de desempate pedro e juca")
                }

            }
            if (pedroV == ednaV) {
                pedroDesenpate = carrosVelocidade.pedro();
                ednaDesenpate = carrosVelocidade.edna();
                if (pedroDesenpate > ednaDesenpate) {
                    pedroV++
                } else if (ednaDesenpate > pedroDesenpate) {
                    ednaV++
                } else {
                    console.log("erro, corrida de desenpate pedro e edna")
                }
            }

            if (jucaV == ednaV) {
                jucaDesenpate = carrosVelocidade.juca();
                ednaDesenpate = carrosVelocidade.edna();
                if (jucaDesenpate > ednaDesenpate) {
                    jucaV++
                } else if (ednaDesenpate > jucaDesenpate) {
                    ednaV++
                } else {
                    console.log("erro, corrida de desenpate juca e edna")
                }
            }
        }
    }


    //contagem para decidir o PODIO#############
    let vencedor = "";
    let segundo = "";
    let terceiro = "";
    let pedroXp = 0;
    let jucaXp = 0;
    let ednaXp = 0;

    if (pedroV > jucaV && pedroV > ednaV) {
        vencedor = "pedro";
        pedroXp += 200;
        if (jucaV > ednaV) {
            segundo = "juca";
            terceiro = "edna";
            jucaXp += 120;
            ednaXp += 70;
        } else if (ednaV > jucaV) {
            segundo = "edna";
            terceiro = "juca";
            ednaXp += 120;
            jucaXp += 70;
        } else {
            console.log("erro: contagem de quem foi o segundo lugar, juca e edna")
        }
    }

    else if (jucaV > pedroV && jucaV > ednaV) {
        vencedor = "juca";
        jucaXp += 200;
        if (pedroV > ednaV) {
            segundo = "pedro";
            terceiro = "edna";
            pedroXp += 120;
            ednaXp += 70;
        } else if (ednaV > pedroV) {
            segundo = "edna";
            terceiro = "pedro";
            ednaXp += 120;
            pedroXp += 70;
        } else {
            console.log("erro: contagem de quem foi o segundo lugar, pedro e edna")
        }
    }

    else if (ednaV > pedroV && ednaV > jucaV) {
        vencedor = "edna";
        ednaXp += 200;
        if (pedroV > jucaV) {
            segundo = "pedro";
            terceiro = "juca";
            pedroXp += 120;
            jucaXp += 70;
        } else if (jucaV > pedroV) {
            segundo = "juca";
            terceiro = "pedro";
            jucaXp += 120;
            pedroXp += 70;
        } else {
            console.log("erro: contagem de quem foi o segundo lugar, pedro e juca")
        }
    }

    else {
        console.log("erro de quem  ganhou a corrida")
        console.log("pontuação de cada carro, pedro, juca, edna = " + pedroV, jucaV, ednaV);
    }

    console.log("vitorias de voltas de cada corredor: \n", "pedro =", pedroV, "juca =", jucaV, "edna =", ednaV);
    console.log("podio: \n", "vencedor=", vencedor, "segundo=", segundo, "terceiro=", terceiro);

    //#########NIVEL E XP - METODO forEach
    /**
     *   let pedroXp = 0;
    let jucaXp = 0;
    let ednaXp = 0;
     *///passando xp para os objetos


    //array quer  sera chamado pelo metodo forEach().
    let podio = [pedroValores, jucaValores, ednaValores];

    pedroValores.xp += parseInt(pedroXp);
    jucaValores.xp += parseInt(jucaXp);
    ednaValores.xp += parseInt(ednaXp);

    //Os objetos pedroValores, jucaValores, ednaValores  recebem velocidade final, ja calculada


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

    //colocando resultado no html
    const testeResultado = document.querySelector(".resultado");
    testeResultado.textContent = "vencedor = " + vencedor + ", Segundo = " + segundo + ", terceiro = " + terceiro;

    const pedrohtml = document.querySelector("#pedro");
    const jucahtml = document.querySelector("#juca");
    const ednahtml = document.querySelector("#edna");

    pedrohtml.textContent = "pedro xp = " + pedroValores.xp + ", pedro lv = " + pedroValores.level;
    jucahtml.textContent = "juca xp = " + jucaValores.xp + ", juca lv = " + jucaValores.level;
    ednahtml.textContent = "edna xp = " + ednaValores.xp + ", edna lv = " + ednaValores.level;

    const vitoriasPedro = document.querySelector("#vitorias-pedro");
    const vitoriasJuca = document.querySelector("#vitorias-Juca");
    const vitoriasEdna = document.querySelector("#vitorias-edna");

    totalpv += pedroV;
    totaljv += jucaV;
    totalev += ednaV;

    vitoriasPedro.textContent = "Pedro =" + totalpv;
    vitoriasJuca.textContent = "juca =" + totaljv;
    vitoriasEdna.textContent = "Edna" + totalev;

}

