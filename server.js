const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();

// mongodb://localhost:27017/

// connect to mongoDB Sample=databaase name
mongoose.connect("mongodb://localhost:27017/Sample",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected with mongodb");
}).catch((err)=>{
    console.log(err)
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
// shema for products

const productSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
})

// collection
const Product=new mongoose.model("Product",productSchema)

// api for creatinf product
app.post("/api/v1/product/new", async(req,res)=>{
 const product=await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
})



app.listen(4500,()=>{
    console.log("server is working http://localhost:4500");
})