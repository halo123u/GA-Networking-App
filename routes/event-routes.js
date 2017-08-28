//dependencies and files required
const express = require('express');
const events = express.Router();
const eventsController = require('../controllers/events-controller');
const eventsHelpers = require('../services/events-helpers');

//routes for the My Events page
events.get('/', eventsHelpers.getEvents,eventsController.getAllEvents);
events.get('/myevents/:id',eventsController.getMyEvents);
events.delete('/:id',eventsController.deleteMyEvents);
events.post('/', eventsController.addMyEvents);
module.exports = events;