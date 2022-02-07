// calculadoura com switch padrão.
$(".botao-calcular").on("click", calculo);

class Calculadoura {
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }

    public  int resultado;

    switch(operacao) {
        case "+":
        resultado = n1 + n2;
        break;
        case "-":
        resultado = n1 - n2;
        break;
        case "*":
        resultado = n1 * n2;
        break;
        case "/":
        resultado = n1 / n2;
        break;
        default:
        "erro";
}

    get resultado(res){
    return res;
}

}

function calculo() {
    const n1 = parseFloat($(".n1").val(), 10);
    const n2 = parseFloat($(".n2").val(), 10);
    const operacao = $(".oper").val();
    let resultado = 0;

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;
        default:
            "erro";
    }

    return console.log(resultado);

}