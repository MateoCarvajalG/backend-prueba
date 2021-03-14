# Back-end para prueba tecnica de Bsale

_Este repositorio es el lado servidor en el cual se realiza el manejo de la base de datos para luego estos datos ser suministrados al [Lado Cliente (FrontEnd)](https://github.com/MateoCarvajalG/frontend-prueba), este repositorio vendria siendo un Api REST que se consumira desde el FrontEnd.

## Comenzando 🚀

_Este repositorio fue desarrollando haciendo uso de NodeJS y para la interaccion de los usuarios con la base de datos se uso el ORM sequelize ._


# Modelos (BBDD) 📋
 
para poder dar inicio a este proyecto se requiere antes que todo realizar una conexion con la base de datos para asi poder interactuar con ella.
```
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
```
En el codigo anterior se realiza la conexion hacia la base de datos usando el ORM de sequelize el cual permite realizar una instancia de sequelize y se le debe pasar como parametros los datos de configuracion como sequelize nos documenta en su pagina, como se puede observar en el siguiente fragmento de codigo. 
```
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
```
paso seguido se requiere instanciar los modelos(tablas) de la base de datos para poder manipular y hacer uso de estas tablas

```
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
```


# index.js 🔧

Este archivo es la entrada hacia el codigo, el cual permite dar inicio a la ejecucion del programa, para esto se creo la aplicacion haciendo uso de express para poder manejar de forma adecuada los endpoints o rutas y poder tener cierto orden a la hora de realizar consultas

## Primeros EndPoints 
Nos encontramos con 2 primeros Endpoints o rutas las cuales son :
 ### /productos
 ### /categorias


con estos dos endpoints iniciales se va a tener acceso y realizar consultas segun se requiera, sea por productos o por categorias

## Puerto
a la hora de poder dar inicio a la ejecucion del proyecto se necesita esclarecer un puerto por el cual va a funcionar y correr la aplicacion, en este caso como el desarrollo va a ser desplegado en heroku; heroku nos proporciona un puerto mediante 

```
process.env.PORT
```

pero para ejecutar la aplicacion en un etorno de desarrollo local usa el puerto 3000 


# VISTA🛣️

En esta carpeta se pueden encontrar 2 archivos que van a terminar de construir la ruta para poder asi realizar consultas efectivas
### category.js
Este construye la ruta para realizar consultas unicamente sobre el modelo categorias
    
```
   * categorias/list 
Esta ruta proporciona la lista de todas las categorias existentes
``` 

### products.js
Este construye la ruta para realizar consultas unicamente sobre el modelo productos
```
   * productos/list 
esta ruta va a proporcionar la lista de todos los productos

   * productos/product/:id 
Esta ruta va a proporcionar el producto que corresponda al id

   * productos/search
esta ruta va a proporcionar la lista de los productos que en su nombre tenga coincidencia alguna con la busqueda 

   * productos/categoria/:category
esta ruta va a proporcionar la lista de todos los productos que correspondan con la categoria requerida
```

luego de asignadas las rutas se proporciona un controlador el cual va a ir en busqueda de los datos solicitados
# CONTROLADOR 🕹️
en la ultima etapa del modelo seguido para desarrollar este repositorio es el controlador el cual va a tener toda la logica para realizar la busqueda y poder capturar los datos


estos controladores  que va a permitir buscar productos que hay dentro de la tabla dependiendo el requerimiento del lado servidor, estos productos se van a buscar mediante sequelize con lenguaje MySql para posteriormente guardarlos en un JSON el cual va a ser usado en el lado cliente para renderizar estos datos.

## Ejemplos: 
En estos ejemplos vamos a realizar consultas a las rutas creadas anteriormente 

``` /productos/list```
[lista de todos los productos existentes](https://backend-prueba-bsale.herokuapp.com/productos/list) - https://backend-prueba-bsale.herokuapp.com/productos/list

``` /productos/product/:5```
[producto con el id:5](https://backend-prueba-bsale.herokuapp.com/productos/product/:5) - https://backend-prueba-bsale.herokuapp.com/productos/product/:5
```
{"id":5,"name":"ENERGETICA MR BIG","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg","price":1490,"discount":20,"category":1}
```
``` /productos/search/monster```
[producto buscado](https://backend-prueba-bsale.herokuapp.com/productos/search/monster) - https://backend-prueba-bsale.herokuapp.com/productos/search/monster

```
[{"id":34,"name":"ENERGETICA MONSTER RIPPER","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/mosterriper0436.jpg","price":1990,"discount":0,"category":1},{"id":36,"name":"ENERGETICA MONSTER VERDE","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/monsterverde0476.jpg","price":1990,"discount":0,"category":1},{"id":77,"name":"ENERGETICA MONSTER RIPPER","url_image":"","price":1990,"discount":0,"category":1},{"id":79,"name":"ENERGETICA MONSTER VERDE","url_image":"","price":1990,"discount":0,"category":1}]
```

``` /productos/categoria/5```
[producto buscado](https://backend-prueba-bsale.herokuapp.com/productos/categoria/5) -https://backend-prueba-bsale.herokuapp.com/productos/categoria/5

```
[{"id":47,"name":"Maní salado","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/manisaladomp4415.jpg","price":600,"discount":0,"category":5},{"id":53,"name":"Mani Sin Sal","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/manisinsalmp6988.jpg","price":500,"discount":0,"category":5},{"id":54,"name":"Papas Fritas Lisas Bolsa Grande","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisasgrande7128.jpg","price":1490,"discount":0,"category":5},{"id":55,"name":"Papas Fritas Bolsa Pequeña","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/papaslisas7271.jpg","price":500,"discount":0,"category":5},{"id":56,"name":"Papas Fritas Tarro","url_image":"https://dojiw2m9tvv09.cloudfront.net/11132/product/78028005335657432.jpg","price":1990,"discount":0,"category":5}]
```