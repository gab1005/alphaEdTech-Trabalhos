const express = require('express');
const app = express();
const idProdutos = [
    {
        "id": 1,
        "nomeProduto": "produto de id=1"
    },
    {
        "id": 2,
        "nomeProduto": "produto de id=2"
    },
    {
        "id": 3,
        "nomeProduto": "produto de id=3"
    },
    {
        "id": 4,
        "nomeProduto": "produto de id=4"
    },
    {
        "id": 5,
        "nomeProduto": "produto de id=5"
    },
    {
        "id": 6,
        "nomeProduto": "produto de id=6"
    }
];

app.get('/', function (req, res) {
    const id = req.query.id;
    if (!(id)) {
        res.json(idProdutos);
    };
    for (i = 0; i < idProdutos.length; i++) {
        if (id == idProdutos[i].id) {
            res.json(idProdutos[i]);
        };
    };

    res.json([]);
});

const hostname = "127.0.0.1";
const port = 8080;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});



/**
const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
 */

/**
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
 */