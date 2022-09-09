const Container = require('../../controllers/containerMongoDB')
const ProductoSchema = require('./schemas/productosSchema')

module.exports = class ProductosDAO extends Container {
    constructor() {
        super(ProductoSchema, 'productos')
        this.connect().catch(err => {
            throw new Error(`Error: ${err}`)
        })
    }
}