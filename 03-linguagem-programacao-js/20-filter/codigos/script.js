//array para guardar informações dos clientes (nome, datas de vencimento e compra, valor do prorduto comprado)
let arrayClientes = [];
//array para quardar montante devedor dos  clientes a ser utilizado no metodo reduce().
let arrayMontante = [];
//array para quardar valores já ordenados pelo metodo filter
let arrayResultado = [];

function mostrarValores() {
    const tabelaNome = document.querySelector(".tabela-nome").value;
    const tabelaDataCompra = document.querySelector(".tabela-data-compra").value;
    const tabelaDataVencimento = document.querySelector(".tabela-data-vencimento").value;
    const tabelaValor = document.querySelector(".tabela-valor").value;

    let a = tabelaNome;
    let b = new Date(tabelaDataCompra);
    let c = new Date(tabelaDataVencimento);
    let d = tabelaValor;

    criarObjeto(a, b, c, d);

    //colocando valores vazios em arrayResultado, para evitar erro de underfine
    arrayResultado.push({
        "a": "",
        "b": "",
        "c": "",
        "d": ""
    });
}

function criarObjeto(a, b, c, d) {
    const cliente = { a, b, c, d };

    //adicionando objetos ao array.
    arrayClientes.push(cliente);

    valoresLinha(cliente.a, cliente.b, cliente.c, cliente.d);
}

function valoresLinha(a, b, c, d) {
    let elementoTbody = document.querySelector(".tabela-resultado");

    let elementoTr = document.createElement("tr");

    let elementoTd1 = document.createElement("td");
    let elementoTd2 = document.createElement("td");
    let elementoTd3 = document.createElement("td");
    let elementoTd4 = document.createElement("td");

    elementoTd1.innerHTML = a;
    elementoTd2.innerHTML = `${b.getDate() + 1} / ${b.getMonth() + 1} / ${b.getFullYear()}`;
    elementoTd3.innerHTML = `${c.getDate() + 1} / ${c.getMonth() + 1} / ${c.getFullYear()}`;
    elementoTd4.innerHTML = d;

    elementoTr.appendChild(elementoTd1);
    elementoTr.appendChild(elementoTd2);
    elementoTr.appendChild(elementoTd3);
    elementoTr.appendChild(elementoTd4);

    elementoTbody.appendChild(elementoTr)
}

//transformar tudo  em segundo e calcular o resultado.
function diferencaDatas(b, c) {
    let diaMili = 60 * 60 * 24;
    let mesMili = diaMili * 30;
    let anoMili = mesMili * 12;

    let diaB = b.getDate() * diaMili;
    let mesB = b.getMonth() * mesMili;
    let anoB = b.getFullYear() * anoMili;
    let tempoB = diaB + mesB + anoB;

    let diaC = c.getDate() * diaMili;
    let mesC = c.getMonth() * mesMili;
    let anoC = c.getFullYear() * anoMili;
    let tempoC = diaC + mesC + anoC;

    let resultado = (tempoC - tempoB) / diaMili;

    return resultado;
}


function mostrarJuros() {
    function calcularJuros(item, index, array) {
        //let  juros = C*I*T
        item.d = parseFloat(item.d);

        let tempo = diferencaDatas(item.b, item.c);
        let juros = item.d * (0.02 + (0.001 * tempo));
        let montante = item.d + juros;

        //##########mandar montantes para array.
        arrayMontante.push(montante);

        //conectar parte "tfoot" da tabela com os resultados de nome, juros, montante.
        let tFoot = document.querySelector(".clientes-juros");

        //resultado de cada coluna
        let nomeTd = document.createElement("td");
        nomeTd.innerHTML = item.a;
        let jurosTd = document.createElement("td");
        jurosTd.innerHTML = juros;
        let montanteTd = document.createElement("td");
        montanteTd.innerHTML = montante;

        //linha dos resultados
        let elementoTr = document.createElement("tr");
        elementoTr.appendChild(nomeTd);
        elementoTr.appendChild(jurosTd);
        elementoTr.appendChild(montanteTd);

        //tFoot.appendChild(tituloTr)
        tFoot.appendChild(elementoTr);
    }
    //#################----map()----########################
    arrayClientes.map(calcularJuros);
}


//#################################################
//ordem alfabetica.
function ordemAlfabetica() {
    arrayClientes.sort(function (a, b) {
        if (a.a < b.a) {
            return -1;
        }
        else {
            return true;
        }
    });
    function apagarCampo() {
        let tbody = document.querySelector(".tabela-resultado");
        tbody.textContent = "";
    }
    apagarCampo();
    function reescreverCampo() {
        let tbody = document.querySelector(".tabela-resultado");

        function criarLinhas(item) {
            let elementoTr = document.createElement("tr");

            let nomeTd = document.createElement("td");
            nomeTd.innerHTML = item.a;

            let dataCompraTd = document.createElement("td");
            dataCompraTd.innerHTML = `${item.b.getDate() + 1} / ${item.b.getMonth() + 1} / ${item.b.getFullYear()}`;

            let dataVencimentoTd = document.createElement("td");
            dataVencimentoTd.innerHTML = `${item.c.getDate() + 1} / ${item.c.getMonth() + 1} / ${item.c.getFullYear()}`;

            let valorTd = document.createElement("td");
            valorTd.innerHTML = item.d;

            elementoTr.appendChild(nomeTd);
            elementoTr.appendChild(dataCompraTd);
            elementoTr.appendChild(dataVencimentoTd);
            elementoTr.appendChild(valorTd);

            tbody.appendChild(elementoTr);
        }
        arrayClientes.forEach(criarLinhas);
    }
    reescreverCampo();
}

