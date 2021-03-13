const router = require('express').Router();
const categoryController= require('../controllers/categoriesController')

router.get('/list',categoryController.listar);

module.exports=router;