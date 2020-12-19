const mongoose = require('mongoose')

const Flight = mongoose.model (
    "Flight",
    new mongoose.Schema({
        from: String,
        airline: String,
    })
)

module.exports = Flight