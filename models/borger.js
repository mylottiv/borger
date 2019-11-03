// Import ORM
const orm = require('../config/orm');

// Borger contextual ORM method calls
module.exports.displayBorgers = orm.selectAll;

module.exports.addBorger = orm.insertOne;

module.exports.devourBorger = orm.updateOne;

module.exports.deleteBorger = orm.deleteOne;