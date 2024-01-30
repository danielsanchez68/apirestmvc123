import dotenv from 'dotenv'

dotenv.config()

const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA || 'MEM'
const PORT = process.env.PORT || 8080
const STRCNX = process.env.STRCNX || 'mongodb://127.0.0.1:27017/mibase'

export default {
    MODO_PERSISTENCIA, // es igual a -> MODO_PERSISTENCIA: MODO_PERSISTENCIA,
    PORT,
    STRCNX,
}