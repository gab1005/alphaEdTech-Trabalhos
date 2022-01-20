const aniver = require("./components/aniversariante.js");
const port = 3000;
const express = require("express");
const app = express();

//configurar "cors".
const cors = require("cors");
const configCors = {
    origin: "*",
    Credential: true,
    optionSuccessStatus: 200
};
app.use(cors(configCors));

app.get("/", (req, res) => {
    res.send("hello word!");
});

app.get("/aniversariantes", (req, res) => {
    res.send(aniver);
});

app.listen(port, () => console.log(`server backend ouvindo na porta ${port}`));
