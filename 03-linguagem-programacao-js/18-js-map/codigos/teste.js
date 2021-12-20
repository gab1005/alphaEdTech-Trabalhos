console.log("rodadno  teste.js")
console.log("----------------------------")

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];

function doubrar(elemento) {
    return elemento * 2;
}

const vetor2 = vetor.map(doubrar);

console.log(vetor2);