import express from 'express'
import PersistenceFS from '../controllers/persistenceFS.js'
import productchk from "../middlewares/productchk.js"

const fsProducts = new PersistenceFS('db/products.json')
const routerProducts = express.Router()

routerProducts.get('/', async (req, res) => {
    const products = (await fsProducts.getAll()).payload
    if (products.length > req.query.limit) {
        products.length = req.query.limit
    }
    res.send(products)
})

routerProducts.get('/:pid', async (req, res) => {
    const product = (await fsProducts.getById(req.params.pid)).payload
    res.send(product)
})

routerProducts.post('/', productchk, async (req, res) => {
    const product = req.body
    res.send(await fsProducts.addItem(product))
})

routerProducts.put('/:pid', async (req, res) => {
    const product = req.body
    res.send(await fsProducts.updateById(req.params.pid, product))
})

routerProducts.delete('/:pid', async (req, res) => {
    res.send(await fsProducts.removeById(req.params.pid))
})

export default routerProducts