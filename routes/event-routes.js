const express = require('express');
const events = express.Router();
const eventsController = require('../controllers/events-controller');
const eventsHelpers = require('../services/events-helpers');

events.get('/', eventsHelpers.getEvents,eventsController.getAllEvents);
events.get('/myevents/:id',eventsController.getMyEvents);
events.post('/', eventsController.addMyEvents);
module.exports = events;