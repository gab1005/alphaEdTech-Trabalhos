const fs = require("fs");

const newObject = {
    "name": "Newbe corp",
    "order_count": 0,
    "address": "Po Box City",

};
// const jsonString = JSON.stringify(newObject);
// console.log(jsonString);

// fs.writeFile("caminho do arquivo a ser escrito", JSON.stringify(nomeDoObjeto), callback para pegar erro)
// detale: caso o arquivo já exista, ele sera  repreenchido.

fs.writeFile("./newData.json", JSON.stringify(newObject, null, 2), err => {
    if (err) {
        console.log("deu erro na escrita do json", err);
    }
    else {
        console.log("json escrito com sucesso!");
    }
})
