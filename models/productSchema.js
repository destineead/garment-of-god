const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  size: {
    type: String
  },
  images: {
    type: Array,
    },
  color: {
    type: String,
    enum: ['Black', 'White', 'Red', 'Navy', 'Tan'],
  },
  rating: [
    {
      star: Number,
      postedBy: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  },
],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;