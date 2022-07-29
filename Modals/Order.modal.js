const mongoose = require('mongoose');
const ProductSchema = require('./Product.modal');

const { Schema } = mongoose;

const OrderSchema = new Schema({
    sellerId:{type:mongoose.Types.ObjectId, required: true},
    buyerId:{type:mongoose.Types.ObjectId, required: true},
    items:[ProductSchema],
    createdAt:{type: Number, default: Date.now()}
});

module.exports = new mongoose.model('Order',OrderSchema);