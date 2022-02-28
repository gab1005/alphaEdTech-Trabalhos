const port = 3000;
const fs = require("fs");
const cors = require("cors");
const express = reuire("express");
const app = express();

app.get("/", (req, res) => {
    res.send("ok!");
});

app.listen(port, () => {
    console.log(`ouvindo na porta ${port}`);
});
