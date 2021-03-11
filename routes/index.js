const router = require('express').Router();


const apiRouterProducts= require('./api/products');
const apiRouterCategories= require('./api/category')


router.use('/productos', apiRouterProducts);
router.use('/categorias', apiRouterCategories)


module.exports = router;