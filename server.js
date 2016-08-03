const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./theConfig.js');
mongoose.connect(config.database);
const cors = require('cors');
const app = express();
const port = config.port;
const jwt = require('jwt-simple');
const moment = require('moment');
const path = require('path');
const qs = require('querystring');
const request = require('request');
const bcrypt = require('bcryptjs');
const stripe = require('stripe')(config.STRIPE_SECRET);

const corsOptions = {
    origin: 'http://localhost:9000'
}

app.set('superSecret', config.secret);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// server controllers
const userCtrl = require('./serverControllers/userCtrl');
const adminCtrl = require('./serverControllers/adminCtrl');
const vehicleCtrl = require('./serverControllers/vehicleCtrl');

// schemas
const User = require('./models/user');
const Admin = require('./models/admin');
const Vehicle = require('./models/vehicle')

// Local authentication through Satellizer

var ensureAuthenticated = (req, res, next) => {

    if (!req.header('Authorization')) {
        return res.status(401).send({
            message: 'Please make sure your request has an Authorization header'
        });
    }
    var token = req.header('Authorization').split(' ')[1];

    var payload = null;
    try {
        payload = jwt.decode(token, config.TOKEN_SECRET);
    } catch (err) {
        return res.status(401).send({
            message: err.message
        });
    }

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({
            message: 'Token has expired'
        });
    }
    req.user = payload.sub;
    next();
}

var adminEnsureAuthenticated = (req, res, next) => {

    if (!req.header('Authorization')) {
        return res.status(401).send({
            message: 'Please make sure your request has an Authorization header'
        });
    }
    var token = req.header('Authorization').split(' ')[1];

    var payload = null;
    try {
        payload = jwt.decode(token, config.ADMIN_TOKEN_SECRET);
    } catch (err) {
        return res.status(401).send({
            message: err.message
        });
    }

    if (payload.exp <= moment().unix()) {
        return res.status(401).send({
            message: 'Token has expired'
        });
    }
    req.user = payload.sub;
    next();
}

// login and signup for admins and users
app.post('/auth/login', userCtrl.login);
app.post('/auth/signup', userCtrl.create);
app.post('/auth/adminlogin', adminCtrl.login);
app.post('/auth/adminsignup', adminCtrl.signup);

// user endpoints
app.get('/api/currentuser/:id', ensureAuthenticated, userCtrl.show)
app.put('/api/currentuser/:id', ensureAuthenticated, userCtrl.update)

// admin endpoints
app.get('/api/getusers', adminEnsureAuthenticated, adminCtrl.index)
app.get('/api/getoneuser/:id', adminEnsureAuthenticated, adminCtrl.show)
app.put('/api/updateuser/:id', adminEnsureAuthenticated, adminCtrl.update)
app.delete('/api/deleteuser/:userid/:adminid', adminEnsureAuthenticated, adminCtrl.destroy)

// vehicle endpoints
app.post('/api/addvehicle/:userid', adminEnsureAuthenticated, vehicleCtrl.create)
app.get('/api/getvehicles', adminEnsureAuthenticated, vehicleCtrl.index)
app.get('/api/getonevehicle/:id', adminEnsureAuthenticated, vehicleCtrl.show)
app.put('/api/updatevehicle/:id', adminEnsureAuthenticated, vehicleCtrl.update)
app.delete('/api/deletevehicle/:vehicleid/:userid', adminEnsureAuthenticated, vehicleCtrl.destroy)
app.put('/api/updatevehiclename/:id', ensureAuthenticated, vehicleCtrl.showOne)



// payment
app.post('/api/payment', function(req, res, next){
  console.log(req.body);
  var charge = stripe.charges.create({
  amount: 1000, // amount in cents, again
  currency: 'usd',
  source: req.body.token,
  description: 'Example charge'
}, function(err, charge) {
     res.sendStatus(200);
  // if (err && err.type === 'StripeCardError') {
  //   // The card has been declined
  // }
});
});






app.listen(port, () => {
    console.log("It's over: " + port);
})
