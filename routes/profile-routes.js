const express = require ('express');
const profile = express.Router();
const profileController = require('../controllers/profile-controller');

profile.get('/:id',profileController.getProfile);
profile.post('/',profileController.createProfile);
profile.put('/:id',profileController.editProfile);
module.exports =  profile;