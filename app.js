const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 2999;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("html", require('ejs').renderFile);
app.set("view-engine", "html");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "public/create.html"));
});

app.get("/css/main/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/main.css"));
});

app.get("/js/main/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/main.js"));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});