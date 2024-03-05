const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');


// GET /api/orders/cart
router.get('/cart', ordersCtrl.cart);

router.post('/cart/products/:id', ordersCtrl.addToCart);

router.post('/cart/checkout', ordersCtrl.checkout);

router.put('/cart/qty', ordersCtrl.setProductQtyInCart);

module.exports = router;
