const url = "http://localhost:8080/";

let trElement = document.createElement("tr");
let thElement = document.createElement("th");
let tdElement = document.createElement("td");
let trElement02 = document.createElement("tr");

let tabelaResposta = document.querySelector("#tabela-resposta");

function enviar() {
    const id = document.querySelector("#id-input").value;
    //
    fetch(url + id)
        .then(response => response.text())
        .then(data => {
            const client = JSON.parse(data)
            tabelaResposta.innerHTML = "";

            client.forEach(element => {
                tabelaResposta.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td><td>${element.email}</td></tr>`
            });
        })
        .catch(err => console.log(err))
}


//

// fetch(url + id)
//     .then(res => res.json())
//     .then(resText => {
//         const resposta = JSON.parse(resText)
//         if (id == "") {
//             console.log(typeof (id));
//             console.log("erro, numero não digitado");
//             console.log(resposta);
//         } else {
//             //resposta = resposta[id];

//             // trElement.innerHTML = "";
//             // trElement.innerHTML = "<th>Id</id><th>Nome</th><th>Email</th>";

//             // trElement02 = "";
//             // trElement02.innerHTML = `<td>${resposta.id}</td> <td>${resposta.name}</td> <td>${resposta.email}</td>`;

//             // tabelaResposta.appendChild(trElement);
//             // tabelaResposta.appendChild(trElement02);
//             console.log(`elementos do resposta:${resposta.id}, ${resposta.name}, ${resposta.email}`);

//         }
//     });
//}

