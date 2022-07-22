let products = require('../products')
const express = require('express')

const app = express()

app.use(express.json())

app.post('/', (req, res) => { 
    const produtos = req.body
    // listOfProducts = [...req.body, ...products]
    produtos.forEach((prod) => products.push(prod))
    return res.status(201).json(products)
})

app.put('/:name', (req, res) => {
    const product = req.body
    const {name} = req.params

    products.forEach((prod, i) => {
        if (name === prod.name ) {
            return products[i] = product
        }
    })
    return res.status(200).json(products)
} )

app.delete('/:name', (req, res) => {
    const {name} = req.params
    products = products.filter(prod => prod.name != name )
    return res.status(403).json(products)
} )

app.get('/', (_req, res) => {
    return res.send(products)
} )

app.listen(3001, console.log('Tá rodando em!'))