var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.json({ "slackUsername": "Mosope", "backend": true, "age": 21, "bio": "I'm a student of Unilag studying Mathematics" });
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`The app is listening at port ${PORT}...`)
});
