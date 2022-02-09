const port = 3001;
const express = require("express");
const app = express();

const cors = require("cors");
const configCors = {
    origin: "*",
    Credential: true
}
app.use(cors(configCors));

app.get("/", (req, res) => {
    res.send("ok!");
});

app.get("/portfolio", (req, res) => {
    const data = req.query.nome;
    res.send(data);
});

app.listen(port, () => {
    console.log(`ouvindo na porta ${port}`);
});
