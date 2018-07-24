// 3. Your `htmlRoutes.js` file should include two routes:

//    * A GET Route to `/survey` which should display the survey page.
//    * A default, catch-all route that leads to `home.html` which displays the home page.


const routes = require('express').Router();
var path = require("path");


// Basic route that sends the user first to the AJAX Page
routes.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

routes.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = routes;
