const port = 3000;
const express = require("express");
const app = express();
const cors = require("cors");

const configCors = {
    origin: "*",
    Credential: true,
    // optionSuccessStatus: 200,
}
app.use(cors(configCors));

app.get("/", (req, res) => {
    console.log("requisição em /");
    res.send("olá");
});

app.listen(port, () => {
    return console.log(`rodando em http://localhost:3000`);
})
