const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
    return db.oneOrNone(`
        SELECT * FROM users
        WHERE username = $1
    `, [userName]);
};

User.create = user => {
    return db.one(`
        INSERT INTO users
        (username, password_digest, email, first_name, last_name)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
    `, [user.username, user.password_digest, user.email, user.first_name, user.last_name]);
};

User.findByUserId = id => {
    return db.manyOrNone(`
        SELECT * FROM profile
        WHERE user_id = $1
    `, [id]);
};

module.exports = User;