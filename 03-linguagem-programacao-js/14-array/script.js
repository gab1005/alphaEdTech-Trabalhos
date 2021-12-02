let vetor = [];

function armazenar() {
    const entrada01 = document.querySelector(".entrada01").value;
    const entrada02 = document.querySelector(".entrada02").value;
    const entrada03 = document.querySelector(".entrada03").value;
    const entrada04 = document.querySelector(".entrada04").value;

    vetor = [parseInt(entrada01), parseInt(entrada02), parseInt(entrada03), parseInt(entrada04)];
    console.log(vetor);
}

function inverter() {
    let a = vetor[0];
    let b = vetor[1];
    let c = vetor[2];
    let d = vetor[3];

    vetor[0] = d;
    vetor[1] = c;
    vetor[2] = b;
    vetor[3] = a;

    console.log(vetor);

    /**
     *     
     * vetor[0] = a;
        vetor[1] = b;
        vetor[2] = c;
        vetor[3] = d;
     */
}

function ordenar() {
    console.log(vetor);
    console.log(vetor.length);
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < (vetor.length - i) - 1;) {
            if (vetor[j] > vetor[j + 1]) {
                let temporario = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = temporario;
            }
        }
    }
}