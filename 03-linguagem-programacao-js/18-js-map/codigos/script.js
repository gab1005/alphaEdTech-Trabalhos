let arrayClientes = [];

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

    //verificando arrayClientes.
    console.log("arrayClientes =", arrayClientes);
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
    console.log("testando leitura do map() com arrrayClientes");

    function teste02(item) {
        console.log(item.a);
        console.log(item.b);
        console.log(item.c);
        console.log(item.d);
        let tempo = diferencaDatas(item.b, item.c);
        console.log(tempo);
    }
    arrayClientes.map(teste02)
}

function diferencaDatas(b, c) {
    let diaMili = 1000 * 60 * 60 * 24;
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

    let resultado = Math.round((tempoC - tempoB) / diaMili);

    return resultado;
}



function mostrarJuros() {
    function calcularJuros(item) {
        //let  juros = C*I*T

        item.d = parseFloat(item.d);

        let tempo = diferencaDatas(item.b, item.c);
        let juros = item.d * (0.02 + (0.001 * tempo));
        let montante = item.d + juros;


        //criar  parte "tfoot" da tabela com os resultados de nome, juros, montante.
        let tFoot = document.querySelector(".clientes-juros");

        //titulos de cada coluna
        /**
         *         let tituloNome = document.createElement("th");
                tituloNome = "Nome Cliente";
                let tituloJuros = document.createElement("th");
                tituloJuros = "Juros Acumulado";
                let tituloMontante = document.createElement("th");
                tituloMontante = "Divida Total do Cliente";
         */

        //resultado de cada coluna
        let nomeTd = document.createElement("td");
        nomeTd.innerHTML = item.a;
        let jurosTd = document.createElement("td");
        jurosTd.innerHTML = juros;
        let montanteTd = document.createElement("td");
        montanteTd.innerHTML = montante;

        //linha dos titulos
        /**
         *      let tituloTr = document.createElement("tr");
        tituloTr.appendChild(tituloNome);
        tituloTr.appendChild(tituloJuros);
        tituloTr.appendChild(tituloMontante);
         */

        //linha dos resultados
        let elementoTr = document.createElement("tr");
        elementoTr.appendChild(nomeTd);
        elementoTr.appendChild(jurosTd);
        elementoTr.appendChild(montanteTd);

        //tFoot.appendChild(tituloTr)
        tFoot.appendChild(elementoTr);


        return montante;
    }

    let resultado = arrayClientes.map(calcularJuros);

    console.log("resultado =", resultado);
}