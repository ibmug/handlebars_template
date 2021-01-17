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
    burguersModel.create([
        "uName","uActive"
    ],[
        req.body.uName, req.body.uActive
    ],function(result){
        res.json({id: result.insertId});
    });
});


router.put("/api/burguers/:id",function(req,res){
    //Put request
    var condition = "uID = "+req.params.id;
    console.log(req.body);
    //we need to check what uactive is....
    burguersModel.update({uActive : req.body.uActive},condition,function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

router.delete("/api/burguers/:id",function(req,res){
    //Delete them burguers
    var condition  = "uID = " + req.params.id;
    burguersModel.delete(condition,function(result){
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
    
});


//Export this
module.exports=router;