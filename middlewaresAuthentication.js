const express = require("express");

const app = express();

app.get("/authentication",(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;

    const kidneyId = req.query.kidneys; 

    if((username != "purav" ||
         password != "purav1234")) {
        res.status(400).json({
            message:"Wrong id or password!!" 
        })
        return
    }
    if(kidneyId != 1 && kidneyId != 2){
            res.status(400).json({
                message:"Wrong input"
            })  
            return      
    }
    res.json({
        message:"Your kidney is fine"
    })
});
app.listen(3000);
