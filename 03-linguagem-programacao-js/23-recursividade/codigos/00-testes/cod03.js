// imprimir de forma regressiva um número até que ele chegue em zero (0).
function contar(_num) {
    let num = _num;

    //condição para encerrar a recursividade.
    if (num === -1) {
        return 0;
    }
    else {
        console.log(num);
        contar(num - 1);
    }
}

contar(28);
