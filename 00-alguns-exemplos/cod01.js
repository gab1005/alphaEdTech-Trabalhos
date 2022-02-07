const arr01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = arr01.reduce((contador, elemento) => {
    if (elemento % 2 !== 0) {
        contador += elemento;
    }
    return contador;
}, 0)

console.log(resultado);


