import ModelMem from "./productosMem.js"
import ModelFile from "./productosFile.js"
import ModelMongoDB from "./productosMongoDB.js"


class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('**** Persistencia en Memoria ****')
                return new ModelMem()

            case 'FILE':
                console.log('**** Persistencia en File system ****')
                return new ModelFile()

            case 'MONGODB':
                console.log('**** Persistencia en MongoDB ****')
                return new ModelMongoDB()

            default:
                console.log('**** Persistencia en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory