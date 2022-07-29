const express = require('express');
const {celebrate: validate} = require('celebrate');
const sellerController = require('../controllers/seller.controller');
const authorize = require('../middlewares/authorize');
const { createCatalog } = require('../validations/seller.validation');
const router = express.Router();

router.post('/create-catalog',validate(createCatalog),authorize('SELLER'),sellerController.postCreateCalatog);
router.get('/orders',authorize('SELLER'),sellerController.getOrders)
module.exports = router;