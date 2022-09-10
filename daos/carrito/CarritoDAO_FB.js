const ContainerFilesystem = require('../../controllers/containerFirebase')

module.exports = class CarritoDAO extends ContainerFilesystem {
    constructor() {
        super('carrito')
    }
}