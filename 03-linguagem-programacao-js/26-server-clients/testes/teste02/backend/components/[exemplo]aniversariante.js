//#########################
//server apenas de exemplo.

const dataBase = require("../funcionarios.json");

function getNiver(x, y) {
    if (x.nome < y.nome) { return -1 }
    if (x.nome > y.nome) { return 1; }

    return 0;
}
const aniversario = dataBase.sort(getNiver);

//IMPORTANTE
// module.exports = aniver;

module.exports = aniversario;
