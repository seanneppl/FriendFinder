# FriendFinder
## Node and Express application

[Friend Finder](https://friend-finder-sn.herokuapp.com/) is a node and express web application,
hosted on heroku, that takes in user surveys and match's the user by compatability to another previous user.

The site works by compilling the survey results, once validated, and storing them. Whenever
a new user submits a new survey their results are compared to each previous survey to determine
a total difference between each survey question. The previous survey with the least total difference
is the match and is displayed to the user.

The array of stored surveys can be viewed at [api/friends](https://friend-finder-sn.herokuapp.com/api/friends).

FriendFinder uses express, path, and body-parser to handle routing and to serve the html files.
