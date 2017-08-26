const db = require('../db/config');

const MyEvent = {
    addEvent: (event,id)=>{
        return db.one(`
            INSERT INTO events(user_id, data)
            VALUES($1, $2)
            RETURNING *`,[id,event])
    },
    getMyEvents: (id)=>{
        return db.query(`
        SELECT * from events where user_id=$1`,[id]);

    },
    deleteEvent: (id)=>{
        return db.one(`
        DELETE from events where event_id = $1
        RETURNING *`,[id]);
    }
}

module.exports = MyEvent;
