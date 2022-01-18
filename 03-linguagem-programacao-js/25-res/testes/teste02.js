//ex simples de read line.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("What is your name? ", function (answer) {
    console.log(`Oh, so your name is ${answer}`);
    console.log("Closing the interface");
    rl.close();
});