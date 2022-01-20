const urlServer = "http://localhost:3000";

const button = document.querySelector(".button-request");
button.addEventListener("click", getData);

function getData() {
    fetch(urlServer)
        .then(data => data.text())
        .then(post => console.log(post));
}
