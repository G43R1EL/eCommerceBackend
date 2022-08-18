const express = require('express')
const router = express.Router()
const Container = require('../controllers/container')
const FILE_CART = 'cart.json'
const container = new Container(FILE_CART)

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
    const { id } = req.params
    container.deleteById(id)
        .then (data => { res.json(data) })
})

router.get('/:id/productos', (req, res) => {
    const { id } = req.params
    container.getById(id)
        .then (data => { res.json(data) })
})

router.post('/:id/productos', (req, res) => {
    const { id } = req.params
    const product = req.body
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
    const { id, id_prod } = req.params
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