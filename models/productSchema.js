const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  sizesAvailable: [String],
  size: String,
  colorsAvailable: [String],
  color: String,
  images: [String]
}, {
  timestamps: true
});



module.exports = productSchema;