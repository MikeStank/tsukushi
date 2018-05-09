const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  id: { type: Integer, required: true },
  name: { type: String, required: true },
  colors: String,
  date: { type: Date, default: Date.now }
});

const Products = mongoose.model("Products", productSchema);

module.exports = Products;
