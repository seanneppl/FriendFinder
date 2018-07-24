// 4. Your `apiRoutes.js` file should contain two routes:
//    * A GET route with the url `/api/friends`. This will be used to display a 
// JSON of all possible friends.
//    * A POST routes `/api/friends`. This will be used to handle incoming
//  survey results. This route will also be used to handle the compatibility logic. 


const apiRoutes = require('express').Router();
var surveys = require('../data/friends.js');


apiRoutes.get("/api/friends", function (req, res) {


    res.json(surveys);
});

// Create New reservations - takes in JSON input
apiRoutes.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    // console.log("req.body: ", req.body);
    var survey = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newReservation.routeName = newReservation.uniqueId.replace(/\s+/g, "").toLowerCase();

    // console.log("new res: ", survey);


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
    // console.log("dif ", difArray);


    // difArray.reduce((min, p) => p.y < min ? p.y : min, data[0].y);

    var minIndex = 0;
    var min = difArray[0].dif;
    // console.log("min", min);

    difArray.forEach((each, index) => {
        console.log(each.dif);

        if (each.dif < min) {
            min = each.dif;
            minIndex = index;
        }

    });

    // console.log("minIndex ", minIndex);

    var match = surveys[minIndex];

    console.log('match ', match);


    surveys.push(survey);

    res.json(match);
    // console.log("surveys array: ",surveys);
});

module.exports = apiRoutes;
