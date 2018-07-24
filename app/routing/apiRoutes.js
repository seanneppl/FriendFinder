const apiRoutes = require('express').Router();
var surveys = require('../data/friends.js');

apiRoutes.get("/api/friends", function (req, res) {
    res.json(surveys);
});


apiRoutes.post("/api/friends", function (req, res) {
    var survey = req.body;

    var difArray = [];

    surveys.forEach((each) => {

        var totalDif = 0;

        each.scores.forEach((each, index) => {

            totalDif += Math.abs(each - survey.scores[index]);
            // console.log(totalDif);

        })

        var difMatch = {
            dif: totalDif,
        };

        difArray.push(difMatch);
    });

    var minIndex = 0;
    var min = difArray[0].dif;

    difArray.forEach((each, index) => {
//         console.log(each.dif);

        if (each.dif < min) {
            min = each.dif;
            minIndex = index;
        }
    });

    var match = surveys[minIndex];

    surveys.push(survey);

    res.json(match);
});

module.exports = apiRoutes;
