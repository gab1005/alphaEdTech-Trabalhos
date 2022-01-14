//referencia: https://pt.stackoverflow.com/questions/439285/recursividade-adicionar-n%C3%BAmeros-em-um-array
// retorna um array de tamanho n.
function rec(_num) {
    let num = _num;
    if (num < 1) {
        return [];
    }
    else {
        const arr = rec(num - 1);
        arr.push(num);
        return arr;
    }
}

console.log(rec(5));

// function countup(n) {
//     if (n < 1) {
//         return [];
//     } else {
//         // O interpretador vai parar aqui até que a função
//         // retorne seu valor...veja o Segunda execução
//         const countArray = countup(n - 1);
//         countArray.push(n);
//         return countArray;
//     }
// }
