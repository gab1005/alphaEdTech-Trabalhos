"use strict";
// // string, boolean, number.
// let x: number = 10;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// x = 20;
// console.log(x);
// // inferencia x annotation:
// // inferencia
// let y = 12;
// //y = "teste";
// // annotation
// let z: number = 12;
// // tipos basicos:
// let firstName: string = "gabriel";
// let age: number = 25;
// const isAdmir: boolean = true;
// // String != string
// console.log(typeof firstName);
// // object
// const myNumber: number[] = [1, 2, 3];
// console.log(myNumber);
// console.log(myNumber.length);
// console.log(typeof myNumber);
// // console.log(myNumber.parseFloat()); erro
// // console.log(myNumber.toUpperCase(); erro)
// // tuplas
// let myTurple: [number, string, string[]];
// myTurple = [5, "gabriel", ["banana", "maça"]];
// // object literals {prop: value}
// const user: { name: string; age: number } = {
//   name: "gabriel",
//   age: 25,
// };
// console.log(user);
// // user.job = "programador"; erro
// // any
// let a: any = 0;
// a = "teste";
// a = false;
// a = [];
// // union type
// let id: string | number = "10";
// id = 200;
// // type alias
// type myType = number | boolean | string | number[];
// const userId: myType = 10;
// const productId: myType = "00001";
// const shirId: myType = false;
// // enum
// // tamanho de roupas (size: médio, size: pequeno)
// enum Size {
//   P = "Pequeno",
//   M = "Médio",
//   G = "Grande",
// }
// const camisa = {
//   name: "Camisa gola V",
//   size: Size.G,
// };
// console.log(camisa);
// // literal types
// let teste: "algum valor" | null;
// teste = null;
// teste = "algum valor";
// // funcoes
// function sum(a: number, b: number) {
//   return a + b;
// }
// console.log(sum(10, 5));
// // console.log(sum(10 + "5")); erro
// function sayHelloTo(name: string): string {
//   // return "olar"; da certo
//   return `olar ${name}`;
//   // return false; erro
// }
// console.log(sayHelloTo("gabriel"));
// // função que retorna nada:
// function logger(msg: string): void {
//   console.log(msg);
// }
// logger("teste");
// // parametro não obrigatorio, coloocar ? no final dele
// function greeting(name: string, greet?: string): void {
//   // console.log(`Olá ${greet} ${name}`);  // possivel erro, caso não sejá passado greet.
//   if (greet) {
//     console.log(`Òlá ${greet} ${name}`);
//     return;
//   }
//   console.log(`Olá ${name}`);
// }
// greeting("José");
// greeting("Pedro", "Sir");
// // interfaces
// interface MathFunctionParams {
//   n1: number;
//   n2: number;
// }
// function somaqq(num: MathFunctionParams): number {
//   return num.n1 + num.n2;
// }
// const resultadoSoma = somaqq({ n1: 6, n2: 4 });
// console.log(resultadoSoma);
// function multqq(nums: MathFunctionParams): number {
//   return nums.n1 * nums.n2;
// }
// const resulMult = multqq({ n1: 3, n2: 8 });
// console.log(resulMult);
// // tambem pode ser usado em variaveis, que podem ser usadas facilmente em calculos
// const obgNumber: MathFunctionParams = {
//   n1: 10,
//   n2: 5,
// };
// console.log(somaqq(obgNumber));
// console.log(multqq(obgNumber));
// // narrowing: foi feita com o greet acima e abaixo foi feito por meio do typeof
// // checagem de tipos: basicamente fazer checagens lógicas nas variáveis.
// function doSomething(info: number | boolean): void {
//   if (typeof info === "number") {
//     console.log(`o numero é ${info}`);
//     return;
//   }
//   console.log(`o valor é ${info}`);
// }
// doSomething(5);
// doSomething(false);
// // generics: muito útil quando se quer usar array, mas não se sabe ainda quais valores serão passados para ele
// function showArrayItems<T>(arr: T[]): void {
//   arr.forEach((item) => {
//     console.log(`ITEM: ${item}`);
//   });
// }
// const a1 = [1, 2, 3];
// const a2 = ["1", "2", "3"];
// showArrayItems(a1);
// showArrayItems(a2);
// // OBS: ANOTAÇÕES MINHAS
// // não muito bom, pois os atributos ficam sem tipagem, melhor usar o modo que está no começo deste documento.
// const obgMy: object = {
//   nome: "gabriel",
//   age: 25,
//   job: true,
//   skills: {
//     html: true,
//     css: true,
//     js: true,
//     desing: false,
//   },
// };
// let obgLiterals: {
//   nome: "gabriel";
//   age: 25;
//   job: true;
//   skills: {
//     html: true;
//     css: true;
//     js: true;
//     desing: false;
//   };
// };
/////////////////
// classes
// obs: pode-se tipar as variáveis no constructor.
class User {
    constructor(isName, role, isApproved) {
        this.isName = isName;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`o nome do usuario é ${this.isName}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`o usuario é ${this.role}`);
            return;
        }
        console.log("num vai saber!");
    }
}
const zeca = new User("marcos", "adm2", false);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("chetrole", 5);
console.log(`brand = ${fusca.brand}, wheels = ${fusca.wheels}`);
fusca.showBrand();
// heranca
// obs: não precisa aplicar a interface aqui, pois já está aplicada na classe pai.
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        // permite "puchar" as variavies da classe pai
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("audi", 4, 2.0);
console.log(a4);
a4.showBrand();
// decoration
// constructor decoration
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParamters()
], Person);
const sam = new Person("Sam");
console.log(sam);
