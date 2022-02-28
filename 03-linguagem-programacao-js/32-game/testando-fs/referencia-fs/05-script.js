const fs = require("fs");
function jsonReader(filePath, cb) {
    fs.readFile(filePath, "utf-8", (err, fileData) => {
        if (err) {
            return cb && cb(err);
        }
        try {
            const object = JSON.parse(fileData);
            return cb && cb(null, object);
            // object.map(elem => elem.fisrt_name);
        }
        catch (err) {
            return cb && cb(err);
        }
    });
}
jsonReader("./data-teste-01.json", (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        data.map(elem => console.log(elem.id));
    }
});