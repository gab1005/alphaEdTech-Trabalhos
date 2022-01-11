const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const configCors = { origin: false };

app.get("/", cors(configCors), (req, res) => {
    res.send("funciona");
});

app.listen(8080);