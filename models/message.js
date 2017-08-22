const db = require('../db/config');

const Message = {};

Message.findAllSentMessages = (id) => {
    return db.query(`
        SELECT * FROM messages
        WHERE sender_id = $1
    `, [id]);
}

Message.findAllReceivedMessages = (id) => {
    return db.query(`
        SELECT * FROM messages
        WHERE recipient_id = $1
    `, [id]);
}

Message.findById = (id) => {
    return db.one(`
        SELECT * FROM messages
        WHERE id = $1
    `, [id]);
}

Message.create = (message, sender_id) => {
    return db.one(`
        INSERT INTO messages
        (sender_id, recipient_id, time_stamp, content)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *
    `, [sender_id, message.recipient_id, message.time_stamp, message.content]);
}

Message.delete = (id) => {
    return db.none(`
        DELETE FROM messages
        WHERE id = $1
    `, [id]);
}

module.exports = Message;
