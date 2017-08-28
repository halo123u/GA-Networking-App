//dependencies and required files
const express = require ('express');
const profile = express.Router();
const profileController = require('../controllers/profile-controller');

//routes to individual profiles as well as the profile feed
profile.get('/feed/',profileController.getAllProfiles);
profile.get('/:id',profileController.getProfile);
profile.post('/',profileController.createProfile);
profile.put('/:id',profileController.editProfile);
module.exports =  profile;