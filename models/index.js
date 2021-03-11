const Sequelize= require('sequelize')

const sequelize = new Sequelize('bsale_test','bsale_test','bsale_test',{
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',
    "logging": false,
    define: { 
        freezeTableName: true, 
        timestamps: false
    },
    pool:{
        max:5,
        min:0,
        require:30000,
        idle:10000 
    }
})


sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })
const basededatosproduct="product"
const productos = sequelize.define(basededatosproduct,{
     id: { type: Sequelize.INTEGER, primaryKey:true},
     name: Sequelize.STRING,
     url_image: Sequelize.STRING,
     price: Sequelize.FLOAT,
     discount: Sequelize.INTEGER,
     category: Sequelize.INTEGER,
})


const categorias= sequelize.define('category',{
     id: { type: Sequelize.INTEGER, primaryKey:true},
     name: Sequelize.STRING,
})
module.exports={
    productos,categorias
 };