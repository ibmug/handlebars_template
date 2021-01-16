var mysql = require("mysql");

var connection;

if(ProcessingInstruction.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'secretPass',
        database: 'burguer_db'
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