const axios = require('axios');

const eventsController = {
    getAllEvents: (req, res) => {
        console.log("eventsController: res.locals.data", res.locals.data);
        res.json(res.locals.data);
    }
}

module.exports = eventsController;