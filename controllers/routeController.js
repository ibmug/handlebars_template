var express = require("express");

var router = express.Router();

//import the file from models that handles whatever it is that we're going to use.

var burguersModel = require("../models/burguer.js");

//Create routes

router.get("/", function(req,res){

//Getting
burguersModel.all(function(data) {
    var hbsObject = {
      burguers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
    });
});

router.post("/api/burguers",function(req,res){
//Posting
    console.log(req.body.uName + req.body.uActive);
    burguersModel.create(["uName","uActive"],[req.body.uName, req.body.uActive],function(result){
        res.json({id: result.insertId});
    });

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