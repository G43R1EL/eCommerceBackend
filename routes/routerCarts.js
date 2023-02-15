import express from 'express'
import persistenceFS from "../controllers/persistenceFS.js"

const fsCarts = new persistenceFS()
const routerCarts = express.Router()

routerCarts.post('/', (req, res) => {

})

routerCarts.post('/:cid/product/:pid', (req, res) => {

})

routerCarts.get('/:cid', (req, res) => {
    res.send('Router Carts')
})

export default routerCarts