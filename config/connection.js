// Initialize mysql
const mysql = require('mysql');

// Initialize db connection depending on whether heroku JAWSDB environment or local
module.exports = (process.env.JAWSDB_URL) ? mysql.createConnection(process.env.JAWSDB_URL) : 
    mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'porpoise',
        database: 'borgers_db'
})