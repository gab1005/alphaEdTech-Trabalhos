//servidor do backend que recebe as requisições do frontend.
const port = "3003";
const express = require("express");
const app = express();

//configurar "cors".
const cors = require("cors");
const configCors = {
	origin: "*",
	Credential: true,
	optionSuccessStatus: 200
};
app.use(cors(configCors));

const funcao = require("./components/comprimento.js");

app.get("/", (req, res) => {
	res.send("oi, esta funcionando");
});

app.get("/comprimento:palavra", (req, res) => {
	const p = req.params.palavra;

	// const resultado = funcao(p);

	res.send(`palavra recebida foi ${p}`);

});

app.get("/comprimento02", (req, res) => {
	const p = req.query.palavra;

	res.send(`texto enviado ${p}`);
});

app.listen(port, () => console.log("servidor backend escutando na porta: " + port));
