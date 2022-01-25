//serve a pasta "src"
const port = "8083";
const express = require("express");
const app = express();

app.use(express.static("./src"));

app.listen(port, () => console.log(`servindo pasta src pela porta: ${port}`));
