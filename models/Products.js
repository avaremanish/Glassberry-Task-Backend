const mongoose = require('mongoose')



const ProductSchema = new mongoose.Schema({
  name: String,
  features: String,
  description: String,
  image: String,
  category: String,
  subcategory: String,
  brand: String,
    date: String,
}); 

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel 