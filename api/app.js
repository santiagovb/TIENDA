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
    console.log(`Api running on port ${port}`    
    )
  })

//adicionando los metodos  
/*
app.get('/productos', consultas.getProducts)
app.get('/productos/:id', consultas.getProductById)
app.post('/productos', consultas.createProduct)
app.put('/productos/:id', consultas.updateProduct)
app.delete('/productos/:id', consultas.deleteProductById)
*/

// -------- Users ----------
/* 6 */ app.get('/users', consultas.getUsers)

