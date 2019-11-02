// Import mysql db connection
const connection = require('./connection');

// Init connnection
connection.connect();

// selectAll Controller
module.exports.selectAll = function(cb) {
    connection.query('SELECT * FROM borgers', function (error, results) {
        if (error) throw error;
        const output = results.map((borger) => {
            return {
                id: borger.id, 
                borger_name: borger.borger_name, 
                devoured: borger.devoured
            };
        });
        cb(output);
    });
};

// insertOne Controller
module.exports.insertOne = function(name, cb) {
    console.log(name, cb);
    connection.query('INSERT INTO borgers (borger_name) VALUES (?)', [name], function(error, result) {
        if (error) throw error;
        console.log(name, 'borger added successfully!');
        cb(result);
    })
};

// updateOne Controller
module.exports.updateOne = function(name) {
    
    connection.query('UPDATE borgers SET devoured=true WHERE name=?', [name], function (error, results){
        if (error) throw error;
        console.log(name, 'borger devoured successfully!');
    })
};