
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const ProductModel = require('./models/Products')
const cloudinary = require("cloudinary").v2;




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

        // UPDATE

app.get("/getProduct/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findById({_id:id})
    .then(products => res.json(products))
    .catch(err => console.log(err));
});

        // UPDATED DATA  PUT

app.put('/updateProduct/:id', (req,res)=>{
    const id = req.params.id;
    ProductModel.findByIdAndUpdate({_id:id}, {
        name:req.body.name , 
        features: req.body.features, 
        description:req.body.description})
    .then(products => res.json(products))
    .catch(err => console.log(err))
})

                // POST API

app.post('/createProduct', (req, res) =>{
        ProductModel.create(req.body)
        .then(products => res.json(products))
        .catch(err => res.json(err))
})


                // DELETE

app.delete('/deleteProduct/:id', (req, res) =>{
        const id = req.params.id;
        ProductModel.findByIdAndDelete(
          { _id: id }
        )
          .then((products) => res.json(products))
          .catch((err) => console.log(err));
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
