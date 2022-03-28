const urlServer = 'http://localhost:3000';

const resposta = document.querySelector('.response');

const button = document.querySelector('.req-button');
button.addEventListener('click', comprimento);

const buttonRandomNum = document.querySelector('.req-random-num');
buttonRandomNum.addEventListener('click', randomNum);

function comprimento() {
    fetch(urlServer)
        .then(res => res.text())
        .then(res => {
            console.log(res);
            resposta.innerHTML = res;
        });
}

function randomNum() {
    fetch(`${urlServer}/random-num`)
        .then(res => res.text())
        .then(res => {
            console.log(res);
            const resNum = parseInt(res);


        });
}
