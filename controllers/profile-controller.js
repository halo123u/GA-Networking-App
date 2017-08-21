const Profile = require('../models/profile');

const profileController = {
    getProfile: (req,res)=>{
        Profile.getInfo(req.user.id).then(data=>{
            res.json(data);
        })
    }
}

module.exports = profileController;