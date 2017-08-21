const db = require('../db/config');

Profile ={
   getInfo: () =>{
       return db.query(`SELECT * FROM profile`);
    },
    setInfo: (profile)=>{
        return db.one(`
        INSERT INTO (age,class,cohort,interest,location,bio,picture_url)
        age INTEGER,
        class VARCHAR(255),
        cohort VARCHAR(255),
        interest VARCHAR(255),
        location VARCHAR(50),
        bio VARCHAR(140),
        picture_url VARCHAR(255),
        VALUES($1,$2,$3,$4,$5,$6,$7)
        RETURNING *`
        [profile.age,profile.class,profile.cohort,profile.interest, profile.location,profile.bio,profile.picture_url])
    }

}

module.exports = Profile;