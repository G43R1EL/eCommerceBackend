const mongoose = require('mongoose')

const ProductoSchema = new mongoose.Schema({
    timestamp: { type: Date, default: Date.now() },
    nombre: { type: String, default: 'Ingrese nombre de producto' },
    descripcion: { type: String, default: 'Ingrese descripción del producto' },
    codigo: { type: String, default: 'Ingrese código de producto' },
    foto: { type: String, default: 'https://picsum.photos/96' },
    precio: { type: Number, default: 0 },
    stock: { type: Number, default: 0 }
}, {timestamps: true})

module.exports = ProductoSchema