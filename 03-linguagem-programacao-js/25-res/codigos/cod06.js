const readLine = require("readline");   //readline com l minusculo.

//configugar input e output:
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let quantity = 0;
let min = 0;
let max = 0;

console.log("digite a quantidade de elementos, valor minimo de cada elemento, e por ultimo o valor maximo\n");

//configurar os questions:
const pergQuant = () => {
    return new Promise((resolve, reject) => {
        rl.question("digite a quantidade: ", (quantityInput) => {
            quantity = quantityInput;

            resolve();
        });
    });
}

const pergMin = () => {
    return new Promise((resolve, reject) => {
        rl.question("digite valor minimo: ", (minInput) => {
            min = minInput;
            resolve();
        });
    });
}

const pergMax = () => {
    return new Promise((resolve, reject) => {
        rl.question("digite valor maximo: ", (maxInput) => {
            max = maxInput;
            resolve();
        });
    });
}

//lembrar de nomear como funcao async a arrow function.
const perguntar = async () => {
    await pergQuant();
    await pergMin();
    await pergMax();

    // console.log(quantity, min, max);
    let result = multElem(min, max, quantity);
    printArr(...result);

    rl.close();
}

perguntar();

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
