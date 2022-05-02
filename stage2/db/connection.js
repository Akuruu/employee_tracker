const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Asm577831!",
    database: "employees"
});

// Sets error handling
connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection