const urlServer = "http://localhost:3001";

const button = document.querySelector(".button-forms");
button.addEventListener("click", enviar);


function enviar() {
    const inputNome = document.querySelector("#nome").value;
    fetch(urlServer + `/portfolio?nome=${inputNome}`)
        .then(res => res.text())
        .then(resJson => console.log(resJson));
}

// function enviar() {
//     fetch(urlServer)
//         .then(res => res.text())
//         .then(resJson => console.log(resJson));
// }