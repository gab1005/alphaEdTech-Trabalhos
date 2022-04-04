const port = 3000;
const express = require('express');
const app = express();
const cors = require('cors');

const configCors = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(configCors));

// resposta padão para testar o back
app.get('/', (req, res) => {
    res.send('funcionou!');
});

// settimeout random
app.get('/random-num', (req, res) => {
    const num = parseInt(Math.random() * 6);

    // demora um valor aleatorio entre 0 e 5 para enviar a requisição
    setTimeout(() => {
        res.send(num.toString());
    }, num);
});

app.listen(port, () => {
    console.log('ouvindo na porta ' + port);
});
