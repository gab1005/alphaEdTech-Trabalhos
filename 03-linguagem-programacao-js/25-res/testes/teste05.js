//receber 3 valores digitados pelo usuário
//pelo console.
const prompt = require("prompt-sync")();

function newArray() {
    console.log("esse codigo recebe como parametro: quantidade de elementos desejados, valor minimo possivel e valor maximo possivel de cada elemento.\n");

    const quantity = prompt("digite a quantidade de elementos que devem ser retornados: ");

    const min = prompt("valor minimo: ");

    const max = prompt("valor maximo: ");

    //######################
    //função usando "for" que retorna um array com "n" elementos.
    //fazer verificação de entrada em versão futura.
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
    return multElem(min, max, quantity);
}


let arrResult = newArray();

//criar codigo para retornar os elementos do arrResult.
function printArr(...arr) {
    console.log(arr);
}

// printArr(...newArray());
printArr(...arrResult);
