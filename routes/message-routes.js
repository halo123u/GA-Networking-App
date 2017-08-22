const express = require('express');
const messages = express.Router();
const messageController = require('../controllers/message-controller');

messages.get('/', messageController.getAllMessages);
messages.get('/:id', messageController.getMessageById);
messages.post('/', messageController.createMessage);
messages.delete('/:id', messageController.deleteMessage);

module.exports = messages;