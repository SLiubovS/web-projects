const express = require("express");
const app = express();

app.use(express.static(__dirname + "/wwwroot"));

app.listen(5000, function () {
    console.log("Сервер запущен по адресу http://localhost:5000");
});