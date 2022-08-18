const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.use( '/static', express.static( 'static'));
const port = 8000;

app.get("/", (req,res)=>{
  res.render('main');
})

app.get("/main", (req,res)=>{
    res.render('main');
})

app.get("/info", (req,res)=>{
    res.render('info');
})

app.get("/mypage", (req,res)=>{
  res.render("mypage");
})

app.listen(port, ()=>{
    console.log("server open: ", port);
})

