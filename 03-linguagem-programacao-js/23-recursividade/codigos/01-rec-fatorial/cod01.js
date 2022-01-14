const fatorial = (_num) => {
    let num = _num;
    //#parar o codigo quando num = 1;
    if (num === 1) {
        return 1;
    }
    return num * fatorial(num - 1);
}
console.log(fatorial(5));