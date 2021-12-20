var numeros = [0, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
    console.info(`${acumulador} total até o momento`);
    console.log(`${numero} valor atual`);
    console.log(`${indice} indice atual`);
    console.log(`${original} array original`);
    return acumulador += numero;
}, 0)
console.warn('acaboooou');
console.log(total)