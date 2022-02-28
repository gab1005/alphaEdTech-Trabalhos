const fs = require("fs");
try {
    // const jsonString = fs.readFileSync("local", "tipo de leitura")
    const jsonString = fs.readFileSync("./datateste-01.json", "utf-8");
    const josnObj = JSON.parse(jsonString);
    josnObj.map(elem => console.log(elem.id));
}
catch (err) {
    console.log("erro na leitura de json", err);
}