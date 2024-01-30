import util from '../../util/productos.js'


class ModelMem {
    #productos = null

    constructor() {
        this.#productos = [
            { id: '1', nombre: 'TV', precio: 1234, stock: 55 },
            { id: '2', nombre: 'Mesa', precio: 234, stock: 23 },
            { id: '3', nombre: 'Mouse', precio: 123, stock: 436 },
        ]
    }

    obtenerProductos = async () => this.#productos

    obtenerProducto = async id => {
        const producto = this.#productos.find(producto => producto.id == id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = util.getNextID(this.#productos)
        this.#productos.push(producto)
        return producto
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = util.getIndex(this.#productos, id)
        if (index != -1) {

            const productoAnt = this.#productos[index]
            const productoNuevo = { ...productoAnt, ...producto }

            this.#productos.splice(index, 1, productoNuevo)
            return productoNuevo
        }
        else {
            producto.id = util.getNextID(this.#productos)
            this.#productos.push(producto)
            return producto
        }
    }

    borrarProducto = async id => {
        let producto = {}

        const index = util.getIndex(this.#productos, id)
        if (index != -1) {
            producto = this.#productos.splice(index, 1)[0]
        }

        return producto
    }
}

export default ModelMem