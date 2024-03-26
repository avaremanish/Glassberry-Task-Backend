const mongoose = require('mongoose')



const ProductSchema = new mongoose.Schema({
  //   name: String,
  //   features: String,
  //   description: String,
  //   images:[
  //     {
  //       data: Buffer, // Image data as Buffer
  //       contentType: String, // Mime type of the image
  //     },
  //   ],
  //   category: String,
  //   subcategory: String,
  //   brand: String,
  //   date: String,
  name: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [
    {
      data: Buffer, // Image data as Buffer
      contentType: String, // Mime type of the image
    },
  ],
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    // default: Date.now,
  },
}); 

const ProductModel = mongoose.model("products", ProductSchema)
module.exports = ProductModel 