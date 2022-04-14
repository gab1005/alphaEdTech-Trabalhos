import fetch from 'cross-fetch';
function fetchTimeout() {
    /**
     * Nossa requisição (que poderia ser um
     * parâmero na função acima, mas deixei
     * mais simples para exemplo)
     */
    const promise = fetch('https://pokeapi.co/api/v2/pokemon/1')

    const timeout = new Promise((_, reject) =>
        /**
         * Adicionamos um timeout para a promise
         * curtissimo, apenas para teste de cair
         * no erro. Se a promise acima não se
         * resolver em 10 milisegundos, nós
         * enviamos um erro porque não queremos
         * esperar mais do que isso.
         */
        setTimeout(() => reject(new Error('Timeout ganhou o "race" proposto ')), 10)
    );

    /**
     * Retornamos uma corrida de promises
     * com um array com nossas promises. A
     * que resolver primeiro será a ganhadora!
     */
    return Promise.race([
        promise,
        timeout
    ]);
}

/**
 * Chamo a função e utilizo o .catch() para
 * validar a resposta veio com o erro de
 * timeout que especificamos. 
 */
fetchTimeout()
    .then(res => res.json())
    .catch(err => console.log(err));