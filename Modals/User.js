const mongoose = require('mongoose');
const ProductSchema = require('./Product');

const { Schema } = mongoose;

const UserSchema = new Schema({
    userName: { type: String, required: true, unique:true},
    password: { type: String, required: true},
    role:{type: String, enum:['BUYER','SELLER'], required: true},
    catalog: [ProductSchema]
})
module.exports = mongoose.model('User',UserSchema);
