var express = require("express");
var app = express();

app.use(express.static("public"));  
app.set("view engine","ejs");

app.get("/", function(req,res){
    res.render("home");
    console.log("someone requested / ");
});

app.get("/posts", function(req,res){
    var posts = [
        {title: "Hello" , author: "English"},
        {title: "Namaste" , author: "Hindi"},
        {title: "JSK" , author: "Gujarati"}
    ];
    res.render("posts",{posts : posts});
    console.log("someone requested /Posts")
});

app.get("/fallinlove/:thing", function(req,res){
    var thing = req.params.thing.toUpperCase() ;
    res.render("love",{thingVar : thing});
    console.log("someone requested /Fall-In-Love ");
});

app.listen(process.env.PORT || 8000, function(){
    console.log("Search Server!! ");
});