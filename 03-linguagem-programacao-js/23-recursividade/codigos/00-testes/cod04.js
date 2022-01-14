// retornar a soma dos dígitos de um número.

//#Math.floor(numeroQualquer): retorna o menor número (ou dígito) inteiro dentro de um inteiro.
//#deforma semelhante numeroQualquer % 10, retorna o resto da divisão por 10, que sempre sera o ultimo digito de numeroQualquer.
function rec(_num) {
    let num = _num;

    if (num === 0) {
        return 0;
    }
    else {
        let newNum = Math.floor(num / 10);
        return num % 10 + rec(newNum);
    }
}
let imprimir = rec(345);
console.log(imprimir);