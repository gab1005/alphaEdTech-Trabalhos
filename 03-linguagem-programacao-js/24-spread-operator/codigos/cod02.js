const vetor01 = [1, 2, 3];
const vetor02 = [4, 5, 6];

function concatenarVetor(_a, _b, _c, _d, _e, _f) {
    let a = _a, b = _b, c = _c, d = _d, e = _e, f = _f;
    const vetorResult = [a, b, c, d, e, f];
    console.log(`vetor resultado de concatenar 2 vetores de tamanho 3 cada: [${vetorResult}]`);
}

concatenarVetor(...vetor01, ...vetor02);


//desta forma deu erro, depois pesquisar o porque.
function concatenar02(_a, _b) {
    const a = _a;
    const b = _b;

    const aSpread = ...a;
    const bSpread = ...b;

    const vetResult = [aSpread, bSpread];

    console.log("outra forma na funncao concatenar02 = " + vetResult);
}

//concatenar02(vetor01, vetor02);