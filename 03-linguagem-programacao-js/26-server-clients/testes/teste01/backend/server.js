const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");

const configCors = {
    origin: "*",
    credential: true,
    optionSuccessStatus: 200,
};

app.use(cors(configCors));

app.get("/", (req, res) => {
    res.send(funcionarios);
});

app.listen(8080, () => {
    console.log("está rodando em http://localhost:8080");
});

const funcionarios = [
    {
        "matricula": 1,
        "nome": "bruna",
        "ramal": "telefonico",
        "email": "bruna@gmail.com",
        "setor": "servidores",
        "nascimento": "10/08/1990"

    },
    {
        "matricula": 2,
        "nome": "pedro",
        "ramal": "publicitario",
        "email": "pedro@gmail.com",
        "setor": "designer",
        "nascimento": "26/01/2001"

    },
    {
        "matricula": 3,
        "nome": "maria",
        "ramal": "desenvolvimento mobail",
        "email": "maria@gmail.com",
        "setor": "frontend",
        "nascimento": "14/10/1992"

    }
];
