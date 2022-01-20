const dataBase = require("../database.js");

function getNiver(x, y) {
    if (x.name < y.name) { return -1 }
    if (x.name > y.name) { return 1; }

    return 0;
}
const aniver = dataBase.sort(getNiver);

//IMPORTANTE
module.exports = aniver;
