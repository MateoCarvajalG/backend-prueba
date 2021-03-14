const Sequelize= require('sequelize')
/* 
  Se realiza la conexion con la base de datos 
*/
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

/* 
Se verifica conexion a la base de datos
*/
sequelize.authenticate()
  .then(() => {
    console.log(' Base De Datos conectada')
  })
  .catch(err => {
    console.log('No se logro conectar la Base De Datos')
  })
/* 
Se instancia los modelos de cada tabla 
*/
const productos = sequelize.define('product',{
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