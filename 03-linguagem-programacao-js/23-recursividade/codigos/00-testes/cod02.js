const fatorial = (_num) => {
    let num = _num;
    //#parar o codigo quando num = 1;
    if (num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}
console.log(fatorial(5));

//#codigo for de referência.
// function fatorial(_num) {
//     let num = _num;

//     let resultado = 1;
//     for (let i = num; i > 0; i--) {
//         resultado = resultado * i;
//     }
//     return resultado;
// }