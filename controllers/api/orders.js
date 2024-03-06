const Order = require('../../models/order');

module.exports = {
  cart,
  addToCart,
  setProductQtyInCart,
  checkout
};

// unpaid order 
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

// add item to cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.params.id, req.body);
  res.json(cart);
}

// update amount of items in cart
async function setProductQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.productId, req.body.newQty);
  res.json(cart);
}

// updates isPaid
async function checkout(req, res) {
  let cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  cart = await Order.getCart(req.user._id);
  res.json(cart);
}