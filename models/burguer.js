//Lets import the ORM

var orm = require("../config/orm.js");

var hamburguer = {
    all:function(cb){
        orm.all("users_db", function(res){
            cb(res);
        });
    },
    create:function(cols,vals,cb){
        orm.create("users_db", function(objColVals,condition,cb){
            cb(res);
        });
    },
    update:function(objColVals,condition,cb){
        orm.update("users_db",function(objColVals,condition,cb){
                cb(res);
        });
    },
    delete:function(objColsVals,condition,cb){
        orm.delete("users_db",function(objColVals,condition,cb){
            cb(res);
        });
    }
};

//
module.exports = hamburguer;