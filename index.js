const express = require("express");
const app = express();//xay nha`
const port = process.env.PORT || 5000;//khai bao cong vao
app.listen(port,function (){ //hoan thanh xay nha`
    console.log("server is running");
});
app.use(express.static("public"))//cac file css,html,img phai dat trong public
//tao routing (thue nhan vien)
app.get("/",function (req,res){
    res.sendFile(__dirname+"/public/home.html");
})
//them 1 routing
app.get("/bongda",function (req,res){
    res.sendFile(__dirname+"/public/practical.html");
})