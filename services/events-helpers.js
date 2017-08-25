require('isomorphic-fetch');

function getEvents (req, res, next) {
    console.log('this is the helper');
    fetch(`https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=10010&country=United States&topic=technology&city=New York&state=NY&radius=2&page=15&key=2a71648405c6a89156b301b4b4224`)
        .then(res => {
            return res.json();
        }).then(jsonRes => {
            // console.log(jsonRes);
            res.locals.data = jsonRes;
            // console.log("getEvents: res.locals.data", res.locals.data);
            next();
        }).catch(err => {console.log(err);
        next();
        })
}

module.exports = {getEvents};