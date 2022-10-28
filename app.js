const { application } = require("express");
var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.json({ "slackUsername": "Mosope", "backend": true, "age": 21, "bio": "I'm a student of Unilag studying Mathematics" });
});

let port = 3000;
app.listen(port, () => {
    console.log(`The app is listening at port ${port}...`)
})
