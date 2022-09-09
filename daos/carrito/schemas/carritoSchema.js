const mongoose = require('mongoose')

const CarritoSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now() },
    productos: { type: Array, default: [] },
}, {timestamps: true})

module.exports = CarritoSchema