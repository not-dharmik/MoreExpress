var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var friendslist = ["Ridham","Tanmay","Harsh","Janak"];

app.get("/", function(req,res){
    res.render("home");
    console.log("request for /");
});

app.post("/newfriend", function(req,res){
    var newfrnd = req.body.newfriend;
    friendslist.push(newfrnd);
    res.redirect("/friends");
    console.log(req.body);
});

app.get("/friends",function(req,res){

    res.render("friends",{friends: friendslist});
    console.log("request for friends");
})
app.listen(process.env.PORT || 3003 ,function(){
    console.log("server 3003: reporting!")
});