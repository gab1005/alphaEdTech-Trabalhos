//variavel apra saber quem inicia
var cont = 0;

//criando vetor
var v = [];
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        v[i, j] = " ";
    }
}

function marcar(a) {
    var b01 = document.querySelector(".b01");
    var b02 = document.querySelector(".b02");
    var b03 = document.querySelector(".b03");

    var b04 = document.querySelector(".b04");
    var b05 = document.querySelector(".b05");
    var b06 = document.querySelector(".b06");

    var b07 = document.querySelector(".b07");
    var b08 = document.querySelector(".b08");
    var b09 = document.querySelector(".b09");

    cont += 1;
    //jogadas de numero impar
    if (cont % 2 != 0) {
        console.log("impar");
        if (a == 1) {
            b01.innerHTML = "O";
            //v[0, 0] = "O";
        } else if (a == 2) {
            b02.innerHTML = "O";
        } else if (a == 3) {
            b03.innerHTML = "O";
        } else if (a == 4) {
            b04.innerHTML = "O";
        } else if (a == 5) {
            b05.innerHTML = "O";
        } else if (a == 6) {
            b06.innerHTML = "O";
        } else if (a == 7) {
            b07.innerHTML = "O";
        } else if (a == 8) {
            b08.innerHTML = "O";
        } else if (a == 9) {
            b09.innerHTML = "O";
        }
    }
    //jogadas de numero par
    else if (cont % 2 == 0) {
        console.log("par");
        if (a == 1) {
            b01.innerHTML = "X";
        } else if (a == 2) {
            b02.innerHTML = "X";
        } else if (a == 3) {
            b03.innerHTML = "X";
        } else if (a == 4) {
            b04.innerHTML = "X";
        } else if (a == 5) {
            b05.innerHTML = "X";
        } else if (a == 6) {
            b06.innerHTML = "X";
        } else if (a == 7) {
            b07.innerHTML = "X";
        } else if (a == 8) {
            b08.innerHTML = "X";
        } else if (a == 9) {
            b09.innerHTML = "X";
        }
    }

    /**
    v[0, 0] = b01.innerHTML;
    v[0, 1] = b02.innerHTML;
    v[0, 2] = b03.innerHTML;

    v[1, 0] = b04.innerHTML;
    v[1, 1] = b05.innerHTML;
    v[1, 2] = b06.innerHTML;

    v[2, 0] = b07.innerHTML;
    v[2, 1] = b08.innerHTML;
    v[2, 2] = b09.innerHTML;
     */

    //console.log(v[0, 0]);

    for (var i = 0; i < 3; i++) {
        console.log(v[i, 0], v[i, 1], v[i, 2]);
    }

}



