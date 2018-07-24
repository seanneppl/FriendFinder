const routes = require('express').Router();
var path = require("path");

routes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

routes.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = routes;
