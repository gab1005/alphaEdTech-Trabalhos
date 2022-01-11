const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

const objTeste = { "id": 1, "nome": "objeto de id=1" };

app.use(express.static('public'));

app.get('/', (req, res) => {
    const param = req.query.param;

    if (param === "segredo") {
        res.send(`<html><input type="text" name="id" /> <input type="button" value= "consultar" onclick="cliked()" /> <br /> <div id="result"></div> <script>function reqListener () {
            console.log(this.responseText);
            document.getElementById("result").innerHTML = this.responseText;
            };
            
            function clicked() {
                var oReq = new XMLHttpRequist();
                oReq.onload = reqListener;
                oReq.open("get", "/teste", true);
                oReq.send();
            }</script></html>`);
        return false;
    } else {
        fs.readFile("arquivo.txt", function (err, data) {
            res.setHeader("content-type", "text/html");
            res.send(data);
            return false;
        });
    }
});

app.get('/teste', (req, res) => {
    res.json(objTeste);
    return false;
})

app.listen(port, () => {
    console.log(`exemplo app listening at http://localhost:${port}`)
});