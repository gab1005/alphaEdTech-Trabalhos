const port = 8080;
const express = require("express");
const app = express();

app.use(express.static("./src"));

app.listen(port, () => {
    console.log(`frontend rodando na porta ${port}`);
});