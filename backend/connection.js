const mysql = require("mysql");
const fs = require("fs");
require("dotenv").config();
const contents = fs.readFileSync("./config/db-config.json", "utf8");
const conf = JSON.parse(contents.toString());

const connection = mysql.createConnection({
  port: parseInt(conf.port),
  host: conf.host,
  user: conf.user,
  password: conf.password,
  database: conf.database,
});

connection.connect((err) => {
  if (!err) {
    console.log("Connected");
  } else {
    console.log(err);
  }
});

module.exports = connection;
