const port = 8080;
const express = require("express");
const app = express();

app.use(express.static("./src"));
app.listen(port, () => {
    return console.log(`está rodando em: http://localhost:${port}`)
});
