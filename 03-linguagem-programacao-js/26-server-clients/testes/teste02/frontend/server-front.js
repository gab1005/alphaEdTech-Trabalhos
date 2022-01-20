//exporta a pasta src de forma statica.
const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("src"));

app.listen(port, () => console.log(`frontend servidno de forma statica pasta "src" na porta ${port}`))
