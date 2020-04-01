const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const port = 3006
const consultas = require("./queries")
const cors=require("cors")

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(cors())
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
app.listen(port, () => {
    console.log(`Api running on port ${port}.`)
  })

//adicionando los metodos  

/* 1 */app.get('/productos', consultas.getProducts)
/* 2 */app.get('/productos/:id', consultas.getProductById)
/* 3 */app.post('/productos', consultas.createProduct)
/* 4 */app.put('/productos/:id', consultas.updateProduct)
/* 5 */app.delete('/productos/:id', consultas.deleteProductById)

