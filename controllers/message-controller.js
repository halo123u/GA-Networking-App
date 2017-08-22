const Message = require('../models/message');

const messageController = {
    getAllMessages: (req, res) => {
        Message.findAll().then(messages => {
            res.json({messages});
        });
    },

    getMessageById: (req, res) => {
        Message.findById(req.params.id).then(message => {
            res.json({message});
        })
    },

    createMessage: (req, res) => {
        Message.create({
            name_from: req.body.name_from,
            time_stamp: req.body.time_stamp,
            content: req.body.content
        }, req.user.id).then(message=>{
            res.json({message});
        }).catch(err=>{
            console.log(err);
        })
    },

    deleteMessage: (req, res) => {
        Message.delete(req.params.id).then(message=>{
            res.json({message});
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = messageController;