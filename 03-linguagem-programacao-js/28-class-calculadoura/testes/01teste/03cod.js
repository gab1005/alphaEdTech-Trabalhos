class Pessoa {
    constructor(nome) {
        this._nome = this._adicionarTexto(nome);
    }

    set nome(string) {
        this._nome = this._adicionarTexto(string);
    }

    get nome() {
        return this._nome;
    }

    _adicionarTexto(string) {
        return `${string}, MODIFICADO`;
    }

    andar() {
        return `${this._nome} esta andando`;
    }
}

class Desenvolvedor extends Pessoa {
    constructor(nome, linguagem) {
        //pega o contructor do  pai.
        super(nome);
        //como é novo, tratamos a parte.
        this._linguagem = linguagem;
    }

    linguagem() {
        return `${this.nome} programa em ${this._linguagem}`;
    }
}

const pessoa = new Pessoa('Gabriel');
// console.log(pessoa.nome);

const developer = new Desenvolvedor('Thiago');
// console.log(developer.nome);

let funcionario01 = new Desenvolvedor("Gabriel", "JavaScript");
let funcionario02 = new Desenvolvedor("Thiago", "GO");

console.log(`${funcionario01.linguagem()} e ${funcionario02.linguagem()}`);
