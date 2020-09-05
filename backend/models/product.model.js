const mongoose = require("mongoose");
const shortId = require("shortid")

const Schema = mongoose.Schema;

const productSchema = new Schema({
    _id: { type: String, default: shortId.generate },
    title: String,
    description: String,
    product_image: { type: String },
    price: Number
})

const Products = mongoose.model("Product", productSchema);

module.exports = Products;