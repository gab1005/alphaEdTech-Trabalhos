const express = require('express');
const app = express();
const produto = [
    {
        "id": 1,
        "nome": "elemento de id = 1"
    }, {
        "id": 2,
        "nome": "elemento de id = 2"
    }, {
        "id": 3,
        "nome": "elemento de id = 3"
    }, {
        "id": 4,
        "nome": "elemento de id = 4"
    }
];
app.get('/', function (req, res) {
    res.send('<html><body><input type="text" id="idbox" placeholder="Digite o ID do produto"/><input type="button" value="Consultar" onclick="clicked()"/><br /><div id="result"></div> <script>function reqListener () {console.log(this.responseText); document.getElementById("result").innerHTML = this.responseText}; function clicked () {var oReq = new XMLHttpRequest(); oReq.onload = reqListener; let typedId = document.getElementById("idbox").value; oReq.open("get", `/teste?id=${typedId}`, true); oReq.send();}</script></body></html>')
    return false
});

app.get('/teste', (req, res) => {
    const id = req.query.id;
    let tempArray = []
    for (i = 0; i < produto.length; i++) {
        if (id == produto[i].id) {
            //tempArray.push(produto[i].nome)
            res.json(`deu certo!.... ${produto[i].nome}`);
            return false;
        }
    }
    if (id > 4) {
        res.json(`não encontrado`);
        return false;
    }
    if (id == false) {
        res.json(`valor não foi digitado`);
        return false;
    }

    /**
    if (tempArray.length > 0) {
        res.json(`A consulta pelo ID ${id} encontrou as seguintes correspondências : ${tempArray.join('<br/>')}`)
    }
    if (!Number.isInteger(parseFloat(id, 10))) {
        res.json("Por favor, digite um número inteiro de ID")
    }
    res.json(`A consulta pelo ID ${id} encontrou as seguintes correspondências : Não existem produtos com o id fornecido (Tente os ids 1, 3 e 6!)`)
     */
})

const hostname = "192.168.0.111";
const port = 8080;

app.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/')
});
