//enviar json pro frontend
var fs = require('fs');
app.use(express.static('public'))
app.use(express.json());
var jsonData = JSON.parse(fs.readFileSync('meuArquivo.json', 'utf8'));

app.get("/", (req, res) => {
    res.status(200).json(jsonData);
})