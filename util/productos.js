function getNextID(productos) {
    return String((+productos[productos.length-1]?.id || 0) + 1)
}

function getIndex(productos, id) {
    return productos.findIndex(producto => producto.id == id)
}

export default {
    getNextID, // es igual getNextID: getNextID
    getIndex
}