// O código está verificando se é um vetor ou um número, 
// e está "entrando" na matriz dada, mas não consegue "sair"
// para verificar um vetor/elemento "irmão".

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//um problema grande nessa função recursiva é que ela tem que fazer um
//tratamento do valor de entrada, verificando se ele é um vetor ou um número.
function printMatrix(_arr) {
    let arr = _arr;
    let indice = arr.length - 1;

    //caso seja array => recursividade para "abrir" o vetor.
    if (Array.isArray(arr[indice])) {
        console.log(`é um array ${arr[indice]}`);
        printMatrix(arr[indice]);
    }
    //caso não seja um array (ou seja, é um elemento "normal") => imprimir elemento
    else {
        //caso
        if (arr.length) {
            console.log(`não é um array ${arr[indice]}`);
            arr.pop();  //remover ultimo elemento do array


            //para o código.
            if (arr.lengh == 0) {
                return false;
            }
            printMatrix(arr);
        }
        else {

        }

    }
}

printMatrix(matriz);
