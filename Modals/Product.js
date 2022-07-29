const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name:{ type: String, required: true}, 
    price:{type:Number, min: 0, required: true},
    currency:{type:String, default:'Rupee', required:true}
});

module.exports= ProductSchema;