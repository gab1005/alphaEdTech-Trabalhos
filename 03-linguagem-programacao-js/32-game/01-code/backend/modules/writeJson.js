const fs = require("fs");

function writeJson(_dataApp) {
    const dataApp = JSON.parse(_dataApp);
    fs.readFile("./data.json", "utf-8", (err, data) => {
        if (err) {
            console.log("erro no if do readFile");
        }
        fs.writeFile("data.json", JSON.stringify(dataApp, null, 2), err => {
            if (err) {
                console.log("erro no if do writeFile");
            }
            console.log("escrito com sucesso");
            const returnObj = require("./data.json");
            return returnObj;
        });
    });

}

module.exports = writeJson;
