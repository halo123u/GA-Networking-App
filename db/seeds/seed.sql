\c ga_network_dev
INSERT INTO users
(username , password_digest, email, first_name,last_name)
VALUES
('halo4', 'halo4', 'something4','oswaldo', 'almazo'),
('halo1', 'halo1', 'something1','oswaldo2', 'almazo2'),
('halo2', 'halo2', 'something2','oswaldo3', 'almazo3'),
('halo3', 'halo3', 'something3','oswaldo4', 'almazo4'),
('halo5', 'halo5', 'something5','oswaldo5', 'almazo5');

INSERT INTO profile
(age, class, cohort,  interest, location, bio, user_id)
VALUES
(28, 'WDI', 'Delorean', 'Back-end development', 'New York City', 'I have a computer science degree from X university and enrolled in WDI to sharpen my skills. Looking fo',1),
(24, 'UXDI', 'twin peaks', 'client interaction', 'New York City', 'Looking for web developer to help make a networking app. I have extensive design background special',2),
(30, 'IOS Dev','some name', 'Games', 'New York City', 'Want to make a sidescroll shooter game. Need UX designer to help figure out layout of elements on the screen.',3);
 
INSERT INTO messages
(sender_id, recipient_id, content, time_stamp)
VALUES
(1,2,'Hey, I  think your projects look cool. Let me know if you would like to collaborate.','10:00am'),
(2,1,'When do you think you would be free to meet up? I have a meeting at 2 but Im free after.','5:00pm'),
(3,1,'When do youdlkfmgvklmdfklgmkldfg think you would be I have a meeting at 2 but Im free after.','7:00pm');

