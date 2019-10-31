// Initialize mysql
const mysql = require('mysql');

// Initialize db connection for export
const connection = module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'porpoise',
    database: 'borgers_db'
})