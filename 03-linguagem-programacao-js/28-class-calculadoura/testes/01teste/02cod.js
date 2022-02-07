class Pessoa {
    constructor(nome) {
        this._nome = nome;
    }

    set nome(string) {
        this._nome = this._adicionarTexto(string);
    }

    get nome() {
        return this._nome;
    }

    _adicionarTexto(string) {
        return `${string}, texto adicionado`;
    }

    andar() {
        return `${this._nome} esta andando`;
    }
}

const pessoa = new Pessoa('Gabriel');

//atribuo valor no set
pessoa.nome = "douglas";
console.log(pessoa._nome);
//executo função
console.log(pessoa.andar());
//get nome
console.log(pessoa.nome);
