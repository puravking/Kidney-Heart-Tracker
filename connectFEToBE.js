const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/sum",(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.send(sum.toString());
});

app.get("/interest",(req,res)=>{
    const principal = parseInt(req.query.p);
    const rate = parseInt(req.query.r);
    const time = parseInt(req.query.t);
    const interest = (principal*rate*time)/100;
    const total = principal+interest;
    res.json({
        interest:interest,
        total:total
    });
})

app.listen(3000);
