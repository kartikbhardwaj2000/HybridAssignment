const express = require('express');
const { celebrate: validate } = require('celebrate');
const buyerController = require('../controllers/buyer.controller');
const authorize = require('../middlewares/authorize');
const { sellerCatalog, createOrder } = require('../validations/buyer.validation');

const router = express.Router();

router.get('/list-of-sellers', authorize('BUYER'), buyerController.getListOfSellers);
router.get('/seller-catalog/:seller_id', validate(sellerCatalog), authorize('BUYER'), buyerController.getSellerCatalog);
router.post('/create-order/:seller_id', validate(createOrder), authorize('BUYER'), buyerController.postCreateOrder);
module.exports = router;
