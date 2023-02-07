var knex3 = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',  
        password : 'root', 
        database : 'wlms_webacademy'
     }
});
module.exports = knex3