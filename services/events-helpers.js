const axios = require('axios');

function getEvents (req, res, next) {
    axios.get(`https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=10010&country=United States&topic=technology&city=New York&state=NY&radius=2&page=15&key=2a71648405c6a89156b301b4b4224`)
        .then(res => {
            console.log(res);
            res.locals.data = res.data;
            next();
        }).catch(err => {console.log(err);
        next();
        })
}

module.exports = {getEvents};