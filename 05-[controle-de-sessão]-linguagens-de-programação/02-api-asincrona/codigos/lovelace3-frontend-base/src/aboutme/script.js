async function request() {
    const personagem = await fetch('https://rickandmortyapi.com/api/character/1');
    const personagemJSON = await personagem.json();
    const personagemTEXT = JSON.stringify(personagemJSON);


    const nome = personagemJSON.name;
    console.log(nome);


    const nomeUnico = nome.split(' ');
    const nomeUnico1 = nomeUnico[0];
    console.log(nomeUnico1);

    const pesquisarPorNome = await fetch(`https://rickandmortyapi.com/api/character/?name=${nomeUnico1}`);
    // const pesquisaTEXT = await pesquisarPorNome.text();
    const pesquisaJSON = await pesquisarPorNome.json();
    // console.log(pesquisaTEXT);
    console.log(pesquisaJSON);


    // colocar no HTML
    const tabela = document.querySelector('.tabela-result');
    const nomePesquisado = document.querySelector('.nome-pesquisa');
    nomePesquisado.innerHTML = `${nomeUnico1}`;

    pesquisaJSON.results.map((elem) => {
        // talvez colocar o th's
        tabela.innerHTML += `<tr> <td>${elem.id}</td> <td>${elem.name}</td> <td>${elem.status}</td> <td>${elem.species}</td> </tr>`
    });


}
request();

