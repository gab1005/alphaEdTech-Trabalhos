//aqui é feito a solicitação "fetch" para o backend.
//e tambem aqui se recebe os dados e os escreve no fronteend.
const url = "http://localhost:3003";

const botao = document.querySelector(".ativar");
botao.addEventListener('click', comprimento);

function teste() {
	console.log("esta funcioando o button!");
}



function comprimento() {
	//pegar valor do input
	const inputValue = document.querySelector(".entrada").value;

	fetch(url + "/comprimento:" + inputValue)
		.then(res => res.text())
		.then(resText => console.log(resText));

}
