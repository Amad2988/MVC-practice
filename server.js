const express = require('express')
const getData = require('./Controllers/getData')
const productData = getData()

const app = express()
const PORT = 1000

app.use((req, res, next) =>{
    console.log(`Running middleware function`);
    next()
}) 
app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views','./Views')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/products', (req, res) =>{
    res.render('products', {data: productData})
})

app.get('/products/new', (req,res) => {
    res.render('new-product')
})

app.post('/products', (req, res) =>{
    console.log(req.body)
})

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})