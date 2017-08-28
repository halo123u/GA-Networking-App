const Message = require('../models/message');

const messageController = {
    //controller for showing sent messages
    getAllSentMessages: (req, res) => {
        Message.findAllSentMessages(req.params.id).then(messages => {
            res.json({messages});
        });
    },
    //controller for showing received messages
    getAllReceivedMessages: (req, res) => {
        Message.findAllReceivedMessages(req.params.id).then(messages => {
            res.json({messages});
        });
    },
    //controller to get message by ID
    getMessageById: (req, res) => {
        Message.findById(req.params.id).then(message => {
            res.json({message});
        })
    },
    //controller to create message
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
    //controller for deleting messages
    deleteMessage: (req, res) => {
        Message.delete(req.params.id).then(message=>{
            res.json(message);
        }).catch(err=>{
            console.log(err);
        })
    }
}

module.exports = messageController;