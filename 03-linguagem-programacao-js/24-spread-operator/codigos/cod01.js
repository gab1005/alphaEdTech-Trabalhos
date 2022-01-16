const vetor = [1, 2, 3, 4];

function mult_4(_a, _b, _c, _d) {
    let a = _a, b = _b, c = _c, d = _d;
    const result = a * b * c * d;

    console.log(`o resultado da multiplicação de ${a} * ${b} * ${c} *${d} = ${result}`);
}
mult_4(...vetor);
