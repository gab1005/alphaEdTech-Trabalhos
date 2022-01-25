const urlServer = "http://localhost:3000";

const buttonOi = document.querySelector(".button-oi");
buttonOi.addEventListener("click", getOi);

const buttonAniversario = document.querySelector(".button-aniversario");

buttonAniversario.addEventListener("click", getAniversario);

const buttonSetor = document.querySelector(".button-setor");
buttonSetor.addEventListener("click", getSetor);

const buttonRamo = document.querySelector(".button-ramo");
buttonRamo.addEventListener("click", getRamo);

function getOi() {
    fetch(urlServer)
        .then(data => data.text())
        .then(post => console.log(post));
}

function getAniversario() {
    //codigo
    console.log("funcao aniversario");

    const inputAniversarioBruto = document.querySelector(".input-aniversario").value;
    const inputAniversario = parseInt(inputAniversarioBruto);

    if (inputAniversario < 1 || inputAniversario > 12) {
        alert("digite um numero entre 1 e 12");
        console.log("erro na digitação");
        return false;
    } else {
        fetch(urlServer + `/aniversarioGrupo?mes=${inputAniversario}`)
            .then(res => res.json())
            .then(resJson => {
                console.log("resposta do servidor");
                console.log(resJson);
            });
    }
}

function getSetor() {
    //codigo
    console.log("funcao setor");
}

function getRamo() {
    //codigo
    console.log("funcao ramo");
}
