const Profile = require('../models/profile');

const profileController = {
    getProfile: (req,res)=>{
        Profile.getInfo(req.params.id).then(data=>{
            res.json(data);
        }).catch(err=>{
            console.log(err);
        });
    },
    createProfile: (req,res) => {
        Profile.setInfo({
            age: req.body.age,
            class: req.body.class,
            cohort: req.body.cohort,
            interest : req.body.interest,
            location : req.body.location,
            bio : req.body.bio,
            pic : req.body.picture_url,
            user_id : req.body.user_id
        }).then(data=>{
                res.send(data);
            }).catch(err=>{
                console.log(err);
                res.send(err);
            });
    }
}

module.exports = profileController;