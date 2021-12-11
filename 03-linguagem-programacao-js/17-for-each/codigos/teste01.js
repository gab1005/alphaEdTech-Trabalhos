//ex: alterando valores de um array.
let vetor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let valorAdd = 0;

function acressentar(valorItem, indexItem, array) {
    valorAdd += valorItem;
    array[indexItem] = valorAdd;
}
let resultado = 0;
resultado = vetor.forEach(acressentar);

console.log(vetor);

//ex: imprimir cores
let cores = ["verde", "roda", "vermelho", "branco"];

function imprimir(itemValor) {
    console.log(itemValor);
}

cores.forEach(imprimir);

//ex: imprimindo array, vezes 2;
let numero = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mult = 0;
function tabuadaDe2(itemValor) {
    console.log(itemValor * 2);
}

numero.forEach(tabuadaDe2);

//ex: soma dos elementos de um array
let vetorSoma = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let somaPA = 0;

function somaPAFunction(itemValor) {
    somaPA += itemValor;
}

vetorSoma.forEach(somaPAFunction);

console.log(somaPA);


//ex: retornar dois elementos do array
let vetorNomes = ["Fiat", "Chevrolet", "Ford", "Volkswagen"];
let marcasComF = [];
let novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (vetorNomes[indice].indexOf("F") == 0) {
        marcasComF[novoIndice] = vetorNomes[indice];
        novoIndice++;
    }
}

vetorNomes.forEach(selecionarMarcas);
console.log(marcasComF);
//#########################
var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic' },
    { name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
