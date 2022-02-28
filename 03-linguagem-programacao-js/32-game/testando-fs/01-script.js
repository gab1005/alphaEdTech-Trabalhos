// aplicando os conteudos de fs.
const fs = require("fs");

// fs.readFile
// fs.writeFile

fs.readFile("./data-teste-01.json", "utf-8", (err, data) => {
    if (err) {
        console.log("erro na leitura: ", err);
    }
    try {
        const dataJson = JSON.parse(data);
        dataJson.map(elem => {
            console.log(elem.id);
        });
    }
    catch (err) {
        return console.log("erro no try", err);
    }
});
