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

app.get('/', (req, res) => {
    res.send('funcionou!');
});

app.get('/random-num', (req, res) => {
    const num = parseInt(Math.random() * 6);
    res.send(num.toString());
});

app.listen(port, () => {
    console.log('ouvindo na porta ' + port);
});
