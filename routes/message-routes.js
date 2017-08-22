const express = require('express');
const message = express.Router();
const messageController = require('../controllers/message-controller');

message.get('/:id', messageController.getMessage);
message.post('/', messageController.createMessage);
message.delete('/:id', messageController.delete);

module.exports = message;