//chamar as bibliotecas
const express = require("express");
//const cors = require("cors");

const app = express();

//sinalizo pro express que el tem q usar o cors
//app.use(cors());

//const configuracaoCors = { origin: false };

let valor = "texto  de  resposta";
//cors(configuracaoCors),
app.get("/", (req, res) => {

    valor = valor + " resposta";
    res.send(valor);
    return false;
});

app.listen(8080);

