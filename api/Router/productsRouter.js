const express = require('express');
const routes = express.Router

const products = require('../products')

routes.get('/', (_req, res) => {
    res.status(200).json(products)
})

routes.get('/:id',(req, res) => {
    const id = Number(req.params.id)
    let product = products.find((p) => p.id == id)
    if(!product) return res.status(404).json('product not found')
    return res.status(200).json(product)
})
