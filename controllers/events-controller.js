const MyEvent = require('../models/event');

const eventsController = {
    //controller for showing all events
    getAllEvents: (req, res) => {
        res.json(res.locals.data);
    },
    //controlling for adding events to my events page
    addMyEvents: (req,res) =>{
        // console.log(req.body.event);
        // console.log(JSON.stringify(req.body.event));
        console.log(req.body.user_id);
        MyEvent.addEvent(JSON.stringify(req.body.event),req.body.user_id).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })

    },
    //controller for showing favorited events
    getMyEvents: (req,res)=>{

        MyEvent.getMyEvents(req.params.id).then(data=>{
            res.json(data);
        }).catch(err=>console.log(err));
    },
    //controller for deleting events
    deleteMyEvents:(req,res)=>{
        console.log('event deleted');
        console.log(req.params.id);
        MyEvent.deleteEvent(req.params.id).then(data=>{
            res.json(data);
        }).catch(err=>console.log(err));
    }

}

module.exports = eventsController;