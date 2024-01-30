import mongoose from "mongoose"
import config from '../config.js'

class CnxMongoDB {
    static connection = false

    static conectar = async () => {
        console.log('Conectado a la base de datos...')
        await mongoose.connect(config.STRCNX)
        console.log('Base de datos conectada!')

        CnxMongoDB.connection = true
    }

    static desconectar = async() => {
        if(!CnxMongoDB.connection) return
        await mongoose.connection.close()
        CnxMongoDB.connection = false
    }
}

export default CnxMongoDB