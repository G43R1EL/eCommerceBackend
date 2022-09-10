const Container = require('../../controllers/containerFirebase')

module.exports = class ProductosDAO extends Container {
    constructor() {
        super('productos')
    }
}