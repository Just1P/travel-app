import mysql, { ResultSetHeader } from "mysql2";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "travel_app",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

export default connection;
