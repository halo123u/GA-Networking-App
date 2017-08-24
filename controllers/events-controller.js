const Events = require('../services/events-helpers');

const eventsController = {
    getAllEvents: (req, res) => {
        console.log('this is the controller');
        res.json(res.locals.data);
    }
}

module.exports = eventsController;