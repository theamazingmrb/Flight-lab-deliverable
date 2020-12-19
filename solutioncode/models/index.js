const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.airport = require("./airport.model");
db.terminal = require("./terminal.model");
db.flight = require("./flight.model");

module.exports = db;