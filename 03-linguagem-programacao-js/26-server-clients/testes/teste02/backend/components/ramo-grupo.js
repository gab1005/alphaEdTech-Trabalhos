//receber nome do ramo (no caso numero); e retornar
//os funcionarios daquele ramo ordenado de forma
//alfabetica
// const funcionariosSetor = require("./setor-grupo");
const tudo = require("./tudo");

let arrRamo = [];

function funcionariosRamo(ramo) {
    const arrRamo = tudo.filter(elem => {
        const ramoData = elem.ramo.toLowerCase();
        const ramoLow = ramo.toLowerCase();
        ramoData.includes(ramoLow);
    });

    if (arrRamo.length <= 0) {
        return `${ramo} não é valido`;
    }
    arrRamo.sort((a, b) => {
        if (a.ramo > b.ramo) {
            return 1;
        } else {
            return -1;
        }
    });

    return arrRamo;
}

module.exports = funcionariosRamo;
