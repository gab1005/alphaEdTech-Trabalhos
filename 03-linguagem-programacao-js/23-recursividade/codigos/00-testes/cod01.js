//função de soma diferenciada
function somaDif(_a, _b) {
    let a = parseInt(_a);
    let b = parseInt(_b);

    let resultado = 0;

    if (b > 0) {
        resultado = a + somaDif(a, b - 1);
        console.log(resultado);
    }
    return console.log(resultado);
}

somaDif(2, 2);
