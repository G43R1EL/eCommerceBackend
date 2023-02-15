function productchk (req, res, next) {
    if (!req.body.title || !req.body.description || !req.body.code || !req.body.price ||!req.body.stock || !req.body.category) {
        res.send({status: 'error', messagge: 'Debe completar todos los campos'})
    } else {
        if (!req.body.status) {
            req.body.status = true
        }
        return next()
    }
}

export default productchk