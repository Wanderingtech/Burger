// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "xc6wtx7s9efhfmen",
  password: "w7x85qqy1hrgv1zj",
  database: "ezv9iai55i0uq46e"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
