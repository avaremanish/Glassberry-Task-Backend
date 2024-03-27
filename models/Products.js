const { response } = require('express');
const mongoose = require('mongoose')
const cloudinary = require("cloudinary").v2;



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
}); 


const ProductSchema = new mongoose.Schema({

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
      type: String, // Mime type of the image
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

