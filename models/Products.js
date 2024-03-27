const mongoose = require('mongoose')
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "drw77cdji",
  api_key: "698641675195992",
  api_secret: "LHsugYGwvgveoucqkcZe-KZMQSs",
});



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
//    images: [
//     {
//       url: {
//         type: String,
//         required: true,
//       },
//       contentType: {
//         type: String,
//         required: true,
//       },
//     },
//   ],
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

