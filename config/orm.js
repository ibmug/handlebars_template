//Import the connection
const { table } = require("console");
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

  // Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


  var orm = {
//all should get a select*fromwhatevertable
    all:function(tableInput,cb){
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    create: function(table, cols, vals, cb){
        var q = "INSERT INTO" + table;
        q += " ("+cols.toString()+") ";
        //Remember our helper function? Here's inserting the amount of values/columns there are
        q += "VALUES ("+printQuestionMarks(vals.length)+") ";
        console.log(q);
        connection.query(q,vals,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    //An example of objColVals would be {name: John, LastName: Johnson, Active:true}
    update: function(table,objColVals,condition,cb){
        var q = "UPDATE "+ table;
        //Remember our other helper function? Converts this to 
        q += objToSql(objColVals);
        q += " WHERE ";
        q += condition;
        console.log(q);

        connection.query(q,function (err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    },
    delete: function(){
        var q = "DELETE FROM " + table;
        q += " WHERE ";
        q += "condition";

        console.log(q);

        connection.query(q,function(err,result){
            if(err){
                throw err;
            }
            cb(result);
        });
    }
  };

  module.exports = orm;
  