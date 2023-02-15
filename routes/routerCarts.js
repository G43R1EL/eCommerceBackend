import express from 'express'
import persistenceFS from "../controllers/persistenceFS.js"

const fsCarts = new persistenceFS('db/carts.json')
const routerCarts = express.Router()

routerCarts.post('/', async (req, res) => {
    res.send(await fsCarts.addItem({products: []}))
})

routerCarts.post('/:cid/product/:pid', async (req, res) => {
    const query = await fsCarts.getById(req.params.cid)
    if (query.status === 'success') {
        const product = req.body
        product.id = req.params.pid
        const idx = query.payload.products.findIndex(item => item.id == req.params.pid)
        if (idx !== -1) {
            query.payload.products[idx].quantity += parseInt(req.body.quantity)
            fsCarts.updateById(req.params.cid, query.payload)
            res.send({status: 'success', message: 'Producto actualizado'})
        } else {
            req.body.quantity = parseInt(req.body.quantity)
            query.payload.products.push(product)
            fsCarts.updateById(req.params.cid, query.payload)
            res.send({status: 'success', message: 'Producto agregado'})
        }
    } else {
        res.send(query)
    }
})

routerCarts.get('/:cid', async (req, res) => {
    const query = await fsCarts.getById(req.params.cid)
    if (query.status === 'success') {
        res.send(query.payload.products)
    } else {
        res.send(query)
    }
})

export default routerCarts