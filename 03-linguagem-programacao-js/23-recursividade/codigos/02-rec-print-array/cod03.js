const matriz = [1, 2, 3, [1, 2, 3], 5];
let matrizIndice = matriz.length;

function printAnyArray(...arr) {
    //verificar se é uma matriz, se não é vazia
    if (matrizIndice > 0) {
        matrizIndice = matrizIndice - 1;
        console.log(arr[matrizIndice]);
        printAnyArray(...matriz);
    }
    // else {
    //     console.log(arr);
    // }
}
printAnyArray(matriz);