const fs = require("fs");
// fs.readFile( "caminho", "tipo de leitura do texto", função callback para mostrar o erro ou o json em formato de texto)

fs.readFile("./data-teste-01.json", "utf-8", (err, jsonString) => {
    if (err) {
        console.log(err);
    }
    else {
        try {
            const jsonOBJ = JSON.parse(jsonString);
            jsonOBJ.map(elem => console.log(elem.id));

        }
        catch (err) {
            console.log("Error parsing JSON", err);
        }
    }
});
