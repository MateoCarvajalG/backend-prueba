const {productos} = require('../models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
exports.listar = async(req,res,next) =>{
    try {
        const producto = await productos.findAll()
        if (producto){
            res.status(200).json(producto)
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
exports.one = async(req,res,next) =>{
    try {
        const producto = await productos.findOne({where : {id : req.params.id.slice(1)}})
        if (producto){
            res.status(200).json(producto)
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

exports.search = async(req,res,next) =>{
    try {
        const producto = await productos.findAll({
            where:
            {name: {
                [Op.like]: "%"+req.params.search+"%"
            }}
        })
        console.log(producto)
        if (producto){
            res.status(200).json(producto)
        }else{
            res.status(404).send({
                message: 'No hay articulos registrados'
            })
        }
    } catch (error) {
        res.status(500).send({
            message: 'Error!!'
        })
        next(error)
    }
    
}