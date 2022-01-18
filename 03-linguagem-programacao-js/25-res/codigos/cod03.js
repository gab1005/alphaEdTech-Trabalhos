//usando readLine, e recebendo multiplos parametros.
const readLine = require("readline");   //line com letra minuscula.

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let res01 = 0;
// let res02 = 0;
// let res03 = 0;

rl.question("pergunta01: ", (res01) => {
    //codigo...
    rl.question("pergunta02: ", (res02) => {
        //codigo...
        rl.question("pergunta03: ", (res03) => {
            //codigo
            console.log("temos como respostas", res01, res02, res03);
            let result = parseInt(res01) + parseInt(res02) + parseInt(res03);
            console.log(result);
            //encerrar rl.
            rl.close();
        });
    });

});



