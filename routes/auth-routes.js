//dependencies and required files for auth
const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controllers/users-controller');

//route for registration
authRouter.post('/register', usersController.create);

//route for login
authRouter.post('/login', passport.authenticate('local', {
    successRedirect: '/auth/success',
    failureRedirect: '/auth/failure',
    failureFlash: true,
}))

//routes for success and failure of logging in
authRouter.get('/success', (req, res) => {
    res.json({
       auth: true,
       message: 'ok',
       user: req.user, 
    })
})

authRouter.get('/failure', (req, res) => {
    res.json({
        auth: false,
        message: 'Login Failed',
        user: null,
    })
})

authRouter.get('/logout', (req, res) => {
    req.logout();
    res.json({
        message: 'Logged Out',
        auth: false,
    })
})

module.exports = authRouter;