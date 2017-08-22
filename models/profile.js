const db = require('../db/config');


const Profile ={
   getInfo: (id) =>{
       return db.query(`SELECT * FROM profile
        WHERE user_id=$1`, [id]);
    },
    setInfo: (profile)=>{
        return db.one(`
        INSERT INTO profile(age,class,cohort,interest,location,bio,picture_url, user_id)
        VALUES($1,$2,$3,$4,$5,$6,$7,$8)
        RETURNING *`,
        [profile.age,profile.class,profile.cohort,profile.interest, profile.location,profile.bio,profile.picture_url,profile.user_id])
    },
    editInfo : (profile,id)=>{
        return db.one(`
        UPDATE profile SET
        age = $1,
        class = $2,
        cohort = $3,
        interest=$4,
        location=$5,
        bio=$6,
        picture_url=$7
        WHERE user_id =$8
        RETURNING *`,
    [profile.age,profile.class,profile.cohort,profile.interest, profile.location,profile.bio,profile.picture_url,id])
    },
    getAll: ()=>{
        return db.query(`
        SELECT users.first_name, users.last_name, profile.age, profile.class, profile.bio, profile.picture_url 
        FROM users join profile on users.id = profile.user_id`)
    }

}

module.exports = Profile;