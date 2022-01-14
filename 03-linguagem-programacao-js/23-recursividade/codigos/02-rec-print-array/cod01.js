// imprimir elementos de uma matriz.

function printArray(_arr) {
    let arr = _arr

    if (arr.length === 0) {
        console.log(arr)
        return console.log("fim da recursividade");
    }
    else {
        let indice = parseInt(arr.length - 1); //pasar o indice do array.
        let temp = arr[indice];
        arr.pop();
        printArray(arr);        //recebe 2, array.length = 1; tem somente o elemento 1 dentro do array.
        return console.log(temp);
    }
}

let arrExemplo = [1, 2, 3, 4];

printArray(arrExemplo);