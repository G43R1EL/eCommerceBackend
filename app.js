// IMPORTS
import express from 'express'
import routerCarts from "./routes/routerCarts.js"
import routerProducts from "./routes/routerProducts.js"

// EXPRESS
const app = express()
// EXPRESS CONFIG - MIDDLEWARES
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// ROUTES
app.use('/api/carts', routerCarts)
app.use('/api/products', routerProducts)

// SERVER
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto No. ${PORT}`)
})
server.on('error', (err) => {
    console.error(err)
})