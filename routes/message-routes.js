const express = require('express');
const messages = express.Router();
const messageController = require('../controllers/message-controller');

messages.get('/sent/:id', messageController.getAllSentMessages);
messages.get('/received/:id', messageController.getAllReceivedMessages);
messages.get('/:id', messageController.getMessageById);
messages.post('/:user_id', messageController.createMessage);
messages.delete('/:id', messageController.deleteMessage);

module.exports = messages;