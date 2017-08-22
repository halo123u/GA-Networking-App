\c ga_network_dev
INSERT INTO users
(username , password_digest, email, first_name,last_name)
VALUES
('halo4', 'halo4', 'something4','oswaldo', 'almazo'),
('halo1', 'halo1', 'something1','oswaldo2', 'almazo2'),
('halo2', 'halo2', 'something2','oswaldo3', 'almazo3'),
('halo2', 'halo2', 'something2','oswaldo3', 'almazo3'),
('halo2', 'halo2', 'something2','oswaldo3', 'almazo3');

INSERT INTO profile
(id, age, class, cohort,  interest, location, bio, user_id)
VALUES
(1,28, 'WDI', 'Delorean', 'Back-end development', 'New York City', 'I have a computer science degree from X university and enrolled in WDI to sharpen my skills. Looking fo',1),
(2,24, 'UXDI', 'twin peaks', 'client interaction', 'New York City', 'Looking for web developer to help make a networking app. I have extensive design background special',2),
(3,30, 'IOS Dev','some name', 'Games', 'New York City', 'Want to make a sidescroll shooter game. Need UX designer to help figure out layout of elements on the screen.',3
)
