const express = require("express");
const path = require ("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/app/index.html"));
});

app.listen(3100, () => {
    console.log("Servidor web en funcionamiento en el puerto", 3100);
});