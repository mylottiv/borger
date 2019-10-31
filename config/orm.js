// Import mysql db connection
const connection = require('./connection');

// selectAll Controller
module.exports.selectAll = function() {
    connection.connect();
    connection.query('SELECT * FROM borgers', function (error, results) {
        if (error) throw error;
        return results[0];
    });
    connection.end()
};

// insertOne Controller
module.exports.insertOne = function(name) {
    connection.connect();
    connection.query('INSERT INTO borgers (name) VALUES (?)', [name], function(error, results) {
        if (error) throw error;
        console.log(name, 'borger added successfully!');
    })
};

// updateOne Controller
module.exports.updateOne = function(name) {
    connection.connect();
    connection.query('UPDATE borgers SET devoured=true WHERE name=?', [name], function (error, results){
        if (error) throw error;
        console.log(name, 'borger devoured successfully!');
    })
};