//recebe um numero (1-12), retorna os aniversariantes do mês respectivo.
const tudo = require("./tudo.js")

function aniversariantes(_mes) {
    // const mes = parseInt(_mes);
    const mes = _mes;

    const arrAniversariantes = [];

    if (mes) {
        ;
        arrAniversariantes = tudo.filter(elem => {
            const mesData = elem.nascimento.slice(3, 5);
            if (mesData == mes || mesData == `0${mes}`);
        });
    }
    if (arrAniversariantes.length <= 0) {
        return `não existem aniversariantes deste mes: ${mes}`;
    }
    return arrAniversariantes;
}

//testar como exportar a função.
module.exports = aniversariantes;
