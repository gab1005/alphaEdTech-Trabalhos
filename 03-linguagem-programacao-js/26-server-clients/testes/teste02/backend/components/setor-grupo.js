//recebe o nome do setor, retornar funcionarios daquele
//setor
const tudo = require("./tudo.js");

const arrSetor = [];

function funcionariosSetor(setor) {
    arrSetor = tudo.filter(elem => {
        const setorData = elem.setor.toLowerCase();
        const setorLow = setor.toLowerCase();
        setorData.includes(setorLow);
    });

    if (arrSetor.length <= 0) {
        "digite um setor valido";
        return false;
    }


    return arrSetor;
}

module.exports = funcionariosSetor;

