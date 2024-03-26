
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const ProductModel = require('./models/Products')



const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/GlassberryCURD");


            // Get API 

 app.get('/', (req, res) =>{
    ProductModel.find({})
    .then(products => res.json(products))
    .catch(err => console.log(err))
 })           



                // POST API

app.post('/createProduct', (req, res) =>{
        ProductModel.create(req.body)
        .then(products => res.json(products))
        .catch(err => res.json(err))
})

// connect to the database()
// (async () => {
//   await mongoose
//     .connect(process.env.MONGODB_URL)
//     .then(() => console.log("connected to the database"))
//     .catch((error) =>
//       console.log("Error in connecting to the database::", error)
//     );
// })();

app.listen(3001, ()=>{
    console.log("Server is Running");
})
