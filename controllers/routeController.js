var express = require("express");

var router = express.Router();

//import the file from models that handles whatever it is that we're going to use.

var burguersModel = require("../models/burguers.js");

//Create routes

router.get("/", function(req,res){

//Getting

});

router.post("/api/burguers",function(req,res){
//Posting
});


router.put("/api/burguers/:id",function(req,res){
    //Put request
    var id = req.params.id;
});

router.delete("/api/burguers/:id",function(req,res){
    //Delete them burguers
});


//Export this
module.exports=router;