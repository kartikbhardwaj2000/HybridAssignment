const express = require('express');
const buyerRouter = require('./buyer');
const sellerRouter = require('./seller');
const authRouter = require('./auth')
const router = express.Router();

router.use('/seller',sellerRouter);
router.use('/buyer',buyerRouter);
router.use('/auth',authRouter)

module.exports = router;