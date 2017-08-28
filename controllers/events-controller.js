const MyEvent = require('../models/event');

const eventsController = {
    getAllEvents: (req, res) => {
        res.json(res.locals.data);
    },
    addMyEvents: (req,res) =>{
        MyEvent.addEvent(JSON.stringify(req.body.event),req.body.user_id).then(res => {
        }).catch(err => {
            console.log(err);
        })

    },
    getMyEvents: (req,res) => {
        MyEvent.getMyEvents(req.params.id).then( data => {
            res.json(data);
        }).catch(err=>console.log(err));
    },
    deleteMyEvents:(req,res) => {
        MyEvent.deleteEvent(req.params.id).then(data=>{
            res.json(data);
        }).catch(err=>console.log(err));
    }

}

module.exports = eventsController;