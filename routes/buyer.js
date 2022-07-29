const express = require('express');
const buyerController = require('../controllers/buyer');
const authorize = require('../middlewares/authorize');
const router = express.Router();

router.get('/list-of-sellers',authorize('BUYER'),buyerController.getListOfSellers);
router.get('/seller-catalog/:seller_id',authorize('BUYER'),buyerController.getSellerCatalog);
router.post('/create-order/:seller_id',authorize('BUYER'),buyerController.postCreateOrder);
module.exports = router;