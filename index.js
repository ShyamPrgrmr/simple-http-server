var express = require('express');
var app = express();
require('dotenv').config();
var server_name = process.env.SERVER_NAME;
console.log(server_name)
app.get('/application', function (req, res) {
    res.status(200).send("Response received from : "+server_name); 
});
app.listen(3000, function () {console.log('Example app listening on port 3000!');});