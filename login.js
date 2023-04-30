const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();
const port = 443;

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Diablo1125",
  database: "projects",
});

//connect to database
connection.connect(function (error) {
  if (error) throw error;
  else console.log("connected to database success");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/login.html");
});

app.post("/", encoder, function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  connection.query(
    "select * from USERPASS where username = ? and pass = ?",
    [username, password],
    function (error, results, fields) {
      if (results.length > 0) {
        res.redirect("/cms");
      } else {
        res.redirect("/");
      }
      res.end();
    }
  );
});

//when login is sucess

app.get("/cms", function (req, res) {
  res.sendFile(__dirname + "/cms.html");
});

//set app port
app.listen(443);
