\c ga_network_dev
DROP TABLE messages;
DROP TABLE profile;
DROP TABLE users;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) UNIQUE NOT NULL,
    password_digest TEXT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name TEXT,
    last_name TEXT
);

CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    age INTEGER,
    class VARCHAR(255),
    cohort VARCHAR(255),
    interest VARCHAR(255),
    location VARCHAR(50),
    bio VARCHAR(250),
    picture_url VARCHAR(255),
    user_id INT REFERENCES users(id) NOT NULL
);

 CREATE TABLE IF NOT EXISTS messages (
     id SERIAL PRIMARY KEY,
     sender_id INT REFERENCES users(id) NOT NULL,
     recipient_id INT REFERENCES users(id) NOT NULL,
     time_stamp VARCHAR(255),
     content VARCHAR(400)
); 