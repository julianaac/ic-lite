var knex2 = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'sql742.main-hosting.eu',
        user : 'u970734089_webacademy',  
        password : '6/fWs:ahW=HS', 
        database : 'u970734089_webacademy'
     }
});
module.exports = knex2

/* BANCO DE DADOS LOCAL */

/* var knex2 = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',  
        password : 'root', 
        database : 'u970734089_webacademynew'
     }
});
module.exports = knex2 */