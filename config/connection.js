var mysql = require("mysql");
require('dotenv').config({ path: './environment.env' });

var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    });
}

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id:" + connection.threadId)
});

//Export
module.exports = connection;