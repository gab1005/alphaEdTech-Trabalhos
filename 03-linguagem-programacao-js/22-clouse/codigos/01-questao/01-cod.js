function mult(num) {
    return function (anotherNum) {
        return num * anotherNum;
    }
}

let newFunction = mult(7);

// retorna a função dentro de mult.
// console.log(String(newFunction));

const res01 = newFunction(10);
const res02 = newFunction(7);
const res03 = newFunction(35);
console.log(`os valores são res01 = ${res01}, res02 = ${res02}, res03 = ${res03}`);
