//variavel apra saber quem inicia, impar, par
var cont = 0;

//criando vetor
var v = [];
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        v[i, j] = "| |";
    }
}

function marcar(a) {
    //apontar o elemento html que declaca o vencedor
    let vencedor = document.querySelector(".vencedor");
    //apontando para os botões na pagina html
    var b01 = document.querySelector(".b01");
    var b02 = document.querySelector(".b02");
    var b03 = document.querySelector(".b03");

    var b04 = document.querySelector(".b04");
    var b05 = document.querySelector(".b05");
    var b06 = document.querySelector(".b06");

    var b07 = document.querySelector(".b07");
    var b08 = document.querySelector(".b08");
    var b09 = document.querySelector(".b09");

    //alterando entre par e impar
    cont += 1;
    //jogadas de numero impar
    if (cont % 2 != 0) {
        console.log("impar");
        if (a == 1) {
            b01.innerHTML = "O";
            v[0, 0] = "O";
        } else if (a == 2) {
            b02.innerHTML = "O";
            v[0, 1] = "O";
        } else if (a == 3) {
            b03.innerHTML = "O";
            v[0, 2] = "O";
        } else if (a == 4) {
            b04.innerHTML = "O";
            v[1, 0] = "O";
        } else if (a == 5) {
            b05.innerHTML = "O";
            v[1, 1] = "O";
        } else if (a == 6) {
            b06.innerHTML = "O";
            v[1, 2] = "O";
        } else if (a == 7) {
            b07.innerHTML = "O";
            v[2, 0] = "O";
        } else if (a == 8) {
            b08.innerHTML = "O";
            v[2, 1] = "O";
        } else if (a == 9) {
            b09.innerHTML = "O";
            v[2, 2] = "O";
        }

        //verificar vencedor
        for (var i = 0; i < 3; i++) {
            if (v[i, 0] == v[i, 1] == v[i, 2]) {
                vencedor.innerHTML = "O ganhou";
            }
        }
        //verificar colunas iguais
        for (var j = 0; j < 3; j++) {
            if (v[0, j] == v[1, j] == v[2, j]) {
                vencedor.innerHTML = "O ganhou";
            }
        }
        //diagonais
        if (v[0, 0] == v[1, 1] == v[2, 2]) {
            vencedor.innerHTML = "O ganhou";
        } else if (v[0, 2] == v[1, 1] == v[2, 0]) {
            vencedor.innerHTML = "O ganhou";
        }
    } else if (cont % 2 == 0) {
        console.log("par");
        if (a == 1) {
            b01.innerHTML = "X";
            v[0, 0] = "X";
        } else if (a == 2) {
            b02.innerHTML = "X";
            v[0, 1] = "X";
        } else if (a == 3) {
            b03.innerHTML = "X";
            v[0, 2] = "X";
        } else if (a == 4) {
            b04.innerHTML = "X";
            v[1, 0] = "X";
        } else if (a == 5) {
            b05.innerHTML = "X";
            v[1, 1] = "X";
        } else if (a == 6) {
            b06.innerHTML = "X";
            v[1, 2] = "X";
        } else if (a == 7) {
            b07.innerHTML = "X";
            v[2, 0] = "X";
        } else if (a == 8) {
            b08.innerHTML = "X";
            v[2, 1] = "X";
        } else if (a == 9) {
            b09.innerHTML = "X";
            v[2, 2] = "X";
        }

        //verificar vencedor
        for (var i = 0; i < 3; i++) {
            if (v[i, 0] == v[i, 1] == v[i, 2]) {
                vencedor.innerHTML = "X ganhou";
            }
        }
        //verificar colunas iguais
        for (var j = 0; j < 3; j++) {
            if (v[0, j] == v[1, j] == v[2, j]) {
                vencedor.innerHTML = "X ganhou";
            }
        }
        //diagonais
        if (v[0, 0] == v[1, 1] == v[2, 2]) {
            vencedor.innerHTML = "X ganhou";
        } else if (v[0, 2] == v[1, 1] == v[2, 0]) {
            vencedor.innerHTML = "X ganhou";
        }
    }

    //teste: verificar os elementos da matriz
    for (var i = 0; i < 3; i++) {
        console.log("-------------")
        console.log(v[i, 0], v[i, 1], v[i, 2]);
    }

    //logica para decidir vencedor

    //verificar linhas iguais

}



