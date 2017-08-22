const db = require('../db/config');

const Message = {};

Message.findAll = () => {
    return db.query(`
        SELECT * FROM messages
        ORDER BY id ASC
    `);
}

Message.findById = (id) => {
    return db.one(`
        SELECT * FROM messages
        WHERE id = $1
    `, [id]);
}

Message.create = (message, id) => {
    return db.one(`
        INSERT INTO messages
        (name_from, time_stamp, content)
        VALUES
        ($1, $2, $3)
        WHERE id = $4
        RETURNING *
    `, [message.name_from, message.time_stamp, message.content, id]);
}

Message.delete = (id) => {
    return db.none(`
        DELETE FROM messages
        WHERE id = $1
    `, [id]);
}

module.exports = Message;
