const axios = require('axios');

const eventsController = {
    getAllEvents: (req, res) => {
        // console.log('this is the controller');
        // axios.get(`https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=10010&country=United States&topic=technology&city=New York&state=NY&radius=2&page=15&key=2a71648405c6a89156b301b4b4224`)
        // .then(data => {
        //    eventData = data;
        //    return eventData;
        // }).catch(err => {console.log(err);
        // })
        console.log("eventsController: res.locals.data", res.locals.data);
        res.json(res.locals.data);
    }
}

module.exports = eventsController;