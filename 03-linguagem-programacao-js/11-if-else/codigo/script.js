function criarFicha() {
  //variaveis para capturar o que o usuario pediu
  const paoEscolhido = parseInt(document.querySelector("input[name='pao-escolhido']:checked").value);
  const hamburguerEscolhido = parseInt(document.querySelector("input[name='hamburguer-escolhido']:checked").value);
  const saladaEscolhido = parseInt(document.querySelector("input[name='salada-escolhido']:checked").value);
  const queijoEscolhido = parseInt(document.querySelector("input[name='queijo-escolhido']:checked").value);

  //variaveis para preencher a ficha do usuario, com o seu pedido selecionado
  let ficha = document.querySelector(".ficha");
  let fichaTitulo = document.querySelector(".ficha-titulo");
  let fichaPao = document.querySelector(".ficha-pao");
  let fichaHamburguer = document.querySelector(".ficha-hamburguer");
  let fichaSalada = document.querySelector(".ficha-salada");
  let fichaQueijo = document.querySelector(".ficha-queijo");

  //testar importação das variaveis com console.log
  console.log(paoEscolhido);
  console.log(hamburguerEscolhido);
  console.log(saladaEscolhido);
  console.log(queijoEscolhido);

  //testando variaveis que iram preencher a ficha
  console.log(fichaTitulo);
  console.log(fichaPao);
  console.log(fichaHamburguer);
  console.log(fichaSalada);
  console.log(fichaQueijo);

  //preenchendo os campos basicos da ficha: titulo, pao, hamburguer, salada, queijo
  //estilização da ficha, de todo o container
  ficha.style.backgroundColor = "rgba(0,0,0,0.8)";
  ficha.style.border = "2px solid #EBB00C";
  ficha.style.borderRadius = "10px";

  //campos basicos da ficha
  fichaTitulo.innerHTML = "Ficha do Pedido:";
  fichaPao.innerHTML = "Pão: ";
  fichaHamburguer.innerHTML = "Hambúrguer: ";
  fichaSalada.innerHTML = "Salada: ";
  fichaQueijo.innerHTML = "Queijo: ";



  //trabalho logico, pegando o value das variaveis, depois preenchendo a ficha usando innerHTML
  if (paoEscolhido == 1) {
    console.log('frances');
    fichaPao.innerHTML = "Pão Francês";
  } else if (paoEscolhido == 2) {
    console.log("australiano");
    fichaPao.innerHTML = "Pão Australiano";
  } else {
    console.log("briochi");
    fichaPao.innerHTML = "Pão Brioche";
  }

  if (hamburguerEscolhido == 1) {
    console.log('picanha');
    fichaHamburguer.innerHTML = "Hambúrguer Sabor Picanha";
  } else if (hamburguerEscolhido == 2) {
    console.log("costela ");
    fichaHamburguer.innerHTML = "Hambúrguer Sabor Costela";
  } else {
    console.log("vegano ");
    fichaHamburguer.innerHTML = "Hambúrguer Sabor Vegano";
  }

  if (saladaEscolhido == 1) {
    console.log('alface');
    fichaSalada.innerHTML = "Salada de Alface";
  } else if (saladaEscolhido == 2) {
    console.log("tomate");
    fichaSalada.innerHTML = "Salada de Tomate";
  } else {
    console.log("sem salada ");
    fichaSalada.innerHTML = "Sem Salada";
  }

  if (queijoEscolhido == 1) {
    console.log('mussarela');
    fichaQueijo.innerHTML = "Queijo Mussarela";
  } else if (queijoEscolhido == 2) {
    console.log("prato");
    fichaQueijo.innerHTML = "Queijo Prato";
  } else {
    console.log("cheddar");
    fichaQueijo.innerHTML = "Queijo Cheddar";
  }



}
