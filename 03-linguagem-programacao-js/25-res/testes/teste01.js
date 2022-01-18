//funcção simples que recebe infinitos parametros.
//pelo o que eu entendi o arr vira um array, q pode ter n elementos de qualquer tipo
function teste01(...arr) {
    console.log(arr);
}



//######################
//função usando "for" que retorna um array com "n" elementos.
function multElem(_min, _max, _quantity) {
    const min = _min;
    const max = _max;
    const quantity = _quantity;
    let vectorRandom = [];

    for (let i = 0; i < quantity; i++) {
        let randomNumber = Math.random() * (max - min) + min;
        randomNumber = parseInt(randomNumber);
        vectorRandom.push(randomNumber);
    }

    return console.log(vectorRandom);
}
multElem(1, 1000, 100);



//#################
//função recursiva que cria um array de n (_quantity) elementos
//não  rodou
function multElemRec(_min, _max, _quantity) {
    const min = _min;
    const max = _max;
    let quantity = _quantity;
    let vectorRandom = [];

    if (quantity === 0) {
        return 0;
    }
    let randomNumber = Math.random() * (max - min) + min;
    randomNumber = parseInt(randomNumber);
    // console.log(randomNumber);
    quantity = quantity - 1;
    let nextNumber = multElemRec(min, max, quantity);
    return nextNumber;
}
