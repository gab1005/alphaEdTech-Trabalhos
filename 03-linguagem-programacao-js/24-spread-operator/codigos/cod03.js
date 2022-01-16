//sortear 10 número_s, colocar em um vetor, usar spread e depois mostrar o maior número.


const vetor_10 = [];


// console.log(Math.random() * (100 - 1) + 1);
// console.log(Math.random() * (max - min) + min)

for (let i = 0; i < 10; i++) {
    const max = 100;
    const min = 1;
    let elem = parseInt(Math.random() * (max - min) + min);   //elem recebe um valor entre 1 e 100.
    vetor_10.push(elem);    //é adicionado o valor sorteado ao vetor_10.
}

////o vetor_10 estará preenchido com 10 elementos.
console.log(vetor_10);

function printVetor(_a, _b, _c, _d, _e, _f, _g, _h, _i, _j) {
    let a = _a, b = _b, c = _c, d = _d, e = _e, f = _f, g = _g, h = _h, i = _i, j = _j;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
    console.log(g);
    console.log(h);
    console.log(i);
    console.log(j);

}

printVetor(...vetor_10);

