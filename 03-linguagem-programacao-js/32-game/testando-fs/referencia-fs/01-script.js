// require fica em cache e não identifica mudanças no json
const data = require("./data-teste-01.json");

data.map(elem => console.log(elem.id));
