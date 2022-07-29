const mongoose = require('mongoose');
const { RUPEE } = require('../constants');

const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0, required: true },
  currency: { type: String, default: RUPEE, required: true },
});

module.exports = ProductSchema;
