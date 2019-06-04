const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
 
app = express();
 
app.use(cookieParser());
 
app.set("trust proxy", 1);
app.use(session({
    secret: "IITKCSESOC2019",
    saveUninitialized: false,
    resave: false,
    cookies : {secure: true}
}));
 
app.get("/", function(req, res) {
    res.send(req.cookies);
});
 
app.get("/first", function(req, res) {
    res.send(req.cookies);
});
 
app.get("/third", function(req, res) {
    res.send(req.cookies);
});
 
app.get("/showCookie", function(req, res) {
    res.send(JSON.stringify(req.cookies));
});
 
app.get("/setCookie", function(req, res) {
    res.cookie("username", "fakeuser");
    res.cookie("magic", Math.floor(Math.random()*1000));
    res.send("Done");
});
 
app.get("/counter", function(req, res) {
    console.log(req.session);
    if(req.session.count) {
        req.session.count++;
        res.send("You have visited "+req.session.count+ " times");
    } else {
        req.session.count = 1;
        res.send("Initialized a session for you.");
    }
    // req.session.save();
});
 
app.listen(3000);
 
/*
https://pastebin.com/kFTevJme
 
npm install express-session
 
*/