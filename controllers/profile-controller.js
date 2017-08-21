const Profile = require('../models/profile');

const profileController = {
    getProfile: (req,res)=>{
        Profile.getInfo(req.user.id).then(data=>{
            console.log(data);
            console.log('hello');
            res.json(data);
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
            pic : req.body.picture_url
        }).then(data=>{
                console.log(data);
                res.send(data);
            }).catch(err=>{
                console.log(err);
                res.send(err);
            });
    }
}

module.exports = profileController;