const ContainerMongodb = require('../../controllers/containerMongoDB')
const CarritoSchema = require('./schemas/carritoSchema')

module.exports = class CarritoDAO extends ContainerMongodb {
    constructor() {
        super(CarritoSchema, 'carrito')
        this.connect().catch(err => {
            throw new Error(`Error: ${err}`)
        })
    }
}