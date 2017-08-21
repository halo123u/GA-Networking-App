const express = require ('express');
const profile = express.Router();
const profileController = require('../controllers/profile-controller');

profile.get('/',(req,res)=>{
    res.send("this is the -profile route");
});

module.exports =  profile;