import Joi from 'joi'

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(2).max(10).required(),
        precio: Joi.number().min(10).max(10000).required(),
        stock: Joi.number().required()
    })
    const { error } = productoSchema.validate(producto)
    return error
}

export default validar