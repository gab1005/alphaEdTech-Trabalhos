//ex de read line em português.
const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("qual é o seu nome? ", (resUser) => {
    console.log("ok, seu nome é " + resUser);
    console.log("fechadno interface interativa.");

    rl.close();  //fecahr interface interativa.
});
