const fs = require('fs');

fs.readFile('./data-teste-01.json', 'utf-8', (err, jsonString) => {
    if (err) {
        console.log(err);
    }
    else {
        const jsonOBJ = JSON.parse(jsonString);
        jsonOBJ.map(elem => console.log(elem.id));
    }
});
