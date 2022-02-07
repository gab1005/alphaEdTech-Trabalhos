class Livro {
    constructor(nome, editora, paginas) {
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas;
    }

    anunciarTitulo() {
        console.log(`Título: ${this.nome}`);
    }

    descreverTitulo() {
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`);
    }
}

const livroQualquer = new Livro("Show de Bola", "Só Coisa Boa", 200);
// livroQualquer.anunciarTitulo();
// livroQualquer.descreverTitulo();

const NodeJS = new Livro("NodeJS", "Casa do Código", 195);
// NodeJS.anunciarTitulo();
// NodeJS.descreverTitulo();

//verificando o tipo de dado da classe.
// console.log(typeof (Livro)); //retorna: function

/**
OBS: alguns dizem que classes em JS são "açúcar sintático",
já que são praticamente funções, mas existem diferenças, como:

-classes não são hoisted
-é consenço que o código fica mais legivel quadno escriot em classes
-facilita adaptação de outros usuarios quem vem de outras linguagens.
 */

//Herança:
class LivroColecao extends Livro {
    cosntructor(nome, nomeColecao) {
        super(nome);
        this.nomeColecao = nomeColecao;
    }

    descreverColecao() {
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a programar");

LogicaDeProgramacao.descreverColecao();
