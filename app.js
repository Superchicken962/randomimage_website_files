const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = 2999;

app.use(bodyParser.urlencoded({ extended: true, limit:"5000kb" }));
app.use(bodyParser.json());
app.engine("html", require('ejs').renderFile);
app.set("view-engine", "html");

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/create", (req, res) => {
    res.sendFile(path.join(__dirname, "public/create.html"));
});

app.post("/create", (req, res) => {
    var url_list = req.body.url_input;
    var encoded = (btoa(JSON.stringify(url_list))).replaceAll("/", "$");
    var obj = {"encodedarray":encoded};
    res.render(path.join(__dirname, "public/export.html"), obj)
});

app.get("/image/:encoded", (req, res) => {
    var encoded = req.params.encoded.replaceAll("$", "/");;
    var decoded = (JSON.parse(atob(encoded)));
    var random = Math.floor(Math.random() * decoded.length);
    res.redirect(decoded[random]);
});

app.get("/css/main/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/main.css"));
});

app.get("/js/create/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/create.js"));
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});