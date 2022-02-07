function mult(num) {
    return function (outroNum) {
        return num * outroNum;
    }
}

let newFunction = mult(7);

//retorna a função dentro de mult.
// console.log(String(newFunction));

const res = newFunction(10);
const res02 = newFunction(7);
const res03 = newFunction(35);
console.log(`os valores são res = ${res}, res02 = ${res02}, res03 = ${res03}`);
