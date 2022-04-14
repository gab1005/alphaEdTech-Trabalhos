import fetch from 'cross-fetch';
/**
 * Criando uma lista para armazenar promises
 */
const pokemons = [];

/**
 * Lista de itens que quero que retornem nas
 * promises.
 */
const neededPokemons = [1, 2, 3];

/**
 * Um loop nas requisições que quero para trazer
 * meus dados específicos. Nesse caso estou
 * querendo os Pokemons de Id 1, 2 e 3.
 */
for (let i = 0; i < neededPokemons.length; i++) {
    /**
     * Utilizo o método push para adicionar cada
     * array dentro da minha lista de promises.
     */
    pokemons.push(
        fetch(`https://pokeapi.co/api/v2/pokemon/${neededPokemons[i]}/`)
            /**
             * Chamo o método .then() e digo:
             * espero que todas as respostas sejam
             * json.
             */
            .then(res => res.json())
    );
}

/**
 * Espero a resolução de todas as promises
 * na ordem que as enviei (1, 2 e 3).
 * Isso significa que vai trazer esses pokemons
 * da lista na sua ordem.
 */
await Promise.all(pokemons);

/**
 * Após todas as promises serem resolvidas, o
 * código continua e agora ao invéz de termos
 * uma array de promises, temos uma array de
 * pokemons vindo de um recurso HTTP externo.
 */
console.log(pokemons);