const express = require ('express');
const profile = express.Router();
const profileController = require('../controllers/profile-controller');

profile.get('/',profileController.getProfile);
profile.post('/',profileController.createProfile);

module.exports =  profile;