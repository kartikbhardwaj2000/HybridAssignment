const mongoose = require('mongoose');
const { Schema } = mongoose;

const SellerSchema = new Schema({
    name: { type: String, required: true},
    password: { type: String, required: true},
    role:{type: String, enum:['BUYER','SELLER']},
    catalog: [{
        name:{ type: String, required: true}, 
        price:{type:Number, min: 0, required: true}
    }]
})
module.exports = mongoose.model('Seller',SellerSchema);