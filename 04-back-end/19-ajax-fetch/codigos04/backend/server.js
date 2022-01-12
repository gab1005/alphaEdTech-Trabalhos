const express = require("express");
const cors = require("cors");
const app = express();

//configuração do cors para permitir troca de informações em url's semelhantes
const configCors = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(configCors))

const produtos = [
    {
        "id": 1,
        "name": "primeiro produto"
    },
    {
        "id": 2,
        "name": "segundo produto"
    }
]

const Designs = [{
    "id": 1,
    "first_name": "Hulda",
    "last_name": "Banting",
    "age": 1,
    "experience": 1
}, {
    "id": 2,
    "first_name": "Ardenia",
    "last_name": "Ferrar",
    "age": 2,
    "experience": 2
}, {
    "id": 3,
    "first_name": "Korrie",
    "last_name": "Cripwell",
    "age": 3,
    "experience": 3
}, {
    "id": 4,
    "first_name": "Julietta",
    "last_name": "Danby",
    "age": 4,
    "experience": 4
}, {
    "id": 5,
    "first_name": "Hildagarde",
    "last_name": "Bosnell",
    "age": 5,
    "experience": 5
}]

const devFrontEnd = [
    {
        "id": 1,
        "first_name": "Sadye",
        "last_name": "Esby",
        "age": 1,
        "experience": 1
    }, {
        "id": 2,
        "first_name": "Flossi",
        "last_name": "Negri",
        "age": 2,
        "experience": 2
    }, {
        "id": 3,
        "first_name": "Babara",
        "last_name": "Hasluck",
        "age": 3,
        "experience": 3
    }, {
        "id": 4,
        "first_name": "Rudd",
        "last_name": "Bennallck",
        "age": 4,
        "experience": 4
    }, {
        "id": 5,
        "first_name": "Nataniel",
        "last_name": "Newtown",
        "age": 5,
        "experience": 5
    }]


const devBackEnd = [
    {
        "id": 1,
        "first_name": "Ulrick",
        "last_name": "Raymont",
        "age": 1,
        "experience": 1
    }, {
        "id": 2,
        "first_name": "Derry",
        "last_name": "Basey",
        "age": 2,
        "experience": 2
    }, {
        "id": 3,
        "first_name": "Bevvy",
        "last_name": "Dempster",
        "age": 3,
        "experience": 3
    }, {
        "id": 4,
        "first_name": "Amity",
        "last_name": "Hambatch",
        "age": 4,
        "experience": 4
    }, {
        "id": 5,
        "first_name": "Stafford",
        "last_name": "Mathe",
        "age": 5,
        "experience": 5
    }]

app.get("/", (req, res) => {
    res.send("pgaina principal esta funcionando");
});

//############################


app.get("/:inputId", (req, res) => {
    res.send(produtos);
});



//###########################
app.get("/designs", (req, res) => {
    res.send(Designs);
});

app.get("/devfrontend", (req, res) => {
    res.send(devFrontEnd);
});

app.get("/devbackend", (req, res) => {
    res.send(devBackEnd);
});

app.listen(8080);
