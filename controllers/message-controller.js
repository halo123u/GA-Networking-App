const Message = require('../models/message');

const messageController = {
    getAllSentMessages: (req, res) => {
        Message.findAllSentMessages(req.params.id).then(messages => {
            res.json({messages});
        });
    },

    getAllReceivedMessages: (req, res) => {
        Message.findAllReceivedMessages(req.params.id).then(messages => {
            res.json({messages});
        });
    },

    getMessageById: (req, res) => {
        Message.findById(req.params.id).then(message => {
            res.json({message});
        })
    },

    createMessage: (req, res) => {
        console.log(req.body.recipient_id);
        console.log(req.body.time_stamp);
        console.log(req.body.content);
        Message.create({
            recipient_id: req.body.recipient_id,
            time_stamp: req.body.time_stamp,
            content: req.body.content
        }, req.params.user_id).then(message=>{
            res.json({message});
        }).catch(err=>{
            console.log(err);
        })
    },

    deleteMessage: (req, res) => {
        Message.delete(req.params.id).then(message=>{
            res.json(message);
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = messageController;