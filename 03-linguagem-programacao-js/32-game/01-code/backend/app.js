const port = 3001;
const express = require("express");
const app = express();
const write = require("./modules/writeJson.js");

const cors = require("cors");
const configCors = {
    origin: "*",
    Credential: true
}
app.use(cors(configCors));

app.get("/", (req, res) => {
    const request = req.query.obj;
    console.log(request)
    console.log(JSON.parse(request));
    write(request);
    res.send("arquivo escrito no json");
});

app.get("/portifolio", (req, res) => {
    const response = require("./data.json");
    res.send(response);
});

app.listen(port, () => {
    console.log(`ouvindo na porta ${port}`);
});
