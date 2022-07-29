const express = require('express');
const sellerController = require('../controllers/seller');
const authorize = require('../middlewares/authorize');
const router = express.Router();

router.post('/create-catalog',authorize('SELLER'),sellerController.postCreateCalatog);
router.get('/orders',authorize('SELLER'),sellerController.getOrders)
module.exports = router;