const db = require('../db/config');

const Message = {};
//model for showing sent messages
Message.findAllSentMessages = (id) => {
    return db.query(`
    SELECT messages.id, users.first_name, users.last_name,messages.time_stamp,messages.content 
    FROM messages 
    JOIN users on messages.recipient_id = users.id 
    WHERE sender_id = $1
    `, [id]);
}
//model for showing received messages
Message.findAllReceivedMessages = (id) => {
    return db.query(`
    SELECT messages.id, users.first_name, users.last_name,messages.time_stamp,messages.content 
    FROM messages 
    JOIN users on messages.sender_id = users.id 
    WHERE recipient_id = $1
    `, [id]);
}
//model to find message by id
Message.findById = (id) => {
    return db.one(`
        SELECT * FROM messages
        WHERE id = $1
    `, [id]);
}
//model to create message
Message.create = (message, sender_id) => {
    return db.one(`
        INSERT INTO messages
        (sender_id, recipient_id, time_stamp, content)
        VALUES
        ($1, $2, $3, $4)
        RETURNING *
    `, [sender_id, message.recipient_id, message.time_stamp, message.content]);
}
//model to delete message
Message.delete = (id) => {
    return db.none(`
        DELETE FROM messages
        WHERE id = $1
        RETURNING *
    `, [id]);
}

module.exports = Message;
