const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const configuracaoCors = { origin: false };

const produtos = [
    {
        "id": 1,
        "name": "produto de id=1"
    },
    {
        "id": 2,
        "name": "produto de  id=2"
    },
    {
        "id": 3,
        "name": "produto de id=3"
    },
    {
        "id": 3,
        "name": "produto de id=3 repetido"
    }
];

app.get("/", cors(configuracaoCors), (req, res) => {
    res.send(produtos);
});

app.get("/:id", (req, res) => {
    const idProduto = req.params.id;
    const response = produtos.filter(elem => elem.id == idProduto);
    res.send(response);
});

app.listen(8080);
