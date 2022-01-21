//chamando o json completo.
const tudo = require("./components/tudo.js");
//tratamento de dados (tudo).
const aniversarioGrupo = require("./components/aniversario-grupo.js");
const setorGrupo = require("./components/setor-grupo.js");
const ramoGrupo = require("./components/ramo-grupo.js");
//definições do express.
const port = 3000;
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

//rotas principais
app.get("/", (req, res) => {
    res.send("oi, está funcionando!");
});

app.get("/tudo", (req, res) => {
    console.log(tudo)

    res.send(tudo);
    //ele deve me retornar todos os nomes, a primeira instancia, ou a esta errado.
    //r: acho q esta errado.
    // console.log(...tudo.nome);
});

app.get("/aniversarioGrupo:aniversario", (req, res) => {
    //codigo
    const parametro = req.params.aniversario;
    const resposta = aniversarioGrupo(parametro);
    res.send(resposta);
});

app.get("/setorGrupo", (req, res) => {
    //codigo
    console.log("setor grupo");
});

app.get("/ramoGrupo", (req, res) => {
    //codigo
    console.log("ramo grupo");
});


//############
//rotas adicionais que eu fiz pra praticar a estrutura "app.get".

//matricula
app.get("/matricula", (req, res) => {
    const arrMatricula = tudo.map(elem => {
        elem.matricula;
    });
    // res.send(`matriculas:`);
    res.send(arrMatricula);
});
//nome
app.get("/nome", (req, res) => {
    const nome = tudo.map(elem => {
        elem.nome;
    });

    res.send(`funciona ${nome}`);
});
//ramo
app.get("/ramo", (req, res) => {
    const ramo = tudo.map(elem => {
        elem.ramo;
    });

    res.send(ramo);
});
//email
app.get("/email", (req, res) => {
    const email = tudo.map(elem => {
        elem.email;
    });

    res.send(email);
});
//setor
app.get("/setor", (req, res) => {
    const setor = tudo.map(elem => {
        elem.setor;
    });

    console.log(setor);
    res.send(setor);
});
//nascimento
app.get("/nascimento", (req, res) => {
    const nascimento = tudo.map(elem => {
        elem.nascimento;
    });

    res.send(nascimento);
});



// app.get("/aniversariantes", (req, res) => {
//     console.log(aniver);
//     res.send(aniver);
// });

app.listen(port, () => console.log(`server backend ouvindo na porta ${port}`));
