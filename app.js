const express=require("express");
// require('dotenv').config();
const bodyParser=require("body-parser");
const request=require("request");
const https=require("https");
const { options } = require("request");
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// mailchimp.setConfig({
//     //API KEY
//      apiKey: process.env.API_KEY,
//     //API KEY PREFIX (THE SERVER)
//       server: "us21"
//     })

const api_key = "a6ae7ed89a63ca4df1c41cd54fa50fa0-us21";
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
        ],
        update_existing: true 

    };
    console.log(api_key);
    console.log(email);

    const jsonData=JSON.stringify(data);
    const url="https://us21.api.mailchimp.com/3.0/lists/236b099650/members";
    const options={
        method:"POST",
        auth:"anaya2:"+api_key

        
        
        // body:jsonData

    }
    const request=https.request(url,options,function(response){
        if (response.statusCode===200){
            // res.send("Successfully subscribed!");
            res.sendFile(__dirname+"/success.html");
        }
        else{
            // res.send("There was an error in signing up,please try again!");
            res.sendFile(__dirname+"/failure.html");

            
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
    res.sendFile(__dirname+"/signup.html");
});
app.listen(process.env.PORT || 3000,function(){
    console.log("Server is running on port 3000");
});



