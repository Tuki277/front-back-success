var express = require('express');
const { post } = require('../app');
var express = require('express')
var router = express.Router();
var productsController = require('../controllers/products')

/* GET home page. */
router.route('/')
  .get(productsController.getProducts)
  .post(productsController.addNewProducts)

router.route('/:id')
  .get(productsController.getProductsByID)
  .put(productsController.editProducts)
  .delete(productsController.deleteProducts)

module.exports = router;
