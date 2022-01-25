//recebe um numero (1-12), retorna os aniversariantes do mês respectivo.
const data = require("../data.json");

function aniversariantes(_mes) {
    // const mes = parseInt(_mes);
    const mes = String(_mes);
    let arrAniversariantes = [];
    arrAniversariantes = data.filter(elem => {
        const mesData = elem.nascimento.slice(3, 5);
        if (mesData == mes || mesData == `0${mes}`) {
            return true;
        }
    });

    if (arrAniversariantes.length <= 0) {
        return `não existem aniversariantes deste mes: ${mes}`;
    } else {
        return arrAniversariantes;
    }

}

//exportando a função.
module.exports = aniversariantes;
