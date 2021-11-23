//header | falar sobre especie
const headerTitulo = document.querySelector(".species-container h1");
const speciesImg = document.querySelector(".species-img");
const speciesText = document.querySelector(".species-text");

function fillHeader() {
  headerTitulo.innerHTML = "Castor";
  speciesImg.src = "public/animal/castor-filhote-fofo.png";
  speciesText.innerHTML = "existem basicamente duas espécies de castor: castor americano e o europeu, sua diferença se é muito pequena, e apenas especialistas conseguem distinguir, a diferença é dada pelo numero de cromossomos de cada um, o americano possui 40 e o europeu 48, curiosidades sobre esse animal é que ele é o animal símbolo do canada e foi de grande importância para a colonização americana, já que sua pele tinha grande valor comercial na época; também é o segundo maior roedor do mundo, perdendo apenas para a capivara e é o roedor mais esperto.
  ";
}
fillHeader();
//##########################################
//main .habitat-container | falar sobre habitat
const habitatImg = document.querySelector(".habitat-img");
const habitatText = document.querySelector(".habitat-text");

function fillHabitat() {
  habitatImg.src = "./public/habitat/represa-feita-por-castor.png";
  habitatText.innerHTML = "O  castor passa boa parte de sua vida na agua, são conhecidos por construírem represas, eles o fazem para poder passar o inverno rigoroso, nessas represas naturais eles estocam comida e agua, e conseguem ficar a salvo  de predadores, já que seu predadores (coiotes, ursos) não vão tão longe para perturbá-los; o intrigante sobre eles é que ficando apensa atrás do ser humano, o castor é o animal que mais modifica seu ambiente em seu beneficio podendo construir represas de  1,5 m de altura e mais de 100 m de comprimento, além de 1,8 m de profundidade. Porém é valido lembrar que em certos casos podem prejudicar o ecossistema que vivem, já que caso a população de castor cresça muito, eles conseguem derrubar muitas arvores para a construção de sua barragem (e como eles derrubam arvores pelo tronco, não existe chance de recuperação para a mesma) e as barragens tem como impacto deixar as aguas do rio paradas, o que gera acumulo de bactérias e prejudica a flora e fauna do lago.";
}
fillHabitat();
//##################################################
//main .description-container | falar sobre descrição
const descriptionImg = document.querySelector(".description-img");
const descriptionText = document.querySelector(".description-text");
const descriptionTextReference = document.querySelector(".description-text-reference");

function fillDescription() {
  descriptionImg.src = "./public/habitat/arvores-ruida-por-castor.png";

  descriptionText.innerHTML = "Motivo pelo qual escolhi o castor é que a perseverança é uma marca muito forte desse animal, e eu tento ser resiliente em relação a vida o texto a seguir exemplifica bem 'O castor constrói barragens e diques no rio com ramos e lama. Ele sabe que o fluxo do rio é permanente e que em muitos casos o resultado do seu trabalho será afetado pela ação da água que lavará os materiais com os quais construiu o mesmo. Mas, isso não o impede de ir em frente com isto. O castor está, portanto, num duelo contínuo contra o rio, um rio que nunca para, por isso é fácil compreender o simbolismo que o relaciona com a perseverança.' "

  descriptionTextReference.href = "https://www.lefrontal.com/pt/animais-simbolizam-constancia-e-perseveranca";
  descriptionTextReference.target = "_blank";
  descriptionTextReference.innerHTML = "referencia";
}
fillDescription();

//#################################################
//footer .references-container | falar sobre referencias
const referenceImg = document.querySelector(".reference-img");
const referenceText = document.querySelector(".reference-text");

const a = document.querySelector(".references-container a");
a.target = "_blank";

const referenceLink01 = document.querySelector(".reference-link01");
const referenceLink02 = document.querySelector(".reference-link02");
const referenceLink03 = document.querySelector(".reference-link03");
const referenceLink04 = document.querySelector(".reference-link04");
const referenceLink05 = document.querySelector(".reference-link05");

function fillReferences() {
  referenceImg.src = "./public/animal/castor-animado.png";
  referenceText.innerHTML = "obrigado por ler, referencias:";

  referenceLink01.target = "_blank";
  referenceLink01.innerHTML = "animais.hi7.co";
  referenceLink01.href = "http://animais.hi7.co/castor--saiba-como-se-reproduz--se-alimenta---suas-caracteristicas--as-classificacoes---o-comportamento-e-o-habitat-natural-deste-roedor-voraz--57a979f558da3.html";

  referenceLink02.target = "_blank";
  referenceLink02.innerHTML = "lefrontal.com";
  referenceLink02.href = "https://www.lefrontal.com/pt/animais-simbolizam-constancia-e-perseveranca";

  referenceLink03.target = "_blank";
  referenceLink03.innerHTML = "tricurioso.com";
  referenceLink03.href = "https://www.tricurioso.com/2019/04/16/por-que-os-castores-constroem-represas/";

  referenceLink04.target = "_blank";
  referenceLink04.innerHTML = "castores vs arvores";
  referenceLink04.href = "https://www.youtube.com/watch?v=zyrH47q_tNI";

  referenceLink05.target = "_blank";
  referenceLink05.innerHTML = "maior represa de castores, com 900m";
  referenceLink05.href = "https://www.youtube.com/watch?v=ozTVL0MsxIw";
}
fillReferences();