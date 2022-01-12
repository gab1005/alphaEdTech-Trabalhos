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

//
//app.use(express.static("paginas/oi.html"))

const clientes = [
    {
        "id": 1,
        "name": "Antonio",
        "email": "asawfoot0@arstechnica.com"
    }, {
        "id": 2,
        "name": "Daffi",
        "email": "dgadsden1@addtoany.com"
    }, {
        "id": 3,
        "name": "Colin",
        "email": "cmcisaac2@usa.gov"
    }, {
        "id": 4,
        "name": "Frederique",
        "email": "fwanden3@vinaora.com"
    }, {
        "id": 5,
        "name": "Gunner",
        "email": "gmerdew4@so-net.ne.jp"
    }, {
        "id": 6,
        "name": "Patty",
        "email": "phaversham5@nymag.com"
    }, {
        "id": 7,
        "name": "Zsa zsa",
        "email": "zfogt6@ifeng.com"
    }, {
        "id": 8,
        "name": "Hayward",
        "email": "hrawles7@accuweather.com"
    }, {
        "id": 9,
        "name": "Reamonn",
        "email": "rfarny8@meetup.com"
    }, {
        "id": 10,
        "name": "Hayden",
        "email": "hstucksbury9@telegraph.co.uk"
    }, {
        "id": 11,
        "name": "Culver",
        "email": "cimminsa@livejournal.com"
    }, {
        "id": 12,
        "name": "Marley",
        "email": "misakowiczb@twitpic.com"
    }, {
        "id": 13,
        "name": "Tripp",
        "email": "thouldinc@indiegogo.com"
    }, {
        "id": 14,
        "name": "Herb",
        "email": "hdybled@nationalgeographic.com"
    }, {
        "id": 15,
        "name": "Janaye",
        "email": "jbromeheade@dell.com"
    }, {
        "id": 16,
        "name": "Lucio",
        "email": "lsidebottonf@ca.gov"
    }, {
        "id": 17,
        "name": "Inglis",
        "email": "isherborng@sohu.com"
    }, {
        "id": 18,
        "name": "Avie",
        "email": "aconnahh@smugmug.com"
    }, {
        "id": 19,
        "name": "Jacquenette",
        "email": "jlococki@hexun.com"
    }, {
        "id": 20,
        "name": "Carri",
        "email": "cmclarenj@omniture.com"
    }]

app.get("/", (req, res) => {
    res.send(clientes);
});

app.get("/:idRecebido", (req, res) => {
    const idReq = req.params.idRecebido;
    //res.send(`produtos= ${produtos} req... = ${reqCliente}`);
    //if (typeof (idReq) == Number) {
    const resServidor = clientes.filter(elemento => elemento.id == idReq);
    res.send(resServidor[0]);
    //}
});



//###########################
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
