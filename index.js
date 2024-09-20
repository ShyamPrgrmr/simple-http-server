var express = require('express');
var app = express();
require('dotenv').config();

app.use(express.json());

var server_name = process.env.SERVER_NAME+":"+process.env.S_PORT;

console.log("Server Name : " + server_name)

app.get('/application', function (req, res) {
    console.log("GET Request Received");
    console.log("Request ID : "+ req.headers.request_id);
    res.status(200).send("GET Response received from : "+server_name); 
});

app.post('/application', function (req, res) {
    console.log("POST Request Received");
    console.log("Request ID : "+ req.headers.request_id);    
    res.status(200).json({"greetings":"hello from server","request body":req.body});

});


app.get("/healthcheck",(req,res)=>{
    //logic may be db connection check
    console.log("Healthcheck Request Received");
    res.status(200).json({"Status":"Green"});  
}); 


app.listen( process.env.S_PORT || 3000, function () {console.log(server_name + ' listening on port '+process.env.S_PORT);});