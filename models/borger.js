// Import ORM
const orm = require('./config/orm');

// Borger contextual ORM method calls
module.exports.displayBorgers = () => orm.selectAll();

module.exports.addBorger = (name) => orm.insertOne(name);

module.exports.updateBorger = (name) => orm.updateOne(name);