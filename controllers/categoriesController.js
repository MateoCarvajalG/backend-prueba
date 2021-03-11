const {categorias} = require('../models')

exports.listar = async(req,res,next) =>{
    try {
        const categoria = await categorias.findAll()
        if (categoria){
            res.status(200).json(categoria)
        }else{
            res.status(404).send({
                message: 'No hay articulos registradas'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error!!'
        })
        next(error)
    }
    
}