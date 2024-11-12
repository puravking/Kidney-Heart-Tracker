const express = require("express");

const app = express();
function isOldEnough(age) {
    if(age>=14) {
        return true;
    } else {
        return false;
    }
}
function isOldEnoughMiddlewares(req,res,next) {
    const age = req.query.age;
    if(age>=14) {
        next();
    } else {
        res.status(400).json({
            msg:"Not success"
        })
    }
}
app.use(isOldEnoughMiddlewares);// har get ke andar nhi daalna pdega isse hi sbka kaam ho jaega

app.get("/ride1",isOldEnoughMiddlewares,(req,res)=>{
    throw new Error("User not found");
    if(isOldEnough(req.query.age)) {
        res.json({
            msg:"Success"
        })
    }
    
} );
app.get("/ride2",isOldEnoughMiddlewares,(req,res)=>{
    if(isOldEnough(req.query.age)) {
        res.json({
            msg:"Success"
        })
    } 
    
} );
app.use((err,req,res,next)=>{
    res.status(400).json({
        msg:"You got an error"
    })
});
app.listen(4000);
