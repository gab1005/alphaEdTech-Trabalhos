//incompleto.
const matrizTeste = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let indice = matrizTeste.length;

function printArr(arr) {
    let indice = arr.length;
    if (Array.isArray(arr)) {
        console.log("array");
        printArr(...arr);
        return arr;
    }
    else {
        console.log("elemento");
        return arr;
    }
}

console.log(printArr(matrizTeste));
