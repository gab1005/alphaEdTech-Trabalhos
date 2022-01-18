//imprime um vetor de n elementos
//usando a biblioteca readLine.
const readLine = require("readline");   //line com letra minuscula.

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


//####
//chama as funções necessárias e pede os parametros ao usuário.
function rlQuestions() {
    rl.question("quantidade de elementos: ", (quantity) => {
        //codigo...
        rl.question("valor minimo de cada elemento: ", (min) => {
            //codigo...
            rl.question("valor maximo de cada elemento: ", (max) => {
                //codigo
                let result = multElem(min, max, quantity); //retorna array com n elementos.
                printArr(...result);   //printa o array com n elementos.

                //encerrar rl.
                rl.close();
            });
        });

    });
}
rlQuestions();

//############
//criar vetor de n elementos.
function multElem(_min, _max, _quantity) {
    const min = _min;
    const max = _max;
    const quantity = _quantity;

    let vectorRandom = [];

    for (let i = 0; i < quantity; i++) {
        let randomNumber = Math.random() * (max - min) + min;
        randomNumber = parseInt(randomNumber);
        vectorRandom.push(randomNumber);
    }

    return vectorRandom;
}

//##########
//imprime
function printArr(...arr) {
    console.log(arr);
}
