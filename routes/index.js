const express = require('express');
const buyerRouter = require('./buyer.route');
const sellerRouter = require('./seller.route');
const authRouter = require('./auth.route')
const router = express.Router();

router.use('/seller',sellerRouter);
router.use('/buyer',buyerRouter);
router.use('/auth',authRouter)

module.exports = router;