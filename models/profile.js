const db = require('../db/config');

Profile ={
   getInfo: () =>{
       return db.query(`SELECT * FROM profile`);
    } 

}

module.exports = Profile;