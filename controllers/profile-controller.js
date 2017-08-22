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
            class: req.body.class_name,
            cohort: req.body.cohort,
            interest : req.body.interest,
            location : req.body.location,
            bio : req.body.bio,
            picture_url : req.body.pic,
            user_id : req.body.user_id
        }).then(data=>{
                res.send(data);
            }).catch(err=>{
                console.log(err);
                res.send(err);
            });
    },
    editProfile: (req,res)=>{
        Profile.editInfo({
            age: req.body.age,
            class: req.body.class_name,
            cohort: req.body.cohort,
            interest : req.body.interest,
            location : req.body.location,
            bio : req.body.bio,
            pic : req.body.picture_url,
            user_id : req.body.user_id
        },req.params.id).then(data=>{
            console.log(data);
            res.json(data);
        }).catch(err=>{
            console.log(err);
            res.json(err);
        });
    },
    getAllProfiles: (req,res)=>{
        Profile.getAll().then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = profileController;