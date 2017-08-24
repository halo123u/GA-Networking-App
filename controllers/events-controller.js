const Events = require('../services/events-helpers');

const eventsController = {
    getEvents: (req, res) => {
        res.json(res.locals.data);
    }
}

module.exports = eventsController;