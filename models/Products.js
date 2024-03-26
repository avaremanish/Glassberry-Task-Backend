const mongoose = require('mongoose')



const ProductSchema = new mongoose.Schema({
    name: String,
    features: String,
    description: String,
}) 

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel 