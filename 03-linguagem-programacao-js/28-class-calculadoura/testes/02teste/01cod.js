//trabalhar com um objeto primeiro.
const Livro = {
    "nome": "React Native",
    "editora": "Casa do Código",
    "paginas": 185,
    anunciar: function () {
        console.log(`A Alura indica o livro ${this.nome} da editara ${this.editora}`);
    }
}

// console.log(Livro.nome);
// Livro.anunciar();

//OBS: ate o ES6 não tinha classe, para "criar" uma usava-se função.
const Livro02 = function (nome, editora, paginas) {
    const gNome = nome;
    const gEditora = editora;
    const gPaginas = paginas;

    this.getNome = function () {
        return gNome;
    }

    this.getEditora = function () {
        return gEditora;
    }

    this.getPaginas = function () {
        return gPaginas;
    }
}

const livro = new Livro02("GraphQl", "Casa do Código", 143);
// console.log(livro.getNome());
// console.log(livro.getEditora());
// console.log(livro.getPaginas());

//prototype
const nome = "Alura";
const temp = new String(nome);
// console.log(temp.toString());