const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
const { options } = require("request");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/",function(req,res){
    const fisrtName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;
    const data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:fisrtName,
                    LNAME:lastName
                }

            }
        ]

    };
    const jsonData=JSON.stringify(data);
    const url="https://us21.api.mailchimp.com/3.0/lists/252c3e6c0d";
    const options={
        method:"POST",
        auth:"anaya1:b47f2213bed8b187c659baaa318771e3-us21"

    }
    const request=https.request(url,options,function(response){
        if (response.statusCode===200){
            // res.send("Successfully subscribed!");
            res.sendFile(__dirname+"/public/success.html");
        }
        else{
            // res.send("There was an error in signing up,please try again!");
            res.sendFile(__dirname+"/public/failure.html");

            
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    })
    request.write(jsonData);
    request.end();


});
app.post("/failure",function(req,res){
    res.redirect("/");
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/public/signup.html");
});
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});

// API key
// b47f2213bed8b187c659baaa318771e3-us21 

// Audience id 
// 252c3e6c0d 

