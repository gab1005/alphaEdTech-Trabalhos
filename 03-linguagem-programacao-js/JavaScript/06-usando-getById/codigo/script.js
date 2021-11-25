//document.getElementById(id).innerHTML = new HTML
//document.getElementById(id).attribute = new value
//document.write()

document.getElementById("profile-picture").src = "./public/user/profile-picture.png";


document.getElementById("name-user").innerHTML = "Gabriel de Sousa";

document.getElementById("state").innerHTML = "Fortaleza - CE";

//document.getElementById("image-hobby").src = "./public/hobby/background.png";

document.getElementById("container").style.backgroundImage = "url(./public/hobby/background.png)"


document.getElementById("title-hobby").innerHTML = "League of Legends";

document.getElementById("description-hobby").innerHTML = "league of legends é um jogo MOBA; Multiplayer online battle arena (ou numa tradução direta, batalha arena de multijogadores em linha); o qual possui vários mapas para serem jogados, sendo o mais famoso o mapa de summoner's rift, onde dois time de 5 jogadores cada se enfrentam com objetivo de destruir a base inimiga.";


document.getElementById("link-reference").innerHTML = "clique aqui para mais informações";

var texto = document.querySelector("#teste01");


var imprimir = texto.value;

console.log(imprimir);