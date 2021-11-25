const imgSabor = document.querySelector(".sabor-img");
const imgAtendimento = document.querySelector(".atendimento-img");
const imgPreco = document.querySelector(".preco-img");

const images = function () {
  imgSabor.src = "./public/images/sabor-comida.png";
  imgAtendimento.src = "./public/images/atendimento.png"
  imgPreco.src = "./public/images/preco-carteira.png";
}

images();

function enviar() {
  const sabor = document.querySelector("#sabor");
  const atendimento = document.querySelector("#atendimento");
  const preco = document.querySelector("#preco");

  let vaSabor = sabor.value;
  let vaAtendimento = atendimento.value;
  let vaPreco = preco.value;

  console.log(sabor.value, atendimento.value, preco.value);

  let resultado = document.querySelector(".resultado-pesquisa");
  let reSabor = document.querySelector(".re-sabor");
  let reAtendimento = document.querySelector(".re-atendimento");
  let rePreco = document.querySelector(".re-preco");


  resultado.innerHTML = "Satisfação com nosso serviço de 1 a 5:"
  reSabor.innerHTML = `sabor: ${vaSabor}`;
  reAtendimento.innerHTML = `atendimento: ${vaAtendimento}`;
  rePreco.innerHTML = `preço: ${vaPreco}`;
}



