const router = require('express').Router();
const productController= require('../../controllers/productsController.js')

router.get('/list',productController.listar);

module.exports=router;