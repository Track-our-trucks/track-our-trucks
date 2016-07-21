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

// webtoken for authentication

var createJWT = (user) => {
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

// webtoken for authentication

var adminCreateJWT = (user) => {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix(),
        name: user.name,
        email: user.email,
        setLocation: user.setLocation,
        vehicles: user.vehicles
    };
    return jwt.encode(payload, config.ADMIN_TOKEN_SECRET);
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
 | User Log in with Email
 |--------------------------------------------------------------------------
 */
app.post('/auth/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if (!user) {
            return res.status(401).send({
                message: 'Invalid email'
            });
        }
        user.comparePassword(req.body.password, user.password, (err, isMatch) => {
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
 | User Create Account
 |--------------------------------------------------------------------------
 */

app.post('/auth/signup', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, existingUser) => {
        if (existingUser) {
            return res.status(409).send({
                message: 'Email is already taken'
            });
        }
        User.create(req.body, (err, result) => {
            if (err) {
                res.status(501).send({
                    message: err.message
                });
            }
            else {
              Admin.findOneAndUpdate({email: 'tot@gmail.com'}, {$push: {users: result._id}}, (err, user) => {

                if(err){
                  res.send(500).json(err.message)
                }
                else {
                  res.send({
                      token: createJWT(result)
                  });
                }
              })

            }

        });
    });
});

/*
 |--------------------------------------------------------------------------
 | Admin Log in with Email
 |--------------------------------------------------------------------------
 */

app.post('/auth/adminlogin', (req, res) => {
    Admin.findOne({
        email: req.body.email
    }, (err, admin) => {

        if (!admin) {
            return res.status(401).send({
                message: 'Invalid email'
            });
        }
        admin.comparePassword(req.body.password, admin.password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(401).send({
                    message: 'Invalid email and/or password'
                });
            }
            res.send({
                token: adminCreateJWT(admin),
                admin: admin
            });
        });
    });
});

/*
 |--------------------------------------------------------------------------
 | Admin Create Account
 |--------------------------------------------------------------------------
 */

app.post('/auth/adminsignup', (req, res) => {
    Admin.findOne({
        email: req.body.email
    }, (err, existingAdmin) => {
        if (existingAdmin) {
            return res.status(409).send({
                message: 'Email is already taken'
            });
        }
        Admin.create(req.body, (err, result) => {

            if (err) {
                res.status(500).send({
                    message: err.message
                });
            }
            res.send({
                token: adminCreateJWT(result)
            });
        });
    });
});





app.get('/api/getusers', adminEnsureAuthenticated, adminCtrl.index)
app.get('/api/getoneuser/:id', adminEnsureAuthenticated, adminCtrl.show)
app.put('/api/updateuser/:id', adminEnsureAuthenticated, adminCtrl.update)
app.delete('/api/deleteuser/:id', adminEnsureAuthenticated, adminCtrl.destroy)

app.post('/api/addvehicle/:userid', ensureAuthenticated, vehicleCtrl.create)
app.put('/api/updatevehicle/:id')






app.listen(port, () => {
    console.log("It's over: " + port);
})
