class AreaQuadrado {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.calcularArea();
    }

    calcularArea() {
        return this.altura * this.largura;
    }
}

const quadrado = new AreaQuadrado(10, 5);

console.log(quadrado.area);

// class Retangulo {
//     constructor(altura, largura) {
//       this.altura = altura; this.largura = largura;
//     }
//   //Getter
//     get area() {
//         return this.calculaArea()
//     }

//     calculaArea() {
//         return this.altura * this.largura;
//     }
// }

// const quadrado = new Retangulo(10, 10);

// console.log(quadrado.area);
