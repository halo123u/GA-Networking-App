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
('halo2', 'halo2', 'something2','John', 'Bell'),
('halo3', 'halo3', 'yungT@ga.com','Yung', 'Terminal'),
('halo5', 'halo5', 'something5','Document', 'Object Model');

INSERT INTO profile
(age, class, cohort,  interest, location, bio, picture_url, user_id)
VALUES
(28, 'WDI', 'Delorean', 'Back-end development', 'New York City', 'I only sleep-walk. When you see me walking, I am sleep-walking. Also Drew, Drew, Drew-Drew. Drewdrew, Drewdrew, Drewdrew. Drew','http://i.imgur.com/TZIScO0.jpg', 1),
(75, 'WDI', 'twin peaks', 'Front End', 'New York City', 'I like 💩 and only KaHoots','https://i.imgur.com/v3fJR0k.jpg', 2),
(30, 'IOS Dev','some name', 'Games', 'New York City', 'Want to make a sidescroll shooter game. Need UX designer to help figure out layout of elements on the screen.','https://randomuser.me/api/portraits/women/12.jpg', 3),
(23, 'IOS Dev','Swoolers', 'DIV Stacking', 'New York City', 'Makign music and swoolin in the next life.','https://ca.slack-edge.com/T0351JZQ0-U5ZF852R0-8463db85a99b-512', 4),
(23, 'WDI','Delorean', 'Full-Stack', 'New York City', 'My legal full name is "Document Object Model','http://i.imgur.com/hq2ZDOQ.jpg', 5),
(23, 'IOS Dev','Yung Terminal', 'Games', 'New York City', 'Swoolin in the next life.','https://ca.slack-edge.com/T0351JZQ0-U5ZF852R0-8463db85a99b-512', 6),
(23, 'IOS Dev','Yung Terminal', 'Games', 'New York City', 'Swoolin in the next life.','https://ca.slack-edge.com/T0351JZQ0-U5ZF852R0-8463db85a99b-512', 7);
 
INSERT INTO messages
(sender_id, recipient_id, content, time_stamp)
VALUES
(1,2,'Hey, I  think your projects look cool. Let me know if you would like to collaborate.','10:00am'),
(2,1,'When do you think you would be free to meet up? I have a meeting at 2 but Im free after.','5:00pm'),
(3,1,'When do youdlkfmgvklmdfklgmkldfg think you would be I have a meeting at 2 but Im free after.','7:00pm');
