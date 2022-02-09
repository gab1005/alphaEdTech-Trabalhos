const urlAll = "https://economia.awesomeapi.com.br/json/all";
const urlPadrao = "https://economia.awesomeapi.com.br";
$(document).ready(function () {
    // preencher  select com as opções de moedas
    $.ajax({
        url: urlAll

    }).done(function (dados) {
        // tranforma em array os objetos
        const arrObjetos = Object.entries(dados);
        arrObjetos.forEach(selectMoedas);

        function selectMoedas(elem) {
            $("#selecionar-moedas").append(`<option>${elem[0]}</option>`)
        }

    }).fail(function () {
        console.log("erro na requisição");
    });

    // requisições feitas para cada mudança no select
    const selecionar = $("#selecionar-moedas");

    selecionar.on("change", () => {
        const moeda = $("#selecionar-moedas").val();
        const quantidade = parseInt(1);
        console.log(moeda);

        // todas informações das moeda
        $.ajax({
            url: urlPadrao + `/${moeda}`
        }).done((res) => {
            const resTexto = JSON.stringify(res);
            console.log(`resTexto = ${resTexto}`);

            const resJson = JSON.parse(resTexto)
            console.log(`resJson = ${resJson}`);

            const escreverHTML = $(".resposta");

            const max = parseFloat(resJson.high);
            const min = parseFloat(resJson.low);
            const cotacao = (max + min) / 2

            console.log(resJson);
            console.log(max)
            console.log(min)
            console.log(cotacao)

            escreverHTML.html(resJson);
        }).fail(() => {
            console.log("erro em escrever atributos da moeda");
        });

        // Cotação
        // $.ajax({
        //     url: urlPadrao + `/${moeda}/${quantidade}`
        // }).done((res) => {
        //     const resCotacao = JSON.stringify(res);
        //     console.log(resCotacao);
        // }).fail(() => {
        //     console.log("erro no request com quantidade!");
        // });

        // // valor Maximo
        // $.ajax({
        //     url: urlPadrao + `/${moeda}`
        // })
    })
});