//ordenar por data de vencimento
function ordemVencimento() {
    arrayClientes.sort(function (a, b) {
        if (a.c < b.c) {
            return -1;
        }
        else {
            return true;
        }
    });
    function apagarCampo() {
        let tbody = document.querySelector(".tabela-resultado");
        tbody.textContent = "";
    }
    apagarCampo();
    function reescreverCampo() {
        let tbody = document.querySelector(".tabela-resultado");

        function criarLinhas(item) {
            let elementoTr = document.createElement("tr");

            let nomeTd = document.createElement("td");
            nomeTd.innerHTML = item.a;

            let dataCompraTd = document.createElement("td");
            dataCompraTd.innerHTML = `${item.b.getDate() + 1} / ${item.b.getMonth() + 1} / ${item.b.getFullYear()}`;

            let dataVencimentoTd = document.createElement("td");
            dataVencimentoTd.innerHTML = `${item.c.getDate() + 1} / ${item.c.getMonth() + 1} / ${item.c.getFullYear()}`;

            let valorTd = document.createElement("td");
            valorTd.innerHTML = item.d;

            elementoTr.appendChild(nomeTd);
            elementoTr.appendChild(dataCompraTd);
            elementoTr.appendChild(dataVencimentoTd);
            elementoTr.appendChild(valorTd);

            tbody.appendChild(elementoTr);
        }
        arrayClientes.forEach(criarLinhas);
    }
    reescreverCampo();
}

//mostrar total a pagar
function totalMontante() {
    //##################-----reduce()-----#########################
    let totalMontante = arrayMontante.reduce((acumulador, item) => {
        acumulador += parseFloat(item);
        return acumulador;
    }, 0);

    let elementoPaiTfoot = document.querySelector(".clientes-juros");

    let elementoTr = document.createElement("tr");

    let elementoTd01 = document.createElement("th");
    elementoTd01.innerHTML = "soma de todas as dividas: ";

    let elementoTd02 = document.createElement("td");
    elementoTd02.innerHTML = totalMontante;

    elementoTr.appendChild(elementoTd01);
    elementoTr.appendChild(elementoTd02);
    elementoPaiTfoot.appendChild(elementoTr);
}

//parte do codigo que trabalha com filter(), ordenando por data e valor, referente a arrayClientes[].
//referente a data de vencimento.
function filtrarData() {
    let dataInicial = new Date(document.querySelector(".filtro-data-inicio").value);
    let dataFinal = new Date(document.querySelector(".filtro-data-final").value);

    function funcaoSort(item) {
        // C - B
        let resultadoInicial = diferencaDatas(dataInicial, item.c);
        let resultadoFinal = diferencaDatas(item.c, dataFinal);

        if (resultadoInicial > 0 && resultadoFinal > 0) {
            return true;
        } else if (resultadoInicial <= 0 || resultadoFinal <= 0) {
            return false;
        } else {
            return false;
        }
    }
    // array com os elementos que devem ser printados no html
    arrayResultado = arrayClientes.filter(funcaoSort);

    // conectar elemento pai no html
    let resFilter = document.querySelector(".resposta-filter");

    // apagar valores
    resFilter.innerHTML = "";

    function escreverValores(elemento) {
        //elementos filhos
        let elementoTr = document.createElement("tr");

        let elementoTdNome = document.createElement("td");
        let elementoTdDataCompra = document.createElement("td");
        let elementoTdDataVencimento = document.createElement("td");
        let elementoTdVAlor = document.createElement("td");

        elementoTdNome.innerHTML += elemento.a;
        elementoTdDataCompra.innerHTML += elemento.b;
        elementoTdDataVencimento.innerHTML += elemento.c;
        elementoTdVAlor.innerHTML += elemento.d;

        elementoTr.appendChild(elementoTdNome);
        elementoTr.appendChild(elementoTdDataCompra);
        elementoTr.appendChild(elementoTdDataVencimento);
        elementoTr.appendChild(elementoTdVAlor);

        resFilter.appendChild(elementoTr);
    }
    arrayResultado.map(elem => escreverValores(elem));
}

//funão para ordenar por valor do produto.
function filtrarValor() {
    let valorMinimo = document.querySelector(".filtro-numero-minimo").value;
    let valorMaximo = document.querySelector(".filtro-numero-maximo").value;
    console.log(`valor minimo = ${valorMinimo}, valor maximo = ${valorMaximo}`);

    console.log(`valorMinimo = ${typeof (valorMinimo)}  e valorMaximo = ${typeof (valorMaximo)}`)

    function ordenar(elem) {
        // verificação do valor minimo

        if (valorMinimo === "") {
            valorMinimo = parseInt(0);
        }
        // verificação do valor maximo
        if (valorMaximo === "") {
            console.log(`valorMaximo = ${typeof (valorMaximo)}`)
            if (valorMinimo <= elem) {
                console.log("deu if")
                return true;
            } else {
                console.log("deu else")
                return false;
            }
        }
        // caso os dois estejam preenchidos, segue a seguinte formula
        else {
            console.log(`valorMaximo = ${typeof (valorMaximo)}`)
            if (valorMinimo <= elem && elem <= valorMaximo) {
                console.log("deu if")
                return true;
            } else {
                console.log("deu else")
                return false;
            }
        }

    }
    // não deu certo quando usei const, para "resetar"
    //  o array quando arrayMontante não tinha recebido os valores ainda
    let resFilterValor = arrayMontante.filter(ordenar);

    const elemPai = document.querySelector(".tabela-filter");
    function escreverHTML(elem) {
        const elemTR = document.createElement("tr");
        const elemTD = document.createElement("td");
        elemTD.innerHTML = elem;

        elemTR.appendChild(elemTD);

        elemPai.appendChild(elemTR);
    }
    elemPai.innerHTML = "";
    resFilterValor.map(escreverHTML);
}
