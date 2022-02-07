const port = 3000;
const express = require("express");
const app = express();

const dados = require("./data.json");
const aniversario = require("./components/aniversario.js");

//configurar "cors".
const cors = require("cors");
const configCors = {
    origin: "*",
    Credential: true,
    optionSuccessStatus: 200
};
app.use(cors(configCors));
//#########################

app.get("/", (req, res) => {
    res.send("oi, esta funcionando");
});


app.get("/tudo", (req, res) => {
    res.send(dados);
});

app.get("/aniversariantes", (req, res) => {
    const parametro = req.query.mes
    const resp = aniversario(parametro);
    // const resp = req.body;
    res.send(resp);
});

app.get("/teste", (req, res) => {
    const parametro = req.query.mes;
    // res.send(parametro);
    // res.send(`o valor foi: ${parametro}`);
});

app.listen(port, () => console.log(`esta rodando na porta: ${port}`));
