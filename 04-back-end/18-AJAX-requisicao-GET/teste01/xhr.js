/**

var express = require("express");
var app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
 */




//###############
/**
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        alert("deu certo!!!");
        console.log(xhr);
    } else {
        alert("deu erro!!!");
    }
}

xhr.open("GET", "arquivo01.txt", true);

xhr.send();
 */