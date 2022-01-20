let matriz = [[1, 2, 3], [4, 5, 6], [7, ["a", "b", "c"], 9]];
let indice = matriz.length;

function print(arr) {
    if (arr.length == 0) {
        return false;
    }
    console.log(arr[0]);
    print(arr.slice(1));
}

print(matriz);