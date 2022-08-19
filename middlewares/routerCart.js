const express = require('express')
const router = express.Router()
const Container = require('../controllers/container')
const FILE_CART = 'cart.json'
const FILE_PRD = 'products.json'
const container = new Container(FILE_CART)
const containerProducts = new Container(FILE_PRD)

// Cart routes
router.post('/', (req, res) => {
    const products = req.body
    const cart = {
        timestamp: Date.now(),
        products: products
    }
    container.save(cart)
        .then (data => { res.json(data) })
})

router.delete('/:id', (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    container.deleteById(id)
        .then (data => { res.json(data) })
})

router.get('/:id/productos', (req, res) => {
    let { id } = req.params
    id = parseInt(id)
    container.getById(id)
        .then (data => { res.json(data) })
})

router.post('/:id/productos', (req, res) => {
    let { id } = req.params
    let idProduct = req.body.idProduct
    id = parseInt(id)
    idProduct = parseInt(idProduct)
    const product = containerProducts.getById(idProduct)
    const snapshot = container.getById(id).then (data => { return data })
    if (snapshot.products.length > 0) {
        const products = snapshot.products
        products.push(product)
        const cart = {
            timestamp: Date.now(),
            products: products
        }
        container.updateById(id, cart).then (data => { res.json(data) })
    } else {
        res.json({ error: 'cart id not found' })
    }
})

router.delete('/:id/productos/:id_prod', (req, res) => {
    let { id, id_prod } = req.params
    id = parseInt(id)
    id_prod = parseInt(id_prod)
    const snapshot = container.getById(id).then (data => { return data })
    if (snapshot.products.length > 0) {
        const products = snapshot.products
        const newProducts = products.filter(product => product.id != id_prod)
        const cart = {
            timestamp: Date.now(),
            products: newProducts
        }
        if (newProducts.length < products.length) {
            container.updateById(id, cart).then (data => { res.json(data) })
        } else {
            res.json({ error: 'product id not found' })
        }
    } else {
        res.json({ error: 'cart id not found' })
    }
})

// Export router
module.exports = {
    router: router
}