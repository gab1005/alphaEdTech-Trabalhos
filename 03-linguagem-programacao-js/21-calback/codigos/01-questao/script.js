// função callback recebe um valor e o imprime.

function consoleValor(valor) {
    console.log(valor);
}

function imprimir(numero, cb) {
    let numeroNew = numero;
    cb(numeroNew);
}

imprimir(10, consoleValor);
