async function runmycode() {
    const promisse = new Promise((response, reject) => {
        setTimeout(() => {
            response('mundo!');
        }, 300);
    });

    // o await informa para a função ESPERAR a execução desse bloco, logo a resposta de siada no console, fica:
    // mundo!
    // olá
    await promisse.then((res) => {
        console.log(res)
    });

    console.log('olá');
}
runmycode();