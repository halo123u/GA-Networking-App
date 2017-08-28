require('isomorphic-fetch');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

function getEvents (req, res, next) {
    fetch(`https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=10010&country=United States&topic=technology&city=New York&state=NY&radius=2&page=15&key=${API_KEY}`)
        .then(res => {
            return res.json();
        }).then(jsonRes => {
            res.locals.data = jsonRes;
            next();
        }).catch(err => {console.log(err);
        next();
        })
}

module.exports = {getEvents};