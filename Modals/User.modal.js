const mongoose = require('mongoose');
const { BUYER, SELLER } = require('../constants');
const ProductSchema = require('./Product.modal');

const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: [BUYER, SELLER], required: true },
  catalog: [ProductSchema],
});
module.exports = mongoose.model('User', UserSchema);
