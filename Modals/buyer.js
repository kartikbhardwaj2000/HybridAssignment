const mongoose = require('mongoose');
const { Schema } = mongoose;

const BuyerSchema = new Schema({
    name: { type: String, required: true},
    password: { type: String, required: true},
    role:{type: String, enum:['BUYER','SELLER']}
})
module.exports = mongoose.model('Buyer',BuyerSchema);