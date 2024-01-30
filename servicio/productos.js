//import ModelMem from '../model/DAO/productosMem.js'
//import ModelFile from '../model/DAO/productosFile.js'

import validar from './validaciones/producto.js'
import ModelFactory from '../model/DAO/productosFactory.js'

import config from '../config.js'


class Servicio {
    #model = null

    constructor() {
        //this.#model = new ModelMem()
        //this.#model = new ModelFile()
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerProductos = async id => {
        if (id) {
            const producto = await this.#model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.#model.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        const error = validar(producto)
        if (!error) {
            const productoGuardado = await this.#model.guardarProducto(producto)
            return productoGuardado
        }
        else {
            return { error: error.details[0].message }
        }
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.#model.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.#model.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio