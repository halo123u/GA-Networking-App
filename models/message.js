const db = require('../db/config');

const Message = {};

Message.create = (message, id) => {
    return db.one(`
        UPDATE messages SET
        name_from = $1,
        time_stamp = $2,
        content = $3
        WHERE id = $4
        RETURNING *
    `, [message.name_from, message.time_stamp, message.content, id]);
}