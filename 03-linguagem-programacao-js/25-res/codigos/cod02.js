//usando readLine
const readLine = require("readline");   //line com letra minuscula.

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("pegunta? ", (resposta) => {
    console.log("print da resposta: " + resposta);

    rl.close(); //fechamento da interface.
});

