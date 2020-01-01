//jshint esversion:6
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home");
});

app.get("/technical-events", function(req,res){
  res.render("technical-events");
});

app.get("/non-technical-events", function(req,res){
  res.render("non-technical-events");
});



app.listen(3000,function(){
  console.log("Succesfully started sever on port 3000");
});
