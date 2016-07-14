const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.js');
mongoose.connect(config.database);
const cors = require('cors');
const jwt = require('jsonwebtoken');
const corsOptions = {
  origin: 'http://localhost:9000'
}
const app = express();
const port = 9000;



app.set('superSecret', config.secret);
app.use(express.static(__dirname + './src'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors(corsOptions));


//user endpoints {
// app.post('')
// app.get('')
// app.put('')
//
// //vehicle, user can only change vehicle name
// app.put('')
//
// //}
//
// //admin endpoints {
// app.post('')
// app.get('')
// app.put('')
//
// //vehicle endpoints for admin
// app.post('')
// app.get('')
// app.put('')
// app.delete('')
//
// //user endpoints for admin
// app.post('')
// app.get('')
// app.put('')
// app.delete('')
//
// //}













app.listen(port, function(){
  console.log("It's over: " + port);
})
