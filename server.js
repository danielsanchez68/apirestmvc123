import express from 'express'
import RouterProductos from './router/productos.js'

import config from './config.js'
import CnxMongoDB from './model/DBMongo.js'


// aplicación express
const app =  express()

//middlewares para este servidor
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// ---------- Rutas /endpoints Api Restful (GET, POST, PUT, DELETE) -----------
app.use('/api/productos', new RouterProductos().start())

// ---------- Proceso de conexión de la base de datos ------------
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor ApiRestful escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
