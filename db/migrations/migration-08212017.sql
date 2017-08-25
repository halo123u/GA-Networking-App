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
    bio VARCHAR(400),
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

INSERT INTO users
(username , password_digest, email, first_name,last_name)
VALUES
('halo4', '$2a$10$9a00F2FMjMN85t2toteFzu3grrR1aKpF6sEv3O1tIVyEcuKw5qrC.', 'drew@ga.com','Drew', 'Mahrt👾'),
('halo1', 'halo1', 'ari@ga.com','Ari', 'Brenner💩'),
('halo2', 'halo2', 'john@ga.com','John', 'Bell'),
('halo3', 'halo3', 'yungT@ga.com','Yung', 'Terminal'),
('halo5', 'halo5', 'dom@ga.com','Document', 'Object Model'),
('halo5', 'halo5', 'j@ga.com','J', 'Silverstein 🐈');
('halo5', 'halo5', 'j@ga.com','Ramsey', 'Nasser 🐈');

INSERT INTO profile
(age, class, cohort,  interest, location, bio, picture_url, user_id)
VALUES
(28, 'WDI', 'Delorean', 'Back-end development', 'New York City', 'I only sleep-walk. When you see me walking, I am sleep-walking. Also Drew, Drew, Drew-Drew. Drewdrew, Drewdrew, Drewdrew. Drew','http://i.imgur.com/TZIScO0.jpg', 1),
(75, 'WDI', 'twin peaks', 'Front End', 'New York City', 'I like 💩 and only KaHoots','https://i.imgur.com/v3fJR0k.jpg', 2),
(30, 'IOS Dev','some name', 'Games', 'New York City', 'I know where all the legos are. But they dont know where I am 👀'),'https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/7502/thumb_John_Bell.jpg', 3),
(23, 'IOS Dev','Swoolers', 'DIV Stacking', 'New York City', 'Making music and swoolin in the next life.','https://ca.slack-edge.com/T0351JZQ0-U5ZF852R0-8463db85a99b-512', 4),
(23, 'WDI','Delorean', 'Full-Stack', 'New York City', 'My legal full name is "Document Object Model','http://i.imgur.com/hq2ZDOQ.jpg', 5),
(24, 'IOS Dev','Delorean', 'Front End', 'New York City', 'I own a cat 🐈 named moose  and a moose named cat. ','https://ca.slack-edge.com/T0351JZQ0-U5ZF852R0-8463db85a99b-512', 6),
(26, 'WDI','Delorean', 'Games', 'New York City', 'I am a NPM package with only one dependency: Ramsey','https://vcard.newschool.edu/?c=500812', 7);
 
INSERT INTO messages
(sender_id, recipient_id, content, time_stamp)
VALUES
(1,2,'Hi would you like to play hide and seek.','10:00am'),
(2,1,'No thank you.','5:00pm');
