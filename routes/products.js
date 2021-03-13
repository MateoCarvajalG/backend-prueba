const router = require('express').Router();
const productsController= require('../controllers/productsController')

router.get('/list',productsController.listar);
router.get('/product/:id', productsController.one);
router.get('/search/:search' , productsController.search)

module.exports=router;