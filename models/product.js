const mongoose = require('mongoose');
const productSchema = require('./productSchema');
require('./category');

module.exports = mongoose.model('Product', productSchema);