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
module.exports.updateOne = function(id, cb) {
    connection.query('UPDATE borgers SET devoured=true WHERE id=?', [id], function (error, result){
        if (error) throw error;
        console.log(id, 'borger devoured successfully!');
        cb(result);
    })
};

// deleteOne Controller
module.exports.deleteOne = function(id, cb) {
    connection.query('DELETE FROM borgers WHERE id=?', [id], function (error, result){
        if (error) throw error;
        console.log(id, 'borger deleted successfully!');
        cb(result);
    });
};