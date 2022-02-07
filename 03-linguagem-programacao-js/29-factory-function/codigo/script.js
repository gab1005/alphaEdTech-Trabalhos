const v1 = 1;
const v2 = 2;
const operacao = "+";

const dog = () => {
    const sound = "woof";

    return {
        talk: () => console.log(sound)
    }
};
// const teste = dog();
// teste.talk(); // = dog().talk();
const cat = () => {
    const som = "miau";

    return {
        apertar: (vezes) => {
            return `o gato  foi apertado ${vezes} vezes, e fez ${som}`;
        }
    }
};

const newCat = cat();
console.log(newCat.apertar(5));
