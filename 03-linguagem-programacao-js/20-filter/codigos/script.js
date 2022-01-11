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

    console.log("elementos de arrayResultado", arrayResultado);
    console.log("tamanho de arrayResultado", arrayResultado.length);
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

    //########################3
    //console.log("testando leitura do map() com arrrayClientes");
    /**
    function teste02(item) {
        console.log(item.a);
        console.log(item.b);
        console.log(item.c);
        console.log(item.d);
        let tempo = diferencaDatas(item.b, item.c);
        console.log(tempo);
    }
    arrayClientes.map(teste02)
     */

}

//transformar tudo  em segundo e calcular o resultado.
function diferencaDatas(b, c) {
    let diaMili = 60 * 60 * 24;
    let mesMili = diaMili * 30;
    let anoMili = mesMili * 12;
    /**
    console.log(b);
    console.log("verificando dia, mes, ano em milisegundos: ", diaMili, mesMili, anoMili);
     */

    let diaB = b.getDate() * diaMili;
    let mesB = b.getMonth() * mesMili;
    let anoB = b.getFullYear() * anoMili;
    let tempoB = diaB + mesB + anoB;

    /**
    console.log("b.getDate() ", b.getDate());
    console.log("b.getMonth() ", b.getMonth());
    console.log("b.getFullYear() ", b.getFullYear());
     */

    let diaC = c.getDate() * diaMili;
    let mesC = c.getMonth() * mesMili;
    let anoC = c.getFullYear() * anoMili;
    let tempoC = diaC + mesC + anoC;

    //##########depois retirar
    /**
    console.log("diferencaDatas() foi chamada")
    console.log("-------------");
    console.log("valor de b=", b);
    console.log("valor de c=", c);
    console.log("-------------");
    console.log("valores de  tempoB", (diaB), (mesB), (anoB));
    console.log("valores de tempoC", diaC, mesC, anoC);
    console.log("-------------");
    console.log("tempoB =", tempoB);
    console.log("tempoC =", tempoC);
     */
    //let resultado = Math.round((tempoC - tempoB) / diaMili);
    let resultado = (tempoC - tempoB) / diaMili;

    /**
    console.log("-------------");
    console.log("(tempoC-tempoB) / diamili =", resultado);
     */
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

        //criar  parte "tfoot" da tabela com os resultados de nome, juros, montante.
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
    let resultado = arrayClientes.map(calcularJuros);
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

    console.log("array ordenado alfabeticamente com sucesso");

    function apagarCampo() {
        let tbody = document.querySelector(".tabela-resultado");
        tbody.textContent = "";
        console.log("campo apagado com sucesso");
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

        console.log("campo reescrevido com sucesso!!!");
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

    console.log("array ordenado por data de  vencimento com sucesso");

    function apagarCampo() {
        let tbody = document.querySelector(".tabela-resultado");
        tbody.textContent = "";
        console.log("campo apagado com sucesso");
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

        console.log("campo reescrevido com sucesso!!!");
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
function filtrarData() {
    let dataInicial = new Date(document.querySelector(".filtro-data-inicio").value);
    let dataFinal = new Date(document.querySelector(".filtro-data-final").value);

    function funcaoSort(item) {
        console.log("item  dentro  de funcaoSort() =", item);
        console.log("item.c = ", item.c);
        console.log("valor de dataInicial =", dataInicial);
        console.log("valor dataFinal", dataFinal);

        console.log("------------------");
        let resultadoInicial = diferencaDatas(dataInicial, item.c);
        let resultadoFinal = diferencaDatas(item.c, dataFinal);
        console.log("resultadoInicial =", resultadoInicial);
        console.log("resultadoFinal =", resultadoFinal);

        if (resultadoInicial > 0 && resultadoFinal > 0) {
            console.log("entrou no if");
            return true;
        } else if (resultadoInicial <= 0 || resultadoFinal <= 0) {
            console.log("entrou no else if");

            return false;
        } else {
            console.log("erro na estrutura if else da funcao filtroData()");
            return false;
        }
    }

    arrayResultado = arrayClientes.filter(funcaoSort);
    //let arrayClientes = arrayResultado;

    console.log("arrayResultado =", arrayResultado);;

    function escreverValores() {
        //escrever valores
        //linkar  elementos
        let elementoTr = document.createElement("tr");
        let elementoTdNome = document.createElement("td");
        let elementoTdDataCompra = document.createElement("td");
        let elementoTdDataVencimento = document.createElement("td");
        let elementoTdVAlor = document.createElement("td");

        //adicionar valor aos elementosTd:
        elementoTdNome.innerHTML = "";

        //adicionar elementos ao  elementoTr
        elementoTr.appendChild(elementoTdNome);
        elementoTr.appendChild(elementoTdDataCompra);
        elementoTr.appendChild(elementoTdDataVencimento);
        elementoTr.appendChild(elementoTdVAlor);

        //apagar valores
    }
}

//funão para ordenar por valor do produto.
function filtrarValor() {
    let valorMinimo = document.querySelector(".filtro-numero-minimo").value;
    let valorMaximo = document.querySelector(".filtro-numero-maximo").value;
}
