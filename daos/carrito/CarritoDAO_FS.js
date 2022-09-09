const Container = require('../../controllers/containerFilesystem')

module.exports = class CarritoDAO extends Container {
    constructor() {
        super('carrito.json')
    }
}