const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Diablo1125",
  database: "projects",
});

conn.connect();

module.exports = conn;
