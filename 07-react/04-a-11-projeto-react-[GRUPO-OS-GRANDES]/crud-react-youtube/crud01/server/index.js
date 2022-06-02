const express = require('express');
const app = express();
const mysql = require('mysql');

// segundo video 1:53
// baixar mysql e configurar
const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"password",
    database:"crudgames",
});

app.get('/', (req,res) => {
    let SQL = "INSERT INTO games ( name. cost, category) VALUES ( 'Far Cry 5', '120', 'Ação')";
    db.query(SQL,(err, result) => {
        console.log(err);
    });
});

app.get('/', (req,res) => {
    res.send("deu certo");
});

app.listen(3001, () => {
    console.log("rodando na porta 3001")
});
