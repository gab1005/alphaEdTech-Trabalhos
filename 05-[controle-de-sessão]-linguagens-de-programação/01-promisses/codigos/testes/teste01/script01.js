// poderia ser qualquer nome.
// https://dio.dev/usando-promises-com-fetch-no-javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('mundo!');
    }, 300)
});

promise.then(r => {
    console.log(r);
});

console.log('Olá,');