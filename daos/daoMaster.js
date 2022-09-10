// Load dotenv config
require('dotenv').config()
const DB_ENGINE = process.env.DB_ENGINE

let claseCarritoDAO
let claseProductosDAO

switch (DB_ENGINE) {
    case 'filesystem':
        claseCarritoDAO = require("./carrito/CarritoDAO_FS")
        claseProductosDAO = require("./productos/ProductosDAO_FS")
        break
    case 'firebase':
        claseCarritoDAO = require("./carrito/CarritoDAO_FB")
        claseProductosDAO = require("./productos/ProductosDAO_FB")
        break
    case 'memory':
        claseCarritoDAO = require("./carrito/CarritoDAO_MEM")
        claseProductosDAO = require("./productos/ProductosDAO_MEM")
        break
    case 'mongodb':
        claseCarritoDAO = require("./carrito/CarritoDAO_MDB")
        claseProductosDAO = require("./productos/ProductosDAO_MDB")
        break
    default:
        claseCarritoDAO = require("./carrito/CarritoDAO_FS")
        claseProductosDAO = require("./productos/ProductosDAO_FS")
        break
}

let carritoDAO = new claseCarritoDAO()
let productosDAO = new claseProductosDAO()

module.exports = {
    carritoDAO,
    productosDAO
}