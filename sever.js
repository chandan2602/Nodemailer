const express=require("express");
const sendEmail = require("./utils/sendEmail");
const app=express();
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(express.urlencoded({extended:false}));
app.get("/",(req,res)=>{
    res.render("email-form");
});
//send email
app.post("/send-email",async(req,res)=>{
    const {email,message}=req.body;
    try {
        sendEmail(email,message);
        res.render('email-form',{
            status:'success',
            message:'email sent successfully',
        })
    } catch (error) {
    
        res.render('email-form',{
            status:'Error',
            message:'Error sent email',
    });
}
});
app.listen(3000,(req,res)=>{
    console.log("server is running in port 3000");
});