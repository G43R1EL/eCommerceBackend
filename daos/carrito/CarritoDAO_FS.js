const ContainerFilesystem = require('../../controllers/containerFilesystem')

module.exports = class CarritoDAO extends ContainerFilesystem {
    constructor() {
        super('carrito.json')
    }
}