const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/tables", function(req, res) {
    res.json(tableData);
});

app.get("/api/waitlist", function(req, res) {
    res.json(waitListData);
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname + "/assets/html/tables.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname + "/assets/html/reserve.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path. join(__dirname + "/assets/html/home.html"));
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});




