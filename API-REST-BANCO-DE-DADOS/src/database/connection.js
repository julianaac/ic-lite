var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',  
        password : 'root', 
        database : 'lite_webacademy'
     }
});
module.exports = knex