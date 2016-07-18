const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config.js');
mongoose.connect(config.database);
const cors = require('cors');
const app = express();
const port = 9000;
const jwt = require('jwt-simple');
const moment = require('moment');
const path = require('path');
const qs = require('querystring');
const request = require('request');
const bcrypt = require('bcryptjs');



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
app.use(cors(corsOptions));



// server controllers
const userCtrl = require('./serverControllers/userCtrl');
const adminCtrl = require('./serverControllers/adminCtrl');
const vehicleCtrl = require('./serverControllers/vehicleCtrl');

// schemas
const User = require('./models/user');

// Local authentication through Satellizer

function ensureAuthenticated(req, res, next) {

    if (!req.header('Authorization')) {
        return res.status(401).send({
            message: 'Please make sure your request has an Authorization header'
        });
    }
    var token = req.header('Authorization').split(' ')[1];
    console.log(token);
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

// webtoken for authentication

function createJWT(user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
        name: user.name,
        email: user.email,
        setLocation: user.setLocation,
        vehicles: user.vehicles
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}

// endopoint for login

// app.get('/api/me', ensureAuthenticated, function(req, res) {
//   User.findById(req.user, function(err, user) {
//     res.send(user);
//   });
// });


// update endpoint authentication

// app.put('/api/me', ensureAuthenticated, function(req, res) {
//     User.findOne({email: req.body.email}, function(err, user) {
//         if (!user) {
//             return res.status(400).send({
//                 message: 'User not found'
//             });
//         }
//         else {
//           return res.status(200).json(user)
//         }
//     });
// });

/*
 |--------------------------------------------------------------------------
 | Log in with Email
 |--------------------------------------------------------------------------
 */
app.post('/auth/login', function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, user) {
      console.log(user);
        if (!user) {
            return res.status(401).send({
                message: 'Invalid email'
            });
        }
        user.comparePassword(req.body.password, user.password, function(err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({
                    message: 'Invalid email and/or password'
                });
            }
            res.send({
                token: createJWT(user),
                user: user
            });
        });
    });
});

/*
 |--------------------------------------------------------------------------
 | Create Account
 |--------------------------------------------------------------------------
 */

app.post('/auth/signup', function(req, res) {
    User.findOne({
        email: req.body.email
    }, function(err, existingUser) {
        if (existingUser) {
            return res.status(409).send({
                message: 'Email is already taken'
            });
        }
        User.create(req.body, function(err, result) {
            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }
            res.send({
                token: createJWT(result)
            });
        });
    });
});






app.get('/api/getusers', adminCtrl.index)
app.get('/api/getoneuser/:id', adminCtrl.show)
app.put('/api/updateuser/:id', adminCtrl.update)
app.delete('/api/deleteuser/:id', adminCtrl.destroy)

app.post('/api/addvehicle/:userid', vehicleCtrl.create)
app.put('/api/updatevehicle/:id')














app.listen(port, function() {
    console.log("It's over: " + port);
})
