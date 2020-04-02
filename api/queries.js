const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_user',
  password: 'personal',
  port: 5432,
})

 //--------------------------------------------------
//Obtener todos los usuarios

const getProducts = (request, response) => {
    pool.query('SELECT * FROM producto', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)     
    })
  }
  
 //--------------------------------------------------
 //obtener un solo usuario

  const getProductById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      console.log(results)
      response.json(results.rows)     
    })
  }
  
 
  

//----------------------------------------------------------------------
//crear un nuevo
const createProduct = (request, response) => {
    const { nombre, descripcion,unidades_disponibles,precio,imagen } = request.body
    console.log(request.body)
  
    pool.query('INSERT INTO producto (nombre, descripcion,unidades_disponibles, precio, imagen) VALUES ($1, $2, $3, $4, $5 )', [nombre, descripcion,unidades_disponibles,precio,imagen], (error, results) => {
      if (error) {
        throw error
      }
      console.log(response)
      response.send('Producto creado')
    })
  }
//actualizar un producto

  const updateProduct = (request, response) => {
    const id = parseInt(request.params.id)
    const {nombre,descripcion, unidades_disponibles, precio, imagen} = request.body
  
    pool.query(
      'UPDATE producto SET nombre = $1, descripcion = $2, unidades_disponibles = $3, precio = $4 ,imagen = $5 WHERE id = $6', 
      [nombre,descripcion, unidades_disponibles, precio, imagen, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Produco ${id} modificado `)
      }
    )
  }

  const deleteProductById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE  FROM producto WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Producto: ${id} borrado`)    
    })
  }

//importar el modulo
  module.exports = {
    getProducts,
    getProductById,
    createProduct,
    deleteProductById,
    updateProduct  
  }
