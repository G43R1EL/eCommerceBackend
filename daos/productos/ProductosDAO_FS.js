const Container = require('../../controllers/containerFilesystem')

module.exports = class ProductosDAO extends Container {
    constructor() {
        super('productos.json')
    }
}