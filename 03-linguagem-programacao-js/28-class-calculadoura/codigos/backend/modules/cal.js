module.exports = Calculadoura;

class Calculadoura {
    //valores com que a classe é iniciado.
    constructor(operand1, operand2, operation) {
        this.op1 = parseInt(operand1);
        this.op2 = parseInt(operand2);
        this.op = String(operation);
    }

    //valores futuros que podem ser associados.
    set operand1(operand1) {
        this.op1 = operand1;
    }

    set operand2(operand2) {
        this.op2 = operand2;
    }

    set operand(operand) {
        this.op = operand;
    }

    soma() {
        const res = this.op1 + this.op2;
        this.limparCalcularouda();
        return res;
    }
    subtracao() {
        const res = this.op1 - this.op2;
        this.limparCalcularouda();
        return res;
    }
    multiplicacao() {
        const res = this.op1 * this.op2;
        this.limparCalcularouda();
        return res;
    }
    divisao() {
        const res = this.op1 / this.op2;
        this.limparCalcularouda();
        return res;
    }

    get result() {
        switch (this.op) {
            case "+":
                return this.soma();
            case "-":
                return this.subtracao();
            case "*":
                return this.multiplicacao();
            case "/":
                return this.divisao();
            default:
                return "erro, tente novamente";
        }
    }

    limparCalcularouda() {
        this.op1 = 0;
        this.op2 = 0;
        this.op = "+"
    }
}

// const cal01 = new Calculadoura(50, 40, "123");
// console.log(cal01.result);
