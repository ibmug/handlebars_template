//Lets import the ORM
//Esto de las cb functions es para 
var orm = require("../config/orm.js");

var hamburguer = {
    all:function(cb){
        orm.all("users", function(res){
            cb(res);
        });
    },
    create:function(cols,vals,cb){
        orm.create("users", function(objColVals,condition,cb){
            cb(res);
        });
    },
    update:function(objColVals,condition,cb){
        orm.update("users",function(objColVals,condition,cb){
                cb(res);
        });
    },
    delete:function(objColsVals,condition,cb){
        orm.delete("users",function(objColVals,condition,cb){
            cb(res);
        });
    }
};

//
module.exports = hamburguer;
