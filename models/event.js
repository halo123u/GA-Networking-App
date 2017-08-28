const db = require('../db/config');

const MyEvent = {
    //model to add event to personal events page
    addEvent: (event,id)=>{
        return db.one(`
            INSERT INTO events(user_id, data)
            VALUES($1, $2)
            RETURNING *`,[id,event])
    },
    //model to show events added to personal events page
    getMyEvents: (id)=>{
        return db.query(`
        SELECT * from events where user_id=$1`,[id]);

    },
    //model for deleting event from personal events page
    deleteEvent: (id)=>{
        return db.one(`
        DELETE from events where event_id = $1
        RETURNING *`,[id]);
    }
}

module.exports = MyEvent;
