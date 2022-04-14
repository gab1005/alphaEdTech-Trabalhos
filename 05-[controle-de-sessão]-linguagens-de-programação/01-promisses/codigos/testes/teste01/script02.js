/**
 * Criamos nossa função assíncrona com a
 * palavra-chave async no começo dela
 */

async function runMyCode() {
    /**
     * Dentro dela eu crio uma promise para
     * executar alguma coisa que preciso
     */
    const promise = new Promise((resolve, reject) => {
        /**
         * Adicionando setTimeout para
         * exemplificar o tempo que uma promise
         * demoraria para responder
         */
        setTimeout(() => {
            /**
             * Respondendo o que a promise gostaria
             */
            resolve('mundo!');
        }, 300);
    });


    /**
     * Usando a palavra-chave await, podemos
     * falar para função: espere até essa
     * promise responder para responder,
     * tornando-a síncrona (não paralela)
     */
    await promise.then(response => {
        console.log(response);
    });

    /**
     * Executando outro comando para mostrar
     * o fim do código assíncrono
     */
    console.log('Olá,');
}

runMyCode();
  /**
* Executando a função async, dentro dela
* utilizando o await irá retonar:
* mundo!
* Olá,
* 
* O oposto do teste anterior porque pedimos
* para a promise aguardar sua finalização
*